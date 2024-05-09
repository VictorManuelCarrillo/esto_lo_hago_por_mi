// Next response
import { NextResponse } from 'next/server'
// Node system
import path from 'path'
import { writeFile } from 'fs/promises'
// MongoDB
import { connectDB } from '@/utils/mongoose'
// DatabaseModel
import Animal from '@/models/Animal'
// Cloudinary
import cloudinary from '@/utils/cloudinary'

//# GET all animals ______________________________________________________ #>
export async function GET() {
  // connect whit mongoDB database
  await connectDB()

  const animals = await Animal.find()
  return NextResponse.json(animals)
}

//? Auxiliar function for extract values from formData ___________________ ?>
function getValues(formData) {
  const title = formData.get('title')
  const description = formData.get('description')

  return { title, description }
}

//# POST (CREATE) new animal _____________________________________________ #>
export async function POST(request) {
  // creating variable filePath for save image in a file
  let filePath
  try {
    // connect whit mongoDB database
    await connectDB()
  } catch (error) {
    console.error('Error al conectar con la base de datos MongoDB:', error)
    return NextResponse.json(
      {
        message: 'Error al conectar con la base de datos MongoDB',
      },
      { status: 500 }
    )
  }
  const data = await request.formData()

  // extract image value
  const image = data.get('image')
  // extract the rest o values
  const { title, description } = getValues(data)

  //handle errors
  if (!image || !title || !description) {
    return NextResponse.json(
      { message: 'required information is missing' },
      { status: 400 }
    )
  }

  // create image Buffer for upload
  const bytes = await image.arrayBuffer()
  const buffer = Buffer.from(bytes)

  try {
    // save image in a file
    filePath = path.join(process.cwd(), 'public/images/upload', image.name)
    await writeFile(filePath, buffer)
  } catch (error) {
    console.error('Error al guardar la imagen en el servidor:', error)
    return NextResponse.json(
      {
        message: 'Error al guardar la imagen en el servidor',
      },
      { status: 500 }
    )
  }

  try {
    // upload image to Cloudinary
    const response = await cloudinary.uploader.upload(filePath)
    console.log(response)

    // save Animal in database
    const newAnimal = new Animal({
      title,
      description,
      imageUrl: response.secure_url,
    })
    await newAnimal.save()

    return NextResponse.json({
      message: 'Imagen subida y datos guardados en MongoDB',
    })
  } catch (error) {
    console.error('Error al cargar la imagen en Cloudinary:', error)
    return NextResponse.json(
      {
        message: 'Error al cargar la imagen en Cloudinary',
      },
      { status: 500 }
    )
  }
}

// Node system
import path from 'path'
import { writeFile } from 'fs/promises'
// Next response
import { NextResponse } from 'next/server'
// MongoDB
import { connectDB } from '@/utils/mongoose'
// Database Model
import Animal from '@/models/Animal'
// Cloudinary
import cloudinary from '@/utils/cloudinary'

//? Get data from formData function ______________________________ ?>
function getValues(formData) {
  const title = formData.get('title')
  const description = formData.get('description')
  return { title, description }
}

//? upload image to Cloudinary function __________________________ ?>
async function uploadImageCloudinary(imagePath, paramsId) {
  try {
    const animal = await Animal.findById(paramsId)
    const previousImageUrl = animal.imageUrl

    if (previousImageUrl) {
      const publicId = previousImageUrl.match(/\/([^/]+)$/)[1]
      await cloudinary.uploader.destroy(publicId)

      const response = await cloudinary.uploader.upload(imagePath)
      return response.secure_url
    }
  } catch (error) {
    throw new Error('Error to load image to cloudinary')
  }
}

//# GET single animal ____________________________________________ #>
export async function GET(request, { params }) {
  try {
    await connectDB()

    const foundAnimal = await Animal.findById(params.id)

    return NextResponse.json(foundAnimal)
  } catch (error) {
    return NextResponse.json(
      { message: 'animal not found...' },
      { status: 404 }
    )
  }
}

//# PUT(UPDATE) animal ____________________________________________ #>
export async function PUT(request, { params }) {
  try {
    await connectDB()
    const formData = await request.formData()
    const { title, description } = getValues(formData)
    const image = formData.get('image')

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filePath = path.join(
      process.cwd(),
      'public/images/upload',
      image.name
    )
    await writeFile(filePath, buffer)

    const imageUrl = await uploadImageCloudinary(filePath, params.id)

    const updatedAnimal = await Animal.findByIdAndUpdate(
      params.id,
      { title, description, imageUrl },
      { new: true }
    )

    return NextResponse.json(updatedAnimal)
  } catch (error) {
    console.error('Error:', error.message)
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}

//# DELETE animal ________________________________________________ #>
export async function DELETE(request, { params }) {
  try {
    await connectDB()

    // Obtener el animal a eliminar
    const animal = await Animal.findById(params.id)
    if (!animal) {
      return NextResponse.json({ message: 'Animal not found' }, { status: 404 })
    }

    // Obtener la URL de la imagen del animal
    const imageUrl = animal.imageUrl

    // Si hay una URL de imagen, extraer el publicId de Cloudinary y eliminar la imagen
    if (imageUrl) {
      const publicId = imageUrl.match(/\/([^/]+)$/)[1]
      await cloudinary.uploader.destroy(publicId)
    }

    // Eliminar el animal de la base de datos MongoDB
    await Animal.findByIdAndDelete(params.id)

    return NextResponse.json({ message: 'Animal deleted successfully' })
  } catch (error) {
    console.error('Error:', error.message)
    return NextResponse.json(
      { message: 'Error deleting animal' },
      { status: 500 }
    )
  }
}

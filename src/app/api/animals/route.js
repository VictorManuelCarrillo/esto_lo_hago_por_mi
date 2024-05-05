import { connectDB } from '@/utils/mongoose';
import Animal from '@/models/Animal';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

connectDB();

export default async function handler(req, res) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const animals = await Animal.find();
        return res.status(200).json(animals);
      } catch (error) {
        return res.status(500).json({ error: error.message });
      }

    case 'POST':
    try {
      const newAnimal = new Animal(body);
      const savedAnimal = await newAnimal.save();
      return res.status(201).json(savedAnimal);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }

    default:
      return res.status(400).json({ msg: 'This method is not supported...' });
  }
}
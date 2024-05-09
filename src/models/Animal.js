import { Schema, model, models } from 'mongoose'

const animalSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'title is required'],
      trim: true,
      maxLength: 250,
    },
    description: {
      type: String,
      required: [true, 'description is required'],
      trim: true,
      maxLength: 600,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default models.Animal || model('Animal', animalSchema)

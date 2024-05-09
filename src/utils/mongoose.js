import mongoose from 'mongoose'

const connection = {
  isConnected: false,
}

export async function connectDB() {
  if (connection.isConnected) return

  const db = await mongoose.connect(process.env.MONGODB_URI_DEV)
  console.log(db.connection.db.databaseName)
  connection.isConnected = db.connections[0].readyState
}

// on try connection options
mongoose.connection.on('connected', () => {
  console.log('MongoDB is connected... :D')
})

mongoose.connection.on('error', (error) => {
  console.log('WARNING!... error to connect mongoDB', error)
})

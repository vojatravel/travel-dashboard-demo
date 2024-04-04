// pages/api/addDocument.js
import { MongoClient } from 'mongodb';

// This is a simple example. In production, consider securing your database connection
// and managing connections efficiently
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
    await client.connect();
    return client.db("training"); // Replace with your actual database name
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { collectionName = 'locations', createCollection, document } = req.body;

    try {
      const db = await connectToDatabase();
      let collection;

      // Check if collection creation is requested
      if (createCollection) {
        // This creates a new collection or gets the existing one
        collection = await db.createCollection(collectionName);
      } else {
        // This assumes the collection exists
        collection = db.collection(collectionName);
      }

      const result = await collection.insertOne(document);
      res.status(200).json({ message: 'Document added successfully', _id: result.insertedId });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add document' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

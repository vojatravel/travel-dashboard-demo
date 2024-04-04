// pages/api/fetchDocuments.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToDatabase() {
    await client.connect();
    return client.db("training"); // Replace with your actual database name
}

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { collectionName } = req.query; // Expect a collection name in the query string

    try {
      const db = await connectToDatabase();
      const collection = db.collection(collectionName);
      const documents = await collection.find({}).toArray();

      res.status(200).json(documents);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch documents' });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

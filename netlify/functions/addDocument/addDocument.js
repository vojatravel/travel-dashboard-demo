import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed', headers: { 'Allow': 'POST' } };
  }

  const { collectionName = 'locations', createCollection, document } = JSON.parse(event.body);
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await client.connect();
    const db = client.db("training");
    let collection;

    if (createCollection) {
      collection = await db.createCollection(collectionName);
    } else {
      collection = db.collection(collectionName);
    }

    const result = await collection.insertOne(document);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Document added successfully', _id: result.insertedId }),
    };
  } catch (error) {
    console.error('Error adding document:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to add document' }),
    };
  }
}

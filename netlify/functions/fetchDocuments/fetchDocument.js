import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

const connectToDatabase = async () => {
  if (!clientPromise) {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }
  await clientPromise;
  return client.db("training");
};

export async function handler(event, context) {
  context.callbackWaitsForEmptyEventLoop = false; // Important for reusing the connection

  if (event.httpMethod === 'GET') {
    try {
      const db = await connectToDatabase();
      const collectionName = event.queryStringParameters.collectionName; // Get collectionName from query parameters
      const collection = db.collection(collectionName);
      const documents = await collection.find({}).toArray();
      
      return {
        statusCode: 200,
        body: JSON.stringify(documents),
      };
    } catch (error) {
      console.error(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to fetch documents' }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: `Method ${event.httpMethod} Not Allowed`,
    };
  }
}

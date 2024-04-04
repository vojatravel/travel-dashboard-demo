import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
let dbConnection;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export async function connectToDatabase() {
  if (!dbConnection) {
    await client.connect();
    dbConnection = client.db("training");
    console.log("Successfully connected to MongoDB.");
  }
  return dbConnection;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { collectionName, createCollection, document } = req.body;

    try {
      const db = await connectToDatabase();
      let collection;

      if (createCollection) {
        collection = await db.createCollection(collectionName);
      } else {
        collection = db.collection(collectionName);
      }

      const result = await collection.insertOne(document);
      res
        .status(200)
        .json({
          message: "Document added successfully",
          _id: result.insertedId,
        });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to add document" });
    } finally {
      await client.close();
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
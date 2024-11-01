// External Dependencies
import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';

// Global Variables
export const collections: { tournaments?: mongoDB.Collection } = {};

// Initialize Connection
//TODO: FIX USE ON NON-NULL ASSERTIONS ON DB_CONN_STRING.
export async function connectToDatabase() {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!);

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const tournamentsCollection: mongoDB.Collection = db.collection(
    process.env.TOURNAMENTS_COLLECTION_NAME!,
  );

  collections.tournaments = tournamentsCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${tournamentsCollection.collectionName}`,
  );
}

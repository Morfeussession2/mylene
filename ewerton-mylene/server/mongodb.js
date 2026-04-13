import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const options = {
  appName: 'ewerton-mylene',
  maxIdleTimeMS: 5000,
};

const client = new MongoClient(process.env.MONGODB_URI, options);

// Export a module-scoped MongoClient to ensure the client can be shared across functions
export default client;

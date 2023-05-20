import { Client, Account, Databases } from "appwrite";

const client = new Client();
const account = new Account(client);
const database = new Databases(
  client,
  process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
);

client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT_URL)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

export { client, account, database };

import { Client, Account, Databases } from "appwrite";

const client = new Client();
const account = new Account(client);
const database = new Databases(client, "6467b0d9a10010458ac0");

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6467873fd13b060367cf");

export { client, account, database };

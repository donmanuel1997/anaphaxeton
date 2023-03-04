import { Account, Databases, Client } from "appwrite";
const client = new Client();
client.setEndpoint('http://167.172.102.171/v1').setProject("6401857e246dbede9d8b")
export const account = new Account(client)
export const databases = new Databases(client)
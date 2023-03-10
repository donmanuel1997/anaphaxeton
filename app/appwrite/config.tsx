import { Account, Databases, Client } from "appwrite";
const client = new Client();
client.setEndpoint('https://167.172.102.171:80/v1')
.setProject("6401857e246dbede9d8b").headers={'access-control-allow-origin': 'http://appwrite.server99.buzz/'}
export const account = new Account(client)
export const databases = new Databases(client)
import { Client, Account,Databases,Avatars } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('http://localhost/v1')
    .setProject('66a80fa50007086f437e'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
export const databases = new Databases(client);
export const avatars  = new Avatars(client);
import { Client, Account,Databases,Avatars } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('667191cd001e20a1b77c'); // Replace with your project ID

export const account = new Account(client);
export { ID } from 'appwrite';
export const databases = new Databases(client);
export const avatars  = new Avatars(client);
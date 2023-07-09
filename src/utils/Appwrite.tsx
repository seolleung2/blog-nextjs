'use client';

import { Client, Databases, ID } from 'appwrite';

const client = new Client();
// const account = new Account(client);

const database = process.env.NEXT_PUBLIC_DATABASE as string;
const collection = process.env.NEXT_PUBLIC_MESSAGES_COLLECTION as string;

client
  .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT as string)
  .setProject(process.env.NEXT_PUBLIC_PROJECT as string);

const databases = new Databases(client);

export const addMessage = async (message: string) => {
  await databases.createDocument(database, collection, ID.unique(), {
    message,
  });
};

export const getMessages = async () => {
  const { documents: messages } = await databases.listDocuments(
    database,
    collection
  );
  return messages;
};

export const deleteMessage = async (id: string) => {
  await databases.deleteDocument(database, collection, id);
};

import { openDB } from 'idb';
const DB_NAME = 'chatgpt-business-database';
const DB_VERSION = 1;
const OBJECT_STORE_NAME = 'chat-history-store';

export function openDatabase() {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(OBJECT_STORE_NAME)) {
        db.createObjectStore(OBJECT_STORE_NAME);
      }
    },
  });
}

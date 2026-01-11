export const DB_NAME = 'ShowcaseDB';
export const STORE_NAME = 'images';
export const DB_VERSION = 1;

export const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => reject('IndexedDB error: ' + (event.target as any).error);

        request.onsuccess = (event) => resolve((event.target as IDBOpenDBRequest).result);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };
    });
};

export const saveImageToDB = async (key: string, base64: string): Promise<void> => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.put(base64, key);

        request.onsuccess = () => resolve();
        request.onerror = (event) => reject('Error saving image: ' + (event.target as any).error);
    });
};

export const getImageFromDB = async (key: string): Promise<string | undefined> => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(key);

        request.onsuccess = () => resolve(request.result);
        request.onerror = (event) => reject('Error fetching image: ' + (event.target as any).error);
    });
};

export const getAllImagesFromDB = async (): Promise<Record<string, string>> => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readonly');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.getAllKeys();

        request.onsuccess = async () => {
            const keys = request.result as string[];
            const result: Record<string, string> = {};

            // Fetch all values one by one (or could use openCursor for efficiency, but this is fine for dozens of images)
            // A cursor is better for memory, but we need to return the whole state to React anyway.
            // Let's use a cursor to build the object.
            const cursorRequest = store.openCursor();
            cursorRequest.onsuccess = (e) => {
                const cursor = (e.target as IDBRequest).result as IDBCursorWithValue;
                if (cursor) {
                    result[cursor.key as string] = cursor.value;
                    cursor.continue();
                } else {
                    resolve(result);
                }
            };
            cursorRequest.onerror = (e) => reject(e);
        };
        request.onerror = (event) => reject('Error fetching images: ' + (event.target as any).error);
    });
};

export const clearImagesDB = async (): Promise<void> => {
    const db = await openDB();
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_NAME], 'readwrite');
        const store = transaction.objectStore(STORE_NAME);
        const request = store.clear();

        request.onsuccess = () => resolve();
        request.onerror = (event) => reject('Error clearing DB: ' + (event.target as any).error);
    });
};

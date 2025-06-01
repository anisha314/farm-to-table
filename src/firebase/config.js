import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDRiJUvOkWu1UJpjX0GMw6UqfWcWo2h0ZE",
  authDomain: "farm-to-kitchen-cffd1.firebaseapp.com",
  databaseURL: "https://farm-to-kitchen-cffd1-default-rtdb.firebaseio.com",
  projectId: "farm-to-kitchen-cffd1",
  storageBucket: "farm-to-kitchen-cffd1.appspot.com",
  messagingSenderId: "196841495680",
  appId: "1:196841495680:web:bfa1bd0dfd9d5b20001a65"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db1 = getFirestore(app);
export const storage = getStorage(app);
export const db = getDatabase(app);

export default app;

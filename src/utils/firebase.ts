import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4VR7P8Fn7bV6E9XchYZh1MLiPxPv7Tbo",
  authDomain: "badastoor-d1d26.firebaseapp.com",
  projectId: "badastoor-d1d26",
  storageBucket: "badastoor-d1d26.appspot.com",
  messagingSenderId: "775781947671",
  appId: "1:775781947671:web:11682c3e373f1341deff52",
  measurementId: "G-9JV9QTBSGS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

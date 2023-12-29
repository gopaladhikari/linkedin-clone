import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi0jOphbaf2L6nmudiZbmxuKSIO_ql2GE",
  authDomain: "linkedin-clone-917e6.firebaseapp.com",
  projectId: "linkedin-clone-917e6",
  storageBucket: "linkedin-clone-917e6.appspot.com",
  messagingSenderId: "337950505097",
  appId: "1:337950505097:web:739b592a5fc39880d66e58",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: replace with your own config
const firebaseConfig = {
  apiKey: "AIzaSyDHWLZLq1Ionxa2yt4DVgJyRk-KkrSO7sY",
  authDomain: "tmdb-62bcb.firebaseapp.com",
  projectId: "tmdb-62bcb",
  storageBucket: "tmdb-62bcb.appspot.com",
  messagingSenderId: "1065272450528",
  appId: "1:1065272450528:web:892accaaaca8cd01261f85",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

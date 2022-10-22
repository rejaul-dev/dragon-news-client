// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhRzM4v5VviysnPOSAGDzFV37Oyq_TmTQ",
  authDomain: "dragon-news-cb8fe.firebaseapp.com",
  projectId: "dragon-news-cb8fe",
  storageBucket: "dragon-news-cb8fe.appspot.com",
  messagingSenderId: "709946232994",
  appId: "1:709946232994:web:95153f2009aa9dcc7807fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
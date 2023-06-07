import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/style.css';
//import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT3GaLZE7ItE8glSYIaNd-XNkzIm_V9W4",
  authDomain: "technoviumunlimited.firebaseapp.com",
  projectId: "technoviumunlimited",
  storageBucket: "technoviumunlimited.appspot.com",
  messagingSenderId: "887618065616",
  appId: "1:887618065616:web:8546ca383b8c7fb9857ad5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
//app.use(bootstrap);
app.mount('#app');

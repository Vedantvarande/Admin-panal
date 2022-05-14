import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js';
import {
  getAuth,
  signInWithEmailAndPassword
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js';

import {
  getFirestore,
  query,
  doc,
  getDoc,
  getDocs,
  collection
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_gHE0SpB7Dyvemg4xYPqCU9-ODzJ1E6U',
  authDomain: 'smita-astrologer-project.firebaseapp.com',
  projectId: 'smita-astrologer-project',
  storageBucket: 'smita-astrologer-project.appspot.com',
  messagingSenderId: '916028065983',
  appId: '1:916028065983:web:5feef97f9a243005b9de0a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

submitButton.addEventListener('click', e => {
  // Getting Reference from elements
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
    //   alert('User signed in');
      
      window.location.href = 'info.html';
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(errorCode);
    });
});
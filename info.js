import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js';

import {
  getFirestore,
  query,
  doc,
  getDoc,
  getDocs,
  collection
} from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js';

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

function AddItemToTable(name, email, number, serialNo, message) {
  let tbody = document.getElementById('tbody');

  let trow = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let td4 = document.createElement('td');
  let td5 = document.createElement('td');

  td1.innerHTML = serialNo;
  td2.innerHTML = name;
  td3.innerHTML = email;
  td4.innerHTML = number;
  td5.innerHTML = message;

  trow.appendChild(td1);
  trow.appendChild(td2);
  trow.appendChild(td3);
  trow.appendChild(td4);
  trow.appendChild(td5);

  tbody.appendChild(trow);
}

function AddAllItemsToTable(client) {
  let tbody = document.getElementById('tbody');

  tbody.innerHTML = '';
  client.forEach(element => {
    AddItemToTable(
      element.Name,
      element.Email,
      element.PhoneNumber,
      element.Sno,
      element.Message
    );
  });
}

async function GetAllDataOnce() {
  const querySnapshot = await getDocs(collection(db, 'clients'));

  var cle = [];

  querySnapshot.forEach(doc => {
    cle.push(doc.data());
  });
  AddAllItemsToTable(cle);
}
window.onload = GetAllDataOnce;

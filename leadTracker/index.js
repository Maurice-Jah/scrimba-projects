import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js';
import {
  getDatabase,
  ref,
  push,
  onValue,
} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js';

import { firebaseConfig } from './config.js';

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDb = ref(database, 'leads');

const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.querySelector('#delete-btn');

// Display the Leads
function render(leads) {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li> <a href="#" target='_blank'> ${leads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}

// Fetch the leads from the database
onValue(referenceInDb, function (snapshot) {
  const snapshotValues = snapshot.val();
  const leads = Object.values(snapshotValues);
  render(leads);
});

deleteBtn.addEventListener('dblclick', function () {});

inputBtn.addEventListener('click', function () {
  push(referenceInDb, inputEl.value);
  inputEl.value = '';
});

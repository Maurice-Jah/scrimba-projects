import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js';

const firebaseConfig = {
  databaseURL: 'https://lead-tracker-app-20447-default-rtdb.firebaseio.com/',
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log(database);

let myLeads = [];
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.querySelector('#delete-btn');
const tabBtn = document.querySelector('#tab-btn');

tabBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
    render(myLeads);
  });
});

// Display the Leads
function render(leads) {
  let listItems = '';
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li> <a href="#" target='_blank'> ${leads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}

// Read from localStorage

const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// Clear the localStorage and DOM
deleteBtn.addEventListener('dblclick', function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';

  localStorage.setItem('myLeads', JSON.stringify(myLeads));

  render(myLeads);
});

let myLeads = [];
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const inputBtn = document.getElementById('input-btn');

// Display the Leads
function renderLeads() {
  let listItems = '';
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li> <a href="#" target='_blank'> ${myLeads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItems;
}

// Read from localStorage

let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';

  localStorage.setItem('myLeads', JSON.stringify(myLeads));

  renderLeads();
});

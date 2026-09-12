let myLeads = [];
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const inputBtn = document.getElementById('input-btn');
const deleteBtn = document.querySelector('#delete-btn');

// Display the Leads
function render(myLeads) {
  let listItems = '';
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li> <a href="#" target='_blank'> ${myLeads[i]}</a></li>`;
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

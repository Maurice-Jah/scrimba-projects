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

inputBtn.addEventListener('click', function () {
  myLeads.push(inputEl.value);
  inputEl.value = '';
  renderLeads();
});

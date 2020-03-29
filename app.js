// selector
let firstList = document.getElementById('first-list');
let ulContent = document.getElementById('my-list');
let container = document.getElementById('container');
let listItems = document.getElementsByClassName('item');
let addBtn = document.getElementById('addNew');

// loop
// for (let i = 0; i < listItems.length; i++) {
//   const item = listItems[i];
//   item.addEventListener('click',deleteEvent);
// }


// event Handler

addBtn.addEventListener('click',addEvent);
ulContent.addEventListener('click',ulEvent);
// firstList.addEventListener('click',firstItem);
// container.addEventListener('click',containerEvent);


// function

function addEvent(e) {
  // new item li create
  let li = document.createElement('li');
  li.className = 'item';
  li.innerHTML = 'New Item';

  // add li in ul
  ulContent.appendChild(li);
}

function ulEvent(e) {
  // delete list
  e.target.parentNode.removeChild(e.target);
}


function deleteEvent(e) {
  // delete list item
  e.target.parentElement.removeChild(this);
}

function firstItem() {
  console.log('first item clicked');
  event.stopPropagation();
}

function containerEvent() {
  console.log('Container clicked')
}
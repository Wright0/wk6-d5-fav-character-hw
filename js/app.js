document.addEventListener('DOMContentLoaded', () => {

//Listen for form being submitted + call handleFormSubmission
const form = document.querySelector('#fav-character-form');
form.addEventListener('submit', handleFormSubmission);

//Listen for delete button being clicked + call deleteList
const deleteButton = document.querySelector('WHERETHEDELETEBUTTONIS');
deleteButton.addEventListener('click', deleteList);

});

//Function to create a character list item
const createCharacterListItem = function(form){
  const characterListItem = document.createElement('li');
  characterListItem.classList.add('character-list-item');

  const name = document.createElement('h3');
  name.textContent = `${form.first_name.value} ${form.last_name.value}`;
  characterListItem.appendChild(name);
  //Note to self (check understanding with an instructor on Monday): "form" here is a parameter. This is later passed in as the argument "event.target" which is why the "target" keyword looks like it's missing in the value search. Though "form" looks like the event, it's not. It is a banana that will later be passed in as an argument that is "event.target" (could in theory be passed in as something else, but that would break things).

  const fandom = document.createElement('p');
  fandom.textContent = `Fandom: ${form.fandom.value}`;
  characterListItem.appendChild(fandom);

  const rating = document.createElement('p');
  rating.textContent = `Rating: ${form.rating.value}/5`;
  characterListItem.appendChild(rating);

  return characterListItem;
};

//Function that checks length of items in list (This will be used to decide if a delete button should be added or not. If the node length is 0, add one. If it's 1, don't. This *should* ensure that only 1 delete button is added.)
const listLengthCheck = function(){

};

//function that adds a delete button (calling list length check)
const addDeleteButton = function(){

};

//function to delete list
const deleteList = function(){
  const characterList = document.querySelector('.character-list')
  characterList.innerHTML = '';
  //Why do you use innerHTML? Why can you not textContent?
};

//Function to handle form submission (functions used: createCharacterListItem createDeleteButton)
const handleFormSubmission = function(event){
  event.preventDefault();

  const characterList = document.querySelector('.character-list');
  characterList.appendChild(createCharacterListItem(event.target));

  // event.target.reset();
};

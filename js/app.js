document.addEventListener('DOMContentLoaded', () => {

  //Listen for form being submitted + call handleFormSubmission
  const form = document.querySelector('#fav-character-form');
  form.addEventListener('submit', handleFormSubmission);

  //Listen for delete button being clicked + call deleteList
  const deleteButton = document.querySelector('.delete-button');
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

//function to delete list
const deleteList = function(){
  const characterList = document.querySelector('.character-list');
  characterList.innerHTML = '';
  //Why do you use innerHTML? Why should you not use textContent?

  document.querySelector('.delete-button').style.visibility = 'hidden';
};

//Function to handle form submission
const handleFormSubmission = function(event){
  event.preventDefault();

  const characterList = document.querySelector('.character-list');
  characterList.appendChild(createCharacterListItem(event.target));

  document.querySelector('.delete-button').style.visibility = 'visible';

  event.target.reset();
};

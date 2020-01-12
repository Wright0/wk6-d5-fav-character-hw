document.addEventListener('DOMContentLoaded', () => {

  //Listen for form being submitted + call handleFormSubmission
  const form = document.querySelector('#fav-character-form');
  form.addEventListener('submit', handleFormSubmission);

  //Listen for delete button being clicked + call deleteList
  const deleteButton = document.querySelector('.delete-button');
  deleteButton.addEventListener('click', deleteList);
});

// Witcher easter egg
const isGeraltOfRivia = function(event){
  const name =  `${event.target.first_name.value} ${event.target.last_name.value}`.toLowerCase();
  return name === "geralt of rivia";
};

const payWitcher = function(){
  const walletValue = document.querySelector(".value");

  let walletValueAsNumber = parseInt(walletValue.textContent);
  walletValueAsNumber += 1

  walletValue.innerHTML = walletValueAsNumber;
};

const createWallet = function(whereToAppend){
  const wallet = document.createElement('div');
  wallet.classList.add('geralts-wallet')

  const walletText = document.createElement('p');
  walletText.textContent = 'Wallet amount:';

  const walletValue = document.createElement('p');
  walletValue.textContent = '0';
  walletValue.classList.add('value')

  wallet.appendChild(walletText);
  wallet.appendChild(walletValue);


  return wallet;
};

const createPayWitcherButton = function(){
  const payWitcherButton = document.createElement('button');
  payWitcherButton.textContent = 'Toss a coin to your witcher';
  payWitcherButton.classList.add('pay-witcher-button');

  payWitcherButton.addEventListener('click', payWitcher);

  return payWitcherButton;
};
//End of functions for witcher easter egg.

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

  if (isGeraltOfRivia(event)){
    characterListItem.appendChild(createWallet());
    characterListItem.appendChild(createPayWitcherButton());
  };

  return characterListItem;
};

//function to delete list
const deleteList = function(){
  const characterList = document.querySelector('.character-list');
  characterList.innerHTML = '';
  //innerHTML vs textContent.

  document.querySelector('.delete-button').style.visibility = 'hidden';
};

//function to compare html nodes and see if a character is already on the list. Returns true or false. Doesn't account for items being almost the same (i.e. the same character with a different rating or a character with a typo in their name. The items have to be exactly the same for this to trigger true.)
const isCharacterAlreadyOnList = function(existingNodes, newItemBeingAdded){
  if (existingNodes.length === 0){
    return;
  };

  const matchingNodes = []

  existingNodes.forEach(node => {
    if (node.isEqualNode(newItemBeingAdded)){
      matchingNodes.push(node);
    };
  });

  return matchingNodes.length >= 1
};

//Function to handle form submission
const handleFormSubmission = function(event){
  event.preventDefault();

  const characterList = document.querySelector('.character-list');
  const newItem = createCharacterListItem(event.target)

  const currentNodeList = characterList.childNodes;

  if (isCharacterAlreadyOnList(currentNodeList, newItem)){
    return alert("This character is already on your list");
  } else {
    characterList.appendChild(newItem);

    document.querySelector('.delete-button').style.visibility = 'visible';
  }
    event.target.reset();
};

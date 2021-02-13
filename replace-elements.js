//Replacing Elements

// Create Element
const newHeading = document.createElement('Sneakers');

//Adding ID
newHeading.id = 'Sneaker Menu';
//New Text Node
newHeading.appendChild(document.createTextNode('Sneaker Gone'));
//Get  the Old Head
const oldHeading = document.querySelector('#task-title');
//Parent
const cardAction = document.querySelector('.card-action'); 
//Replace
cardAction.replaceChild(newHeading, oldHeading);
//Remove List Item
const sneakerss = document.querySelectorAll('li');
const hype = document.querySelector('ul');
//Removing List Item
sneakerss[1].remove();
//Remove Child Element
hype.removeChild(sneakerss[0]);
//Classes and Attribute
const firstKicks = document.querySelector('li:first-child');
const greed = firstKicks.children[0];

let value;

//Classes
value = greed.className;
value = greed.classList;
value = greed.classList[0];
greed.classList.add('force');
greed.classList.remove('force');

//Attributes
value = greed.getAttribute('href');
value = greed.setAttribute('href', 'http://complex.com');
greed.setAttribute('title', 'Complex');
value = greed.hasAttribute('titles');
value = greed;

console.log(greed);
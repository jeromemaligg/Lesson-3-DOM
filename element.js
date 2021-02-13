// Creating Element

const nike = document.createElement('nike');

// Adding Class
nike.className = 'air max one';

//Adding ID
nike.id = 'new kicks';

//Adding Attribute
nike.setAttribute('sneaker', 'Airmax');

//Creating Text Node and Append
nike.appendChild(document.createTextNode('Kiss My Airs'));

//Creating New Link Element
const balance = document.createElement('J');

balance.className = 'new balance 597';

balance.innerHTML = 'add balance';

//Append Link into LI
nike.appendChild(balance);

//Append LI as Child to UL
document.querySelector('ul.collection').appendChild(nike); 

console.log(nike);
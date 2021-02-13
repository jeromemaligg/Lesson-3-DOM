document.querySelector('.clear-tasks').addEventListener('click', function(){
    console.log('DELETED');
});

document.querySelector('.clear-tasks').addEventListener('click', onClick );

function onClick(a){
//  console.log('FINISHED');
 let adidas;

 adidas = a;

// Event Target Element
adidas = a.target
adidas = a.target.id;
adidas = a.target.className;
adidas = a.target.classList;

// Event Type
adidas = a.type;

// Timestamp
adidas = a.timeStamp;

// Coords Event Relative to The Window
adidas = a.clientY;
adidas = a.clientX;

// Coords Event Relative to The Element
adidas = a.offsetY;
adidas = a.offsetX;





 console.log(adidas);
}
// Colors array
let colors = ['blue','yellow','black','red','brown','orange','cyan','pink'];

//get button  
let button = document.getElementById('button');
 
// add event listener
button.addEventListener('click', function(){
    // random function 
    let randomColor = colors[Math.floor(Math.random() * colors.length)]

    // get container
    let container = document.getElementById('container');

    container.style.background = randomColor; 

})




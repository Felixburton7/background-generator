var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

var css = document.querySelector('h3');


function setGradient(){
    body.style.background = 'linear-gradient(to right,' + color1.value + ',' + color2.value;

    css.textContent = body.style.background + ';';
    //This method adds a text content 
    //Same effect as innerHTML
    //This adds text below the h2 tag. 
    //The h3 tag is empty 
    
}

color1.addEventListener('input',setGradient)

color2.addEventListener('input',setGradient)



//setGradient not instiated in addEventListener Function.
//The addEventListener automatically triggers the event. 
//setGradient() would not be right as it should be called everytime the input is selected.  
 
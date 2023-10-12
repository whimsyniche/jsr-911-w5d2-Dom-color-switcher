// Let's do this and dust off

// Get element selectors

// let docbody = document.querySelector('body'); //docBody.style.backgroundColor
// let root = document.documentElement;
// let bodyBGColor = document.documentElement.style.backgroundColor

// const redBtn = document.querySelector('red');
// const whiteBtn = document.querySelector('white');
// const blueBtn = document.querySelector('blue');
// const yellowBtn = document.querySelector('yellow');

// how to access the dataset

//let redBtn = document.querySelector(`[data-attribute="${data}"]`); //example on the data-attribute
//let redBtn = document.querySelector(`[data-color]`); //undefined although it'll get the first selector


//getting all the dataset, more efficient
const btn = document.querySelectorAll('[data-color]');


// Functions
// none


// Event Handlers

//doing it the arrow function way
// let updateBGColor = (theColor) => {
//     return document.body.style.backgroundColor = theColor.target.classList[0];
// }
// updateBGColor(btn); //passing the currentTarget of the nodeList when addEventListener is triggered

function updateBGColor(theColor) {
    document.body.style.backgroundColor = theColor.target.classList[0];
    // document.body.style.backgroundColor = theColor.currentTarget.classList[0];
    // document.body.style.backgroundColor = theColor; //doesn't work
    // document.documentElement.style.backgroundColor = theColor.target.classList[0]
    // console.log(theColor); // checking event passed the currentTarget or target when triggered
}


// Event Listeners
//document.querySelector('a').addEventListener("click", updateBGColor, false); //gets whichever is first however not changed to anything

btn.forEach(btn => btn.addEventListener('click', updateBGColor));
// btn.forEach(btn => btn.addEventListener('click', updateBGColor), console.log(btn));

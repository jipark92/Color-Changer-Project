const btns = document.querySelector('.color-btn');
const background = document.querySelector('.container');
const textColor = document.querySelector('.text-color');

const colors = ['red', 'blue', 'green', 'pink', 'bisque', 'black', 'white'];

btns.addEventListener('click', ()=>{
    let randomNumber = randomNumberGen();

    console.log(randomNumber);

    background.style.backgroundColor = colors[randomNumber];
    textColor.textContent = colors[randomNumber].toUpperCase();
});




//generate random number of colors array length. which is 0-3;
function randomNumberGen() {
    return Math.floor(Math.random() * colors.length);
}



const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const hexBtn = document.querySelector('.hex-btn');


hexBtn.addEventListener('click', ()=>{
    let hexColor = "#";

    for (let i = 0; i < 6;i++){
        hexColor += hex[randomHexGen()];
    } // this add 6 random numbers from hex array

    background.style.backgroundColor = hexColor; //null for now
    textColor.textContent = hexColor;
});

function randomHexGen() {
    return Math.floor(Math.random() * hex.length);
};

const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', ()=>{
    background.style.backgroundColor = 'bisque';
    textColor.textContent = 'Bisque';
})
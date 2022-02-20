const btns = document.querySelector('button');
const background = document.querySelector('.container');
const textColor = document.querySelector('.text-color');

const colors = ['red', 'blue', 'green', 'pink'];

btns.addEventListener('click', ()=>{
    let randomNumber = randomNumberGen();

    console.log(randomNumber);

    background.style.backgroundColor = colors[randomNumber];
    textColor.textContent = colors[randomNumber];
});




//generate random number of colors array length. which is 0-3;
function randomNumberGen() {
    return Math.floor(Math.random() * colors.length);
}


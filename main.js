const btns = document.querySelector('button');
const background = document.querySelector('.container');

const colors = ['red', 'blue', 'green', 'pink'];

let colorsChoice = btns.addEventListener('click', ()=>{
    for (let i = 0; i <= colors.length;i++){
        return colors[i];
    }
});




console.log(colors.length);
console.log(colorsChoice);
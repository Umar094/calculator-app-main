const calcDisplay = document.querySelector('[data-calc-display]');
const calcButtons = document.querySelector('[data-calc-btn]');
const deleteButton = document.querySelector('[data-calc-del]')

// theme toggle --

const themeCircle = document.querySelector('[data-theme-circle]')
const body = document.querySelector('body')

function themeToggle(){
    if(themeCircle.classList.contains('theme1')){
        themeCircle.classList.remove('theme1')
        themeCircle.classList.add('theme2')
        body.classList.add('secondTheme')
    }else if(themeCircle.classList.contains('theme2')){
        themeCircle.classList.remove('theme2')
        body.classList.remove('secondTheme')
        body.classList.add('thirdTheme')
        themeCircle.classList.add('theme3')
    }else{
        body.classList.remove('thirdTheme')
        themeCircle.classList.remove('theme3')
        themeCircle.classList.add('theme1')
    }
}

let number = [];

calcButtons.addEventListener('click', (e) => {

    if(e.target.matches('[data-calc-del]')){
        number.pop()
    }

    if(e.target.matches('[data-nums]')){

        if(e.target.innerText === 'x'){
            number.push('*')
        }else{
            number.push(e.target.innerText)
        }
    }

    if(e.target.matches('[data-calc-reset]')){
        number.length = 0
    }

    calcDisplay.innerText = number.join('')
});



const equal = document.querySelector('[data-equal]');



equal.addEventListener('click', (e) => {

    try{
        calcDisplay.innerText = eval(number.join(''))
    }
    catch{
        
        calcDisplay.innerText = 'ERROR';
    }

    e.stopPropagation()
});








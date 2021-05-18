const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.querySelector('body');

function grad(){
    body.style.background =
        'linear-gradient(to right, '
        + color1.value 
        + ', ' 
        +  color2.value
        + ')';
    css.textContent = body.style.background + ' ;';
}
color1.addEventListener('input', grad)
color2.addEventListener('input', grad)

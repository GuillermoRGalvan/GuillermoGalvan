const botonLeerMas = document.querySelector('.botonLeerMas');
const texto = document.querySelector('.texto');

botonLeerMas.addEventListener('click',(e)=>{
    texto.classList.toggle('mostrarMas');

    if(botonLeerMas.innerText === 'Leer Mas'){
        botonLeerMas.innerText = 'Leer Menos';
    }else{
        botonLeerMas.innerText = 'Leer Mas';
    }
})
const inicio = () => {
    let resultado = document.getElementById('resultado');
    resultado.addEventListener('click', NuevoRes, false);
}
const NuevoRes = () => {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let operacion = document.getElementById('operacion').value;

    let resultado;

    if(operacion === 'suma'){
        resultado = num1+num2;
    }
    else if(operacion === 'resta'){
        resultado = num1-num2;
    }
    else if(operacion === 'multiplicacion'){
        resultado = num1*num2;
    }
    localStorage.setItem('resultado', resultado);
    mostrar();
}
const mostrar = (NuevoRes) => {
    let desplegar = document.getElementById('desplegar');
    let resultado = localStorage.getItem('resultado');
    desplegar.innerHTML = '<b>'+resultado+'</b>';
}
window.addEventListener('load', inicio, false);


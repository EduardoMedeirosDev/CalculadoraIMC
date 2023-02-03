const button = document.getElementById('button');
const nome = document.getElementById('nome');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const resultado = document.getElementById('resultado');


const getText = (imc) => {
    if(imc > 40) return resultado.style.color='red','Obesidade grau III';
    if(imc > 35) return resultado.style.color='red','Obesidade grau II';
    if(imc > 30) return resultado.style.color='red','Obesidade grau I';
    if(imc > 25) return resultado.style.color='yellow','Levemente acima do peso';
    if(imc > 18.5) return resultado.style.color='green','Peso ideal';
    return resultado.style.color='red','Abaixo do Peso ideal';
}

const imcCalc = () => {
    if(!peso.value || !altura.value || !nome.value) return resultado.textContent = 'Preencha todos os campos'

    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent = `${nome.value} - ${getText(valorImc)}`;
}

button.addEventListener('click', imcCalc)


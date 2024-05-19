let numeroSecreto = parseInt(Math.random()*100);
let tentativas = document.getElementById('contador-tentativas');
let numeroTentativas = 0;

var facil = 20;
var normal = 10;
var dificil = 3;

const botaoDificuldade = document.querySelector('.botao-dificuldade');
const botaoFacil = document.querySelector('.botao-facil');
const botaoNormal = document.querySelector('.botao-normal');
const botaoDificil = document.querySelector('.botao-dificil');

let maxTentativas = normal;
let restaTentativas = maxTentativas;
var tentativasRestantesTexto = document.getElementById('tentativas-restantes');

tentativas.innerHTML = "Tentativa: " + numeroTentativas;
tentativasRestantesTexto.innerHTML = 'Tentativas restantes: ' + restaTentativas;
ativaDificuldadeNormal();

function geraNumero()
{
    numeroSecreto = parseInt(Math.random()*100);
    numeroTentativas = 0;
    restaTentativas = maxTentativas;
    tentativas.innerHTML = "Tentativa: " + numeroTentativas;
    tentativasRestantesTexto.innerHTML = 'Tentativas restantes: ' + restaTentativas;
    document.getElementById('x').value="";
    document.getElementById('x').focus();

    alert('Um novo número foi gerado.\nVocê tem ' + maxTentativas + ' tentativas.');
}

function testeJogo()
{
    let chute = document.getElementById('x').value;
    
    if (restaTentativas > 0 && chute > 0 && chute <= 100)
    {
        if (numeroSecreto == chute)
            {
                alert('Parabéns! Você acertou!\nJogue novamente.');
                geraNumero();
            }
            else if (numeroSecreto < chute)
            {
                alert('Errou! Você digitou um número maior!');
                numeroTentativas++;
                restaTentativas = maxTentativas - numeroTentativas;
                tentativasRestantesTexto.innerHTML = 'Tentativas restantes: ' + restaTentativas;
                tentativas.innerHTML = "Tentativas: " + numeroTentativas;
            }
            else if (numeroSecreto > chute)
            {
                alert('Errou! Você digitou um número menor!');
                numeroTentativas++;
                restaTentativas = maxTentativas - numeroTentativas;
                tentativasRestantesTexto.innerHTML = 'Tentativas restantes: ' + restaTentativas;
                tentativas.innerHTML = "Tentativas: " + numeroTentativas;
            }
    }
    else if (restaTentativas <= 0)
    {
        alert('Você perdeu!\nSuas tentativas acabaram.\nO número secreto era: ' + numeroSecreto + '.');
        geraNumero();
    }
    else if (chute < 1 || chute > 100)
    {
        alert('Digite um número entre 1 e 100!')
    }

    document.getElementById('x').focus();
}

function dificuldadeFacil()
{
    maxTentativas = facil;
    ativaDificuldadeFacil();
    geraNumero();
}

function dificuldadeNormal()
{
    maxTentativas = normal;
    ativaDificuldadeNormal();
    geraNumero();
}

function dificuldadeDificil()
{
    maxTentativas = dificil;
    ativaDificuldadeDificil();
    geraNumero();
}

function ativaDificuldadeFacil()
{
    botaoFacil.classList.add('ativo'); 
    botaoNormal.classList.remove('ativo');
    botaoDificil.classList.remove('ativo');
} 

function ativaDificuldadeNormal()
{
    botaoNormal.classList.add('ativo'); 
    botaoFacil.classList.remove('ativo');
    botaoDificil.classList.remove('ativo');
} 

function ativaDificuldadeDificil()
{
    botaoDificil.classList.add('ativo');
    botaoFacil.classList.remove('ativo');
    botaoNormal.classList.remove('ativo'); 
}
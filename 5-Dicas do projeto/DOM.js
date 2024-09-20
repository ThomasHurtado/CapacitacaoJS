const titulo = document.getElementById('titulo'); // Seleciona o elemento com ID 'titulo'
const botao = document.getElementById('botao');   // Seleciona o botão

botao.addEventListener('click', () => {
    titulo.textContent = 'Título Certo!'; // Altera o texto do título ao clicar no botão
    console.log("Mudou o titulo!")
})

const paragrafo = document.getElementById('paragrafo');
const corBotao = document.getElementById('corBotao');

corBotao.addEventListener('click', () => {
    paragrafo.style.color = 'red';  // Altera a cor do texto do parágrafo para azul
    paragrafo.style.fontSize = '100px';  // Altera o tamanho da fonte
    console.log("Mudou a cor")
})

let posicaoInicialX = 0;

        const divArrastar = document.getElementById('arrastar');
        const texto = divArrastar.querySelector('.texto');

        // Detecta quando o mouse é pressionado
        divArrastar.addEventListener('mousedown', function(evento) {
            posicaoInicialX = evento.clientX;
        });

        // Detecta quando o mouse é liberado
        divArrastar.addEventListener('mouseup', function(evento) {
            let posicaoFinalX = evento.clientX;

            // Se a posição final for maior que a inicial, o movimento foi para a direita
            if (posicaoFinalX > posicaoInicialX) {
                texto.textContent = 'Foi para a direita';
                console.log("Direita")
            } else {
                texto.textContent = 'Mouse parado';
            }
        });

var jogador, vencedor = null;

var jogadorSelecionado = document.getElementById('jogadorSelecionado');
var vencedorSelecionado = document.getElementById('vencedorSelecionado');

mudarJogador('X');
//inicializa o jogo com o jogador x
//atualiza o jogador atual na interface do jogo
function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function escolher(id) {
  //verificando o id pego
  //console.log(id);

  //nao jogar depois que ganhar
  if(vencedor!==null) {
    return;
  }

  var quadrado = document.getElementById(id);
  //define o conteudo do quad com o simbolo do jogador atual ('X' ou 'O')

  //nao sobrepor o simbolo no quadrado com o simbolo (nao permite jogar um simbolo encima de outro no quadrado)
  if(quadrado.innerHTML !== '-') {
    return;
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color = 'black';

  if(jogador==='X') {
    jogador = 'O';
  }else {
    jogador = 'X';
  }

//atualiza o elemento que exibe o jogador atual
mudarJogador(jogador);
  checaVencedor();
}

//verifica se ha um vencedor
function checaVencedor() {
  var quad1 = document.getElementById(1);
  var quad2 = document.getElementById(2);
  var quad3 = document.getElementById(3);
  var quad4 = document.getElementById(4);
  var quad5 = document.getElementById(5);
  var quad6 = document.getElementById(6);
  var quad7 = document.getElementById(7);
  var quad8 = document.getElementById(8);
  var quad9 = document.getElementById(9);

  //verifica todas as possiveis sequencias vencedoras e chama as funcoes para atualizar o jogo
  if(checaSequencia(quad1, quad2, quad3)) {
    mudarCor(quad1, quad2, quad3);
    mudarVenc(quad1);
    return;
  }

if(checaSequencia(quad4, quad5, quad6)) {
  mudarCor(quad4, quad5, quad6);
  mudarVenc(quad4);
  return;
}

if(checaSequencia(quad7, quad8, quad9)) {
  mudarCor(quad7, quad8, quad9);
  mudarVenc(quad7);
  return;
}

if(checaSequencia(quad1, quad4, quad7)) {
  mudarCor(quad1, quad4, quad7);
  mudarVenc(quad1);
  return;
}
if(checaSequencia(quad2, quad5, quad8)) {
  mudarCor(quad2, quad5, quad8);
  mudarVenc(quad2);
  return;
}

if(checaSequencia(quad3, quad6, quad9)) {
  mudarCor(quad3, quad6, quad9);
  mudarVenc(quad3);
  return;
}

if(checaSequencia(quad1, quad5, quad9)) {
  mudarCor(quad1, quad5, quad9);
  mudarVenc(quad1);
  return;
}

if(checaSequencia(quad3, quad5, quad7)) {
  mudarCor(quad3, quad5, quad7);
  mudarVenc(quad3);
  return;
}

}

//atualiza o vencedor
function mudarVenc(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

//muda a cor dos quadrados
function mudarCor(quad1, quad2, quad3) {
  quad1.style.background = 'lightblue';
  quad2.style.background = 'lightblue';
  quad3.style.background = 'lightblue';

}

function checaSequencia(quad1, quad2, quad3) {
  var eIgual = false;

  if (quad1.innerHTML !== '-' && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML) {
    eIgual = true
  }

  return eIgual;
}

function name() {

}


// function reiniciar() {
//   vencedor = null;
//   vencedorSelecionado.innerHTML = ' ';

//   var quad1 = document.getElementById(1);
//   quad1.style.backgroundColor = 'lightgray';
//   quad1.style.color = 'lightgray';
//   quad1.innerHTML = '-';
  
//   var quad2 = document.getElementById(2);
//   quad2.style.backgroundColor = 'lightgray';
//   quad2.style.color = 'lightgray';
//   quad2.innerHTML = '-';

//   var quad3 = document.getElementById(3);
//   quad3.style.backgroundColor = 'lightgray';
//   quad3.style.color = 'lightgray';
//   quad3.innerHTML = '-';

//   var quad4 = document.getElementById(4);
//   quad4.style.backgroundColor = 'lightgray';
//   quad4.style.color = 'lightgray';
//   quad4.innerHTML = '-';

//   var quad5 = document.getElementById(5);
//   quad5.style.backgroundColor = 'lightgray';
//   quad5.style.color = 'lightgray';
//   quad5.innerHTML = '-';

//   var quad6 = document.getElementById(6);
//   quad6.style.backgroundColor = 'lightgray';
//   quad6.style.color = 'lightgray';
//   quad6.innerHTML = '-';

//   var quad7 = document.getElementById(7);
//   quad7.style.backgroundColor = 'lightgray';
//   quad7.style.color = 'lightgray';
//   quad7.innerHTML = '-';

//   var quad8 = document.getElementById(8);
//   quad8.style.backgroundColor = 'lightgray';
//   quad8.style.color = 'lightgray';
//   quad8.innerHTML = '-';

//   var quad9 = document.getElementById(9);
//   quad9.style.backgroundColor = 'lightgray';
//   quad9.style.color = 'lightgray';
//   quad9.innerHTML = '-';

//   mudarJogador('X');
// }

loop
function reiniciar() {
    vencedor = null;
    vencedorSelecionado.innerHTML = ' ';
  
    var i = 1;
  
    while(i <= 9) {
      var quadrado = document.getElementById(i);
      quadrado.style.backgroundColor = 'lightgray';
      quadrado.style.color = 'lightgray';
      quadrado.innerHTML = '-';
  
      i++;
    }
  
    mudarJogador('X');
  }

  var cont = 0
  function temas() {

    var cont = cont + 1

    console.log(cont)
    
    if (cont % ) {
        document.getElementById('opc').style.display = "block"
    } else  {
        document.getElementById('opc').style.display = "none"
    }




  }
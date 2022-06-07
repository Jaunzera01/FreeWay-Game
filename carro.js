// codigo do carro

let xCarros = [550, 600, 600, 570, 600, 530];
let yCarros = [40, 96, 150, 210, 260, 318];
let velocidadeCarros = [4, 2.5, 3.2, 5, 1.5, 2.5];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
   image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
   xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if (passouTodaATela(xCarros[i])){
    xCarros[i] = 600;
    }  
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}
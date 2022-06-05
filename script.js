const input = document.getElementById('text-input');
const memeTexto = document.getElementById('meme-text');
const image = document.getElementById('meme-image');
const btnFire = document.getElementById('fire');
const btnWater = document.getElementById('water');
const btnEarth = document.getElementById('earth');
const containerPai = document.getElementById('meme-image-container');
const inputCarregaImagem = document.getElementById('meme-insert');
const imgMeme1 = document.getElementById('meme-1');
const imgMeme2 = document.getElementById('meme-2');
const imgMeme3 = document.getElementById('meme-3');
const imgMeme4 = document.getElementById('meme-4');

function geradorDeMeme() {
  const valorDoInput = input.value;
  memeTexto.innerText = valorDoInput;
}

function gerarImagem(event) {
  const alvo = event;
  image.src = URL.createObjectURL(alvo.target.files[0]);
}

function borderRed() {
  containerPai.style.border = '3px dashed red';
}

function borderWater() {
  containerPai.style.border = '5px double blue';
}

function borderEarth() {
  containerPai.style.border = '6px groove green';
}
function imgagemMeme1(event) {
  const alvo = event;
  image.src = alvo.target.src;
}

function imgagemMeme2(event) {
  const alvo = event;
  image.src = alvo.target.src;
}

function imgagemMeme3(event) {
  const alvo = event;
  image.src = alvo.target.src;
}

function imgagemMeme4(event) {
  const alvo = event;
  image.src = alvo.target.src;
}

imgMeme1.addEventListener('click', imgagemMeme1);
imgMeme2.addEventListener('click', imgagemMeme2);
imgMeme3.addEventListener('click', imgagemMeme3);
imgMeme4.addEventListener('click', imgagemMeme4);
input.addEventListener('keyup', geradorDeMeme);
inputCarregaImagem.addEventListener('change', gerarImagem);
btnFire.addEventListener('click', borderRed);
btnWater.addEventListener('click', borderWater);
btnEarth.addEventListener('click', borderEarth);

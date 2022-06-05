const input = document.getElementById('text-input');
const memeTexto = document.getElementById('meme-text');
const image = document.getElementById('meme-image');
function geradorDeMeme() {
  const valorDoInput = input.value;
  memeTexto.innerText = valorDoInput;
}
input.addEventListener('keyup', geradorDeMeme);
function gerarImagem(event) {
  const alvo = event;
  image.src = URL.createObjectURL(alvo.target.files[0]);
}
// window.onload = gerarImagem;

const playMario = document.getElementById("playMario");
const playLuigi = document.getElementById("playLuigi");

// Crea objetos de audio
const marioSound = new Audio("./assets/audio/mario.mp3");
const luigiSound = new Audio("./assets/audio/luigi.mp3");

// Reproduce sonido de Mario al hacer clic en su elemento
playMario.addEventListener("click", function() {
  marioSound.play();
});

// Reproduce sonido de Luigi al hacer clic en su elemento
playLuigi.addEventListener("click", function() {
  luigiSound.play();
});

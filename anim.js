// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tengo que confesar", time: 6 },
  { text: "Que a veces no me gusta tu forma de ser", time: 10 },
  { text: "Luego te me desapareces", time: 16 },
  { text: "Y no entiendo muy bien por qué", time: 20 },
  { text: "No dices nada romántico", time: 26 },
  { text: "Cuando llega el atardecer", time: 30 },
  { text: "Te pones de un humor extraño", time: 36 },
  { text: "Con cada luna llena al mes", time: 40 },
  { text: "Pero todo lo demás", time: 46 },
  { text: "Le gana lo bueno que me das", time: 50 },
  { text: "Solo tenerte cerca", time: 56 },
  { text: "Siento que vuelvo a empezar", time: 60 },
  { text: "Me haces bien", time: 67 },
  { text: "Me haces bien", time: 72 },
  { text: "Te quiero de mil maneras", time: 77 },
  { text: "Me haces bien", time: 84 },
  { text: "Me haces bien", time: 90 },
  { text: "Me gusta", time: 94 },
  { text: "Me haces bien", time: 98 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
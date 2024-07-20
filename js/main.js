document.addEventListener("DOMContentLoaded", function() {
  // Animación para Junior Developer
  const profesion = baffle(".profesion");
  profesion.set({
      characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
      speed: 90
  });
  profesion.start();
  profesion.reveal(3000);

  // Animación para Cesar Javier Arnoldo Vega Ortega
  const nombre = baffle("#nombre");
  nombre.set({
      characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
      speed: 90
  });
  nombre.start();
  nombre.reveal(3000);
});

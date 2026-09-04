document.addEventListener('DOMContentLoaded', () => {
  // Seleção dos elementos do DOM
  const btnIncreaseFont = document.getElementById('btn-increase-font');
  const btnDecreaseFont = document.getElementById('btn-decrease-font');
  const btnToggleContrast = document.getElementById('btn-toggle-contrast');
  const htmlElement = document.documentElement;

  // Configurações e limites do tamanho da fonte (em px)
  let currentFontSize = 16;
  const minFontSize = 12;
  const maxFontSize = 24;

  // Alternar Alto Contraste
  btnToggleContrast.addEventListener('click', () => {
      document.body.classList.toggle('high-contrast');
  });

  // Aumentar Fonte
  btnIncreaseFont.addEventListener('click', () => {
      if (currentFontSize < maxFontSize) {
          currentFontSize += 2;
          htmlElement.style.fontSize = `${currentFontSize}px`;
      }
  });

  // Diminuir Fonte
  btnDecreaseFont.addEventListener('click', () => {
      if (currentFontSize > minFontSize) {
          currentFontSize -= 2;
          htmlElement.style.fontSize = `${currentFontSize}px`;
      }
  });
});
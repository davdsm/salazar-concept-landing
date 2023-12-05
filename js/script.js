/* document.addEventListener('DOMContentLoaded', function () {
    var logo = document.getElementById('logo');
    var offsetX, offsetY;

    // Adiciona um ouvinte para o evento de início de arrastar
    logo.addEventListener('dragstart', function (e) {
      // Define os dados que serão transferidos durante o arrastar (pode ser qualquer coisa)
      e.dataTransfer.setData('text/plain', 'Logo being dragged');
      offsetX = e.clientX - logo.getBoundingClientRect().left;
      offsetY = e.clientY - logo.getBoundingClientRect().top;
    });

    // Adiciona um ouvinte para o evento de arrastar sobre o documento inteiro
    document.addEventListener('dragover', function (e) {
      e.preventDefault(); // Impede o comportamento padrão

      // Atualiza as coordenadas do logo com base na posição do evento de drag
      logo.style.position = 'fixed';
      logo.style.left = e.clientX - offsetX + 'px';
      logo.style.top = e.clientY - offsetY + 'px';
    });

    // Adiciona um ouvinte para o evento de soltar no documento inteiro
    document.addEventListener('drop', function (e) {
      e.preventDefault(); // Impede o comportamento padrão
    });
  }); */
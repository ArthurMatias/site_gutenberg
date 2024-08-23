var botao = document.querySelector('#button_home');

botao.addEventListener('click', () => {
  
  const secao = document.getElementById('home');

  // Rolando suavemente até a seção
  secao.scrollIntoView({ behavior: 'smooth' });
});

var botao = document.querySelector('#button_about');

botao.addEventListener('click', () => {
  
  const secao = document.getElementById('about_me');

  // Rolando suavemente até a seção
  secao.scrollIntoView({ behavior: 'smooth' });
});



//Aqui leva para outra pagina
var botao = document.querySelector('#button_calculator');

botao.addEventListener('click', function() {
  
  window.location.href = './pag_calculator/calculator.html';

});
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function formatTime(ms) {
    const date = new Date(ms);
    return date.toISOString().substr(11, 8);
  }
  
  
  let timer;
  let tempo = 0;
  let running = false;

  iniciar.addEventListener('click', function() {
    if (!running) {
      running = true;
      relogio.classList.remove('paused', 'default');
      relogio.classList.add('running');
      timer = setInterval(() => {
        tempo += 1000;
        relogio.innerHTML = formatTime(tempo);
      }, 1000);
    }
  });
  
  

  pausar.addEventListener('click', function() {
    if (running) {
      clearInterval(timer);
      running = false;
      relogio.classList.remove('running', 'default');
      relogio.classList.add('paused');
    }
  });
  
  

  zerar.addEventListener('click', function() {
    clearInterval(timer);
    running = false;
    tempo = 0;
    relogio.innerHTML = formatTime(tempo);
    relogio.classList.remove('running', 'paused');
    relogio.classList.add('default');
  });
  
  

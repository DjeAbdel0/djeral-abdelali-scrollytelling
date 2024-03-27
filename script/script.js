
let timer;

/*Fonction Scroll */
function handleScroll() {
    document.body.classList.add('is-scrolling');
  
    clearTimeout(timer);
  
    timer = setTimeout(function() {
      document.body.classList.remove('is-scrolling');
    }, 100);
  }
  
  window.addEventListener('scroll', handleScroll);
  

  
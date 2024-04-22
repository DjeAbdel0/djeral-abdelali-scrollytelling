
let timer;


/*------------------------------------------------------------------
Fonction Scroll 
--------------------------------------------------------------------*/ 
function handleScroll() {
    document.body.classList.add('is-scrolling');
  
    clearTimeout(timer);
  
    timer = setTimeout(function() {
      document.body.classList.remove('is-scrolling');
    }, 100);
  }
  
  window.addEventListener('scroll', handleScroll);
  

/*------------------------------------------------------------------
Chapitre 2 : titre Anim
--------------------------------------------------------------------*/ 

  gsap.to(".text, .outline-text", {
    scrollTrigger: {
      trigger: ".text, .outline-text",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    y: '15vh',
  });

  
  
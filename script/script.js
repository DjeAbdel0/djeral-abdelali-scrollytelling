
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
Chapitre 2
--------------------------------------------------------------------*/ 
/*---Anim Text---*/
  gsap.to(".text, .outline-text", {
    scrollTrigger: {
      trigger: ".text, .outline-text",
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
    y: '15vh',
  });

/*---Parallax---*/
const parallax = gsap.timeline({
  scrollTrigger: {
      trigger: ".parralax",
      start: "250vh center",  
      end: "bottom top",   
      scrub: true,
      markers: true,
      ease: "none",
  }
});


parallax.to('.mont-gauche', { y: -80 }, '<') 
.to('.mont-droite',  { y: -80 }, '<0.2')
.to('.arbres',  { y: -120 }, '<0.2')




window.addEventListener('scroll', function() {
  var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  var currentScroll = window.scrollY;
  var scrollFraction = currentScroll / maxScroll;
  var horizontalShift = 15 * scrollFraction; // Shift right by up to 15vw

  var diver = document.querySelector('.ss-diver');
  diver.style.transform = `translate(${(-50 + horizontalShift)}%, -50%)`;
});
  
  
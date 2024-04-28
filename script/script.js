gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MorphSVGPlugin);

let timer;

/*------------------------------------------------------------------
Fonction Scroll 
--------------------------------------------------------------------*/
function handleScroll() {
  document.body.classList.add("is-scrolling");

  clearTimeout(timer);

  timer = setTimeout(function () {
    document.body.classList.remove("is-scrolling");
  }, 100);
}

window.addEventListener("scroll", handleScroll);

/*------------------------------------------------------------------
Header
--------------------------------------------------------------------*/
/*---Personnage---*/
gsap.to(".personnage", {
  scrollTrigger: {
    trigger: ".personnage",
    start: "top top",      
    end: "bottom bottom",   
    scrub: true,          
    markers: true,     
  },
  y: "25vh"              
});

/*------------------------------------------------------------------
Chapitre 1
--------------------------------------------------------------------*/
/*---Anim Text---*/
gsap.from(".text, .outline-text", {
  scrollTrigger: {
    trigger: ".text, .outline-text",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
  y: "15vh",
});

/*---Parallax---*/

const parallax = gsap.timeline({
  scrollTrigger: {
    trigger: ".parralax",
    start: "250vh 15%",
    end: "bottom top",
    markers: true,
    duration: 5,
  },
});

parallax
  .to(".mont-droite", { y: -200 },0)
  .to(".mont-gauche", { y: -200 },0)
  .to(".arbres", { y: -200 },0)
  .to("#chapitre-no2", { backgroundPositionY: "20%", ease: "none" }, 0);

/*------------------------------------------------------------------
Chapitre 2
--------------------------------------------------------------------*/
/*---Sprite Sheet Oiseau---*/

const oiseau = gsap.timeline({
  scrollTrigger: {
    trigger: ".ss-oiseau",
    start: "top center",
    end: "bottom top",
    scrub: 1,
    markers: false,
  },
});
oiseau
.to(".ss-oiseau", { x: "65vw" },0)

/*------------------------------------------------------------------
Chapitre 3
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 4 Morphing (Marche sur codePen)
--------------------------------------------------------------------*/
var morph = gsap.to("#cercle", { duration: 1, morphSVG:"#poisson", repeat:10, yoyo:true, repeatDelay:0.2})
/*------------------------------------------------------------------
Chapitre 5
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 6
--------------------------------------------------------------------*/
/*---Sprite Sheet Diver---*/
const diver = gsap.timeline({
  scrollTrigger: {
    trigger: ".ss-diver",
    start: "top 20%",
    end: "bottom top",
    scrub: true,
    markers: true,
  },
});
diver
.to(".ss-diver", {
  x: "30vw",
  y: "30vh"
})
.to(".ss-diver", {
  x: "50vw",
}, "<")
.to(".ss-diver", {
  x: "80vw",
  y: "51vh"
}, "<")
.to(".ss-diver", {
  x: "100vw",
}, "<")



/*------------------------------------------------------------------
Chapitre 7
--------------------------------------------------------------------*/

const bateau = gsap.timeline({
  scrollTrigger: {
    trigger: ".bateau",
    start: "top 30%",
    end: "bottom top",
    scrub: 1,
    markers: false,
    duration: 8,
  },
});
bateau
.to(".bat-top", { y: "-150px" },0)
.to(".bat-bottom", { y: "150px" },0)

/*------------------------------------------------------------------
Chapitre 8
--------------------------------------------------------------------*/

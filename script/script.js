gsap.registerPlugin(ScrollTrigger);
/*
gsap.registerPlugin(MorphSVGPlugin);
*/

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
    markers: false,
  },
  y: "25vh",
});

/*------------------------------------------------------------------
Chapitre 1
--------------------------------------------------------------------*/

/*------------------------------------------------------------------
Chapitre 2
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
    start: "top 50%",
    end: "bottom top",
    markers: false,
    duration: 5,
    scrub: 1,
  },
});

parallax
  .to(".mont-droite", { y: -200 }, "<")
  .to(".mont-gauche", { y: -200 }, "<0.25")
  .to(".arbres", { y: -200 }, "<0.5")
  .to("#chapitre-no2", { backgroundPositionY: "20%", ease: "none" }, 0);
/*------------------------------------------------------------------
Chapitre 3
--------------------------------------------------------------------*/
/*---Sprite Sheet Oiseau---*/

const oiseau = gsap.timeline({
  scrollTrigger: {
    trigger: ".ss-oiseau",
    start: "top center",
    end: "bottom top",
    scrub: 1,
    markers: false,
    scrub: true,
  },
});
oiseau.to(".ss-oiseau", { x: "65vw" }, 0);
/*------------------------------------------------------------------
Chapitre 4 Morphing (Marche sur codePen)
--------------------------------------------------------------------*/
let morphTl = gsap.timeline({
  repeatDelay: 0.3,
  defaults: {
    duration: 3,
    
  },
  scrollTrigger: {
    transformOrigin: "center center",
    trigger: "#chapitre-no4",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    markers: true,
  },
});

morphTl
.to("#cercle", { morphSVG: {shape:"#pieuvre", shapeIndex: 17}, scale: 0.1 }) 
.to("#cercle", { morphSVG: {shape:"#ancre", shapeIndex: 17}, scale: 0.5 });  

/*------------------------------------------------------------------
Chapitre 5
--------------------------------------------------------------------*/

const path = document.querySelector(".chemin");
const circle = document.querySelector(".cercle");

const val = { distance: 0 };

gsap.to(val, {
  distance: path.getTotalLength(),
  repeat: -1,
  duration: 5,
  onUpdate: () => {
    const point = path.getPointAtLength(val.distance);
    circle.setAttribute("cx", point.x);
    circle.setAttribute("cy", point.y);
  },
});
/*------------------------------------------------------------------
Chapitre 6
--------------------------------------------------------------------*/
/*---Sprite Sheet Diver---*/
const diver = gsap.timeline({
  scrollTrigger: {
    trigger: "#chapitre-no6",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    markers: false,
  },
});
diver
  .to(".ss-diver", {
    x: "30vw",
  })
  .to(
    ".ss-diver",
    {
      x: "50vw",
    },
    "<"
  )
  .to(
    ".ss-diver",
    {
      x: "80vw",
    },
    "<"
  )
  .to(
    ".ss-diver",
    {
      x: "100vw",
    },
    "<"
  );

/*------------------------------------------------------------------
Chapitre 7
--------------------------------------------------------------------*/

const bateau = gsap.timeline({
  scrollTrigger: {
    trigger: ".bateau",
    start: "top 30%",
    end: "bottom top",
    scrub: 1,
    pin: true,
    markers: false,
    duration: 8,
  },
});
bateau.to(".bat-top", { y: "-150px" }, 0).to(".bat-bottom", { y: "150px" }, 0);

/*------------------------------------------------------------------
Chapitre 8
--------------------------------------------------------------------*/

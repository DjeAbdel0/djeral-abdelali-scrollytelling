
gsap.registerPlugin(ScrollTrigger);

/*
gsap.registerPlugin(DrawSVGPlugin);
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

/*------------------------------------------------------------------
Chapitre 1
--------------------------------------------------------------------*/

gsap.to("#atome", {
  duration: 5,
  markers: true,
  scrollTrigger: {
    trigger: "#chapitre-no1",
    start: "top top",
    end: "bottom bottom",
  toggleActions: "play reverse complete restart",
  },
  
  motionPath: {
      path: "#cheminChap1",
      align: "#cheminChap1",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
  },
});
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
    pin: true,
    trigger: "#chapitre-no3",
    start: "top top",
    end: "bottom top",
    markers: false,
    scrub: true,
  },
});
oiseau.to(".ss-oiseau", { x: "65vw" }, 0);

/*------------------------------------------------------------------
Chapitre 4 Morphing
--------------------------------------------------------------------*/
/*
let morphTl = gsap.timeline({
  repeatDelay: 0.3,
  repeat: -1,
  yoyo: true,
  defaults: {
    duration: 3,
    transformOrigin: "10% 20%",
  },
  scrollTrigger: {
    transformOrigin: "center center",
    trigger: "#chapitre-no4",
    start: "top top",
    end: "bottom top",
    pin: true,
    markers: true,
  },
});

morphTl
.to("#cercle", { morphSVG: {shape:"#pieuvre", shapeIndex: 17}, scale: 0.1 }) 
.to("#cercle", { morphSVG: {shape:"#ancre", shapeIndex: 17}, scale: 0.5 })

*/


/*------------------------------------------------------------------
Chapitre 5
--------------------------------------------------------------------*/
/*

gsap.set("#sirene", {drawSVG: "0% 0%"});

gsap.to("#sirene", {
  drawSVG: "0% 100%",
  duration: 5,
  scrollTrigger: {
    markers: true,
    pin: true,
    trigger: "#chapitre-no5",
    start: "top top", 
    end: "bottom top", 
    scrub: true
  }
});

*/
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
const lettres = gsap.timeline({
  duration: 1,
  opacity: 1,
  ease: 'power2.easeOut',
  stagger: {
    from: 'start',
    amount: 0.5,
  },
  scrollTrigger: {
    trigger: "#chapitre-no8",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    pin: true,
    markers: false,
    duration: 8,
  },
});

lettres.fromTo('.lettres span', {
  x: "50vw", 
  opacity: 0,
}, {
  x: "-5vw",
  opacity: 1,
});

lettres.fromTo('.lettres-bas span', {
  x: "-50vw", 
  opacity: 0,
}, {
  x: "-3.5vw",
  opacity: 1,
});

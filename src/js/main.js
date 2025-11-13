import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// family
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".family",
      start: "top top",
      end: "+=1000", // longueur du scroll
      scrub: true,
      pin: true, // bloque la section pendant l'anim
    },
  })
  .to(".top", { y: "-100%", ease: "none" }, 0)
  .to(".bottom", { y: "100%", ease: "none" }, 0)
  .to(
    ".family-case",
    {
      width: 793,
      height: 557,
      ease: "none",
    },
    0
  );

// scroll horizontal + parallax

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scroll-horizontal",
      start: "top top",
      end: "+=1400%",
      pin: true,
      scrub: true,
      markers: true,
    },
  })
  .to(".screens", {
    x: "-14.28%",
    ease: "sine.inOut",
  })
  .to(".parallax-object.background", {
    x: "-3vw",
    ease: "quad.inOut",
  })
  .to(".parallax-object.sabre", {
    x: "-6vw",
    ease: "quad.inOut",
  })
  .to(".parallax-object.tree", {
    x: "-12vw",
    ease: "quad.inOut",
  })
  .to(".screens", {
    x: "-92.85%",
    ease: "sine.inOut",
  });

// walking

gsap.set([".walking-2", ".walking-3", ".walking-4"], {
  opacity: 0,
  y: 50,
});

gsap.to([".walking-2", ".walking-3", ".walking-4"], {
  opacity: 1,
  y: 0,
  duration: 1,
  stagger: 0.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".carre-anim1",
    start: "top 10%",
  },
});

// Initialisation + gestion du resize
// window.addEventListener("load", init);
// window.addEventListener("resize", () => {
//   clearTimeout(window._parallaxResizeTimeout);
//   window._parallaxResizeTimeout = setTimeout(init, 150);
// });

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

// scroll horizontal

gsap.to(".screens", {
  scrollTrigger: {
    trigger: ".scroll-horizontal",
    start: "top top",
    end: "+=1400%",
    pin: true,
    scrub: true,
    markers: true,
  },
  x: "-92.8%",
  ease: "sine.inOut",
});

// Animation des images
tl.to(".top", { y: "-100%", ease: "none" }, 0)
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

// walking
gsap.set([".carre-anim2", ".carre-anim3", ".carre-anim4"], {
  opacity: 0,
  y: 50,
});

gsap.to([".carre-anim2", ".carre-anim3", ".carre-anim4"], {
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

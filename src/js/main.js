import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  x: "-93%",
  ease: "sine.inOut",
});

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

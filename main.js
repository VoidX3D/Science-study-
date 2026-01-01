AOS.init({ duration: 800, once: true });

gsap.from(".unit-card", {
  opacity: 0,
  y: 50,
  stagger: 0.1,
  duration: 1
});
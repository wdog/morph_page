import "./input.css";
import gsap from "gsap";
const button = document.getElementById("open_close");
const tl = gsap.timeline({ paused: true, reversed: true });

tl.add(
  gsap.to("#info", {
    height: "100%",
    ease: "power2.easeOut",
    duration: 0.5,
  })
).add(
  gsap.to(".cover", {
    width: "60%",
    ease: "power2.easeOut",
    duration: 1,
  }),
  "-=0.5"
);

button.addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});



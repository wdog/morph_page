import "./input.css";
import gsap from "gsap";
const button = document.getElementById("open_close");
var tl = gsap.timeline({ paused: true, reversed: true });

tl.add(
  gsap.to(".cover", {
    width: "60%",
    duration: 0.5,
    ease: "power2.easeOut",
    onComplete: () => console.log(Date.now()),
  })
);

button.addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});

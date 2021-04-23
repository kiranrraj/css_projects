const overlay = document.querySelector(".overlay");

function onMouseMove(event) {
  overlay.style.backgroundImage = 
  `radial-gradient(at ${event.clientX}px ${event.clientY}px, rgba( 96, 108, 136, 0.5) 0, #3f4c6b 90% )`;
}
document.addEventListener("mousemove", onMouseMove);
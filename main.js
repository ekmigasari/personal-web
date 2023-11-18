import Typed from "typed.js";
import confetti from "canvas-confetti";

// typed.js
const typed = new Typed("#element", {
  strings: ["I'M A CREATOR", " I'M A DESIGNER", "I'M A DEVELOPER"],
  typeSpeed: 100,
  backSpeed: 150,
  loop: true,
});

// canvas-confetti
const confettiElements = document.querySelectorAll(".confetti");

confettiElements.forEach((confettiElement) => {
  confettiElement.addEventListener("click", () => {
    const myCanvas = document.createElement("canvas");
    myCanvas.style.position = "fixed";
    myCanvas.style.inset = 0;
    myCanvas.style.width = "100vm";
    myCanvas.style.height = "100vh";
    myCanvas.style.zIndex = -1;

    document.body.append(myCanvas);

    const myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true,
    });

    myConfetti({
      particleCount: 100,
      spread: 160,
    });
  });
});

//click link
const openLinkInNewWindow = (url) => {
  window.open(url, "_blank");
};

document.addEventListener("DOMContentLoaded", () => {
  const openlinkDivs = document.querySelectorAll(".openlink");

  openlinkDivs.forEach((div) => {
    div.addEventListener("click", () => {
      const url = div.dataset.link; // Get the link from the "data-link" attribute
      openLinkInNewWindow(url);
    });
  });
});

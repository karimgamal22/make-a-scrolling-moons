let stars = document.getElementById("stars");
let moon2 = document.getElementById("moon2");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let zamalek = document.querySelector(".zamalek");

window.onscroll = function () {
  let value = scrollY;
  stars.style.left = value + "px";
  moon2.style.top = value * 4 + "px";
  mountains3.style.top = value * 2 + "px";
  mountains4.style.top = value * 1.5 + "px";
  river5.style.top = value * 1.2 + "px";
  boat6.style.top = value + "px";
  boat6.style.left = value * 3 + "px";
  zamalek.style.fontSize = value + "px";
  if (scrollY >= 52) {
    zamalek.style.fontSize = 52 + "px";
    zamalek.style.position = "fixed";
    if (scrollY >= 373) zamalek.style.display = "none";
  } else {
    zamalek.style.display = "block";
  }
  if (scrollY >= 81) {
    document.querySelector(".main").style.background =
      "linear-gradient(#376281,#10001f)";
  } else {
    document.querySelector(".main").style.background =
      "linear-gradient(#200016, #10001f)";
  }
};

// let value = scrollY;
// stars.style.left = value + "px";
// moon2.style.top = value * 3 + "px";
// mountains3.style.top = value * 2 + "px";
// mountains4.style.top = value * 1.5 + "px";
// river5.style.top = value * 1.2 + "px";
// boat6.style.top = value + "px";
// boat6.style.left = value * 3 + "px";
// group.style.fontSize = value  + "px";

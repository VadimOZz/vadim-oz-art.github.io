const galleryPages = [
  "fireee.html",
  "sp(100x70).html",
  "empty(105x75).html",
  "wine(90x80).html",
  "vrn(50x40).html",
  "tree(24x18).html",
  "cure(25x20).html",
  "amour(60x50).html",
  "dream(40x35).html",
  "kolokol(50x40).html",
  "EYE.html",
  "Head.html",
  "RIO.html",
  "Seoul(80x40).html",
  "konf(24x18).html",
  "Galatea(35x25).html",
  "fall(105x75).html",
  "Ikar.html",
  "croc90x60.html",
  "zakat(100x70).html"
];

(function () {
  const currentPage = window.location.pathname.split("/").pop();
  const currentIndex = galleryPages.indexOf(currentPage);

  if (currentIndex === -1) return;

  const prevIndex = (currentIndex - 1 + galleryPages.length) % galleryPages.length;
  const nextIndex = (currentIndex + 1) % galleryPages.length;

  const navLeft = document.createElement("a");
  navLeft.href = galleryPages[prevIndex];
  navLeft.textContent = "←";
  navLeft.className = "gallery-nav-button left";

  const navRight = document.createElement("a");
  navRight.href = galleryPages[nextIndex];
  navRight.textContent = "→";
  navRight.className = "gallery-nav-button right";

  document.addEventListener("DOMContentLoaded", () => {
    const painting = document.querySelector(".painting");
    if (painting) {
      painting.insertAdjacentElement("beforebegin", navLeft);
      painting.insertAdjacentElement("beforebegin", navRight);
    }
  });
})();

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
  "Rio.html",
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

  document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".painting-wrapper");
    if (!wrapper) return;

    const leftBtn = document.createElement("a");
    const rightBtn = document.createElement("a");

    leftBtn.href = galleryPages[prevIndex];
    rightBtn.href = galleryPages[nextIndex];

    leftBtn.className = "gallery-nav-button left";
    rightBtn.className = "gallery-nav-button right";

    wrapper.appendChild(leftBtn);
    wrapper.appendChild(rightBtn);
  });
})();

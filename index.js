const changeFontfam = (className, classToAdd) => {
  className.forEach((element) => {
    element.classList.add(classToAdd);
  });
};
(() => {
  changeFontfam(document.querySelectorAll(".nav-link"), "fs-5");
  changeFontfam(document.querySelectorAll(".checks > div"), "fs-5");
  changeFontfam(document.querySelectorAll(".carousel-item > .d-block"), "w-50");
})();

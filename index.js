const changeFontfam = (className, classToAdd) => {
  className.forEach((element) => {
    element.classList.add(classToAdd);
  });
};
(() => {
  changeFontfam(document.querySelectorAll(".nav-link"), "fs-5");
})();

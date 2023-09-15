const changeFontfam = (className, classToAdd) => {
  className.forEach((element) => {
    element.classList.add(classToAdd);
  });
};

function animationTrigger(section, animationName, name, expand = null) {
  const options = {
    root: null,
    threshold: 0,
    rootMargin: "25px",
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.target.className.includes(name) && entry.isIntersecting) {
        entry.target.classList.add(expand);
      } else if (
        entry.target.className.includes(name) &&
        !entry.isIntersecting
      ) {
        entry.target.classList.remove(expand);
      }
      if (entry.isIntersecting) {
        entry.target.classList.add(animationName);
      } else {
        entry.target.classList.remove(animationName);
      }
    });
  }, options);

  observer.observe(section);
}

(() => {
  changeFontfam(document.querySelectorAll(".nav-link"), "fs-5");
  changeFontfam(document.querySelectorAll(".checks > div"), "fs-5");
  changeFontfam(document.querySelectorAll(".carousel-item > .d-block"), "w-50");
})();

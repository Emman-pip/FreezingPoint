const changeFontfam = (className, classToAdd) => {
  className.forEach((element) => {
    element.classList.add(classToAdd);
  });
};

// const appendImage = (element, image, classname) => {
//   const img = new Image();
//   img.src = image;
//   img.classList.add(classname);
//   element.appendChild(img);
// };

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
  const gallery = [
    "295889311_750834029534085_6592649726003728836_n.jpg",
    "298326143_1131782104099838_5266227697283742202_n.jpg",
    "314997795_794338348533258_4532597700984088425_n.jpg",
    "368510212_3536945379898482_2006564062749195261_n.jpg",
    "376554827_1451083815671444_3949915767227916509_n.jpg",
    "377154173_303613619026966_1895168182135215089_n.jpg",
    "377231761_1989309948118350_1986698142232040460_n.jpg",
    "377261217_975618426879486_1142189878632380027_n.jpg",
    "377290360_288795223894463_7830367544930223325_n.jpg",
    "377346957_1521245865316542_294737938102591164_n.jpg",
  ];
  // for (let i = 0; i < gallery.length; i++) {
  //   appendImage(
  //     document.querySelector(".galleryPics"),
  //     `../media/gallery/${gallery[i]}`,
  //     "galleryPic"
  //   );
  // }
})();

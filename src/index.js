import _ from "lodash";
import "./style.scss";
import bootstrap from "bootstrap";

const changeFontfam = (className, classToAdd) => {
  className.forEach((element) => {
    element.classList.add(classToAdd);
  });
};

const domCreation = () => {
  const hello = document.createElement("div");
  hello.innerHTML = "Hello, webpack";
  document.body.appendChild(hello);
};

(() => {
  domCreation();
})();

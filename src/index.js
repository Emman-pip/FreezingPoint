import _ from "lodash";
import "./style.scss";
import Icon from "./media/images/use3.jpg";
import bootstrap from "bootstrap";

const changeFontfam = (className, classToAdd) => {
  className.forEach((element) => {
    element.classList.add(classToAdd);
  });
};

const domCreation = () => {
  const hello = document.createElement("div");
  hello.textContent = "HAHAHAHAH";
  document.body.appendChild(hello);
};

(() => {
  domCreation();
})();

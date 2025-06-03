console.log("index.js loaded");

import { Header } from "./Header.js";
import { Paragraph } from "./Paragraph.js";
onload = () => {
  var app = document.querySelector("#app");
  //   var header = document.createElement("h1");
  //   header.innerText = "My SPA";
  //   var subheader = document.createElement("h2");
  //   subheader.innerText = "Single Page App";
  //   var para = document.createElement("p");
  //   para.innerText = `
  // Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo magnam
  // consequatur laborum, unde saepe voluptatum ex ea quaerat quibusdam animi
  // quasi, explicabo pariatur architecto! Voluptates incidunt reiciendis
  // ducimus dolorum.`;
  // refactored to functions
  var header = new Header(1, "My SPA");
  var subheader = new Header(2, "Single Page Web App");
  var para =
    new Paragraph(`  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nemo magnam
  consequatur laborum, unde saepe voluptatum ex ea quaerat quibusdam animi
  quasi, explicabo pariatur architecto! Voluptates incidunt reiciendis
  ducimus dolorum.`);
  app.appendChild(header);
  app.appendChild(subheader);
  app.appendChild(para);
};

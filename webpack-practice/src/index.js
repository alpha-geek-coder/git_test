import "./style.css";
import { greeting } from "./greeting.js";
import logoImage from "./webpack-logo.jpg";
import Data from "./data.xml";
import Notes from "./data.csv";

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';


console.log(greeting);

// Select the header 
const headerDiv = document.querySelector('.header');
const image = document.createElement("img");
image.src = logoImage;
image.style.width = "50px";
image.style.height = "50px";

// Insert the image before the h1
headerDiv.prepend(image);

console.log(Data);
console.log(Notes);

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`
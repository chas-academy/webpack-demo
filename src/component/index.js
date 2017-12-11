import '../styles/app.css';

import { cube, add } from '../utils/calc.js';

export default (text = "Hello Chas Academy") => {
  const element = document.createElement("pre");

  element.innerHTML = `
    ${text} this is now live reloading. No more tired pinky!
    5 cubed is equal to ${cube(5)}
  `;

  // Add 2 + 2 is equal to ${add(2, 2)} to above to watch tree-shaking work

  element.classList.add('lead');

  return element;
};
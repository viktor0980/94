import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests
  app.setEmojis(["🐒", "🦍", "🦧"]);
  app.addBananas();
  window.__JS_APP = app;
});
let monkeysBananas = setEmojis(function(element){
return element.addBananas;

})

var div = document.getElementById('emojis');
while(div.firstChild){
    div.removeChild(div.firstChild);
}
function addElement() {
  // create a new paragraph element
  const newPar = document.createElement("p");}

$('.monkeysBananas').append('<div class="monkeysBananas"></div>')
$('.main').wrap('<div class="main"></div>')

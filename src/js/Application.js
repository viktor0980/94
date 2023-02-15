import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
  }

  addBananas() {

this.emoji = this.emojis + this.banana; 
  
  }

   addP() {

    const newP = document.createElement("p");
    var wrapDiv = document.getElementById("emojis") 
    newP.textContent = this.emoji;
    wrapDiv.appendChild(newP);
  };
}

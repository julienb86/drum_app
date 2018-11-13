function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const change = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!audio){
    return false; //stop the function
  }
  audio.currentTime = 0;//rewind to the start
  audio.play();
  change.classList.add("playing");
};


function removeTransition(e) {
  if (e.propertyName !== "transform")
    return;
    this.classList.remove("playing");
}
const keys = document.querySelectorAll(".button");
keys.forEach( key => key.addEventListener('transitionend', removeTransition
));


window.addEventListener('keydown', playSound);

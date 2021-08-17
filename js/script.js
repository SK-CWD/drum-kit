window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // console.log(audio);
    if(!audio)return//stops the function from running all together
    audio.currentTime = 0;//rewinds the sound back sooner than when it finishes so if it is clicked over
    //and over, it will still play
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.play();
    key.classList.add('playing');

});
function removeTransition (e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    
    this.classList.remove('playing');

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

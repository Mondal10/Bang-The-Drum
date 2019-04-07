/**
 * All transition and sound creating functions here
 * 
 */
export class Play {
    sound(e) {
        console.log(e.keyCode);
        const currentAudio = $(`audio[data-key="${e.keyCode}"]`); // To get data-key element

        currentAudio[0].play();

        /**
         * For vanilla javascript
         */
        // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // console.log(audio);
        // audio.play();
    }
}
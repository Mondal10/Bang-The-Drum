/**
 * All transition and sound creating functions here
 * 
 */
export class Play {

    /**
     * Play sound on key stroke
     * 
     * @param {Object} e 
     */
    sound(e) {
        const currentAudio = $(`audio[data-key="${e.keyCode}"]`)[0]; // To get data-key element
        const currentKey = $(`div[data-key="${e.keyCode}"]`)[0];

        if (!currentAudio) return; // Any other key pressed do nothing

        $(currentKey).addClass('playing'); // Add Transition to key

        currentAudio.currentTime = 0; // Play audio continuously on raid key strokes
        currentAudio.play();

        /**
         * For vanilla javascript
         */
        // const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        // console.log(audio);
        // audio.play();
    }

    /**
     * Remove Transition class '.playing'
     * 
     * @param {Object} e 
     */
    removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    }
}
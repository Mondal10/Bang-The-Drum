import { Play } from './play.js';
let playDrum = new Play();

/**
 * Create the keys/buttons
 * 
 * @param {Object} data 
 */
export const createKeys = (data) => {
    const keys = data.keys;
    let $keysDiv = $('<div>').addClass('keysDiv').appendTo($('.root'));
    let $key;
    let $keyBinding;
    let $span;
    let $audio;
    keys.forEach((key, i) => {
        $key = $('<div>').addClass('keyDiv').attr('data-key', key.dataKey).appendTo($('.keysDiv'));

        // Transition end as the name says, it triggers function on css transition end.
        $key[0].addEventListener('transitionend', playDrum.removeTransition);

        $keyBinding = $('<kbd>').html(key.keyBinding).appendTo($key);

        $span = $('<span>').addClass("sound").html(key.name).appendTo($key);

        $audio = $('<audio>').attr({
            'data-key': key.dataKey,
            'src': key.src
        }).appendTo($('.keysDiv'));
    });
}

window.addEventListener('keydown', playDrum.sound); 
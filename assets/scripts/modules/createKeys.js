import { Play } from './play.js'

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

        $keyBinding = $('<kbd>').html(key.keyBinding).appendTo($key);

        $span = $('<span>').addClass(key.name).html(key.name).appendTo($key);

        $audio = $('<audio>').attr({
            'data-key': key.dataKey,
            'src': key.src
        }).appendTo($('.keysDiv'));
    });
}

var playDrum = new Play();

window.addEventListener('keydown', playDrum.sound);
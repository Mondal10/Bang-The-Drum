import { getJsonData } from './getJson.js';
import { randomBGImg } from './randomImg.js';

/**
 * Initialize
 */
export const init = () => {
    randomBGImg();
    getJsonData('./assets/config/keys.json');
}
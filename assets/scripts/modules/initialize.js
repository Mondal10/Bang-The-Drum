import { getJsonData } from './getJson.js'

/**
 * Initialize
 */
export const init = () => {
    getJsonData('./assets/config/keys.json');
}
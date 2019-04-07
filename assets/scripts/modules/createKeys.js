/**
 * Create the keys/buttons
 * 
 * @param {Object} data 
 */
export const createKeys = (data) => {
    const keys = data.keys;

    keys.forEach((key, i) => {
        console.log(key, i);
    });
}
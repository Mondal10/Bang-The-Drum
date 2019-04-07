import { createKeys } from './createKeys.js'
// export const configData = {};

/**
 * Retrieve the JSON data and call the create function
 * 
 * @param {String} url
 * 
 */

export const getJsonData = (url) => {

    $.ajax({
        dataType: "json",
        url: url,
        // data: data,
        async: true, // true for async request ('false' for sync request, which can get deprecated)
        success: (data) => {
            // Object.assign(configData, data);
            createKeys(data);
        }
    });
}
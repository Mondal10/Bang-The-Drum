import { createKeys } from './createKeys.js'
// export const configData = {};

/**
 * Retrieve the JSON data and call the create function
 * 
 * @param {String} url
 * 
 */

export const getJsonData = (url) => {
    // console.time('Time to load')
    // $.ajax({
    //     dataType: "json",
    //     url: url,
    //     // data: data,
    //     async: true, // true for async request ('false' for sync request, which can get deprecated)
    //     success: (data) => {
    //         // Object.assign(configData, data);
    //         createKeys(data);
    //         console.timeEnd('Time to load');
    //     }
    // });

    // Trying to use fetch although fetch, $.ajax and $.getJSON are sort of similar
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            createKeys(data);
            // console.timeEnd('Time to load')
        })


}
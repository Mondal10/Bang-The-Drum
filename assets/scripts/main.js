import { getJson } from './modules/getJson.js'
import { init } from './modules/initialize.js'

window.onload = () => {
    console.log(":::::Page Load Hogaya:::::");
    getJson();
    init();
}
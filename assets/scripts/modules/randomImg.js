/**
 * To set Random Background Image 
 */
export const randomBGImg = () => {
    const randomImages = ['./assets/images/background.jpg', './assets/images/background1.jpg'];

    const randomNumber = Math.floor(Math.random() * randomImages.length);
    const imgToLoad = randomImages[randomNumber];

    $('html').css({
        "background": `url(${imgToLoad})`,
        "background-size": "cover",
        "background-repeat": "no-repeat"
    });
}
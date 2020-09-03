const splash = document.querySelector('.splash');



window.addEventListener('load', (event) => {
    var referURL = document.referrer;
    var path = referURL.replace(/^https?:\/\//, '').split('/');
    console.log(path)

    if (path[1] != "works") {
        setTimeout(() => {
            splash.classList.add('display-none');
        }, 1500)
    } else {
        splash.classList.add('no-display');
    }
})
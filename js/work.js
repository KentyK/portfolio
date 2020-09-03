const splash = document.querySelector('.splash');



document.addEventListener('DOMContentLoaded', (e) => {
    var referURL = document.referrer;
    var path = referURL.replace(/^https?:\/\//, '').split('/');
    if (path[1] != "works") {
        setTimeout(() => {
            splash.classList.add('display-none');
        }, 1500)
    } else {
        splash.classList.add('no-display');
    }
})
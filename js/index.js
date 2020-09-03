const splash = document.querySelector('.splash');

window.addEventListener('load', (event) => {
    setTimeout(() => {
        splash.classList.add('display-none');

        var referURL = document.referrer;
        var path = referURL.replace(/^https?:\/\//, '').split('/');
        console.log(path)

        if (path[1] != "works") {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        AOS.refresh()
    }, 800)
})


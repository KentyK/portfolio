const splash = document.querySelector('.splash');

window.addEventListener('load', (event) => {
    setTimeout(() => {
        splash.classList.add('display-none');
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        AOS.refresh()
    }, 800)
})


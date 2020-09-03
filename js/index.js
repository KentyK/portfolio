const splash = document.querySelector('.splash');

window.addEventListener('load', (event) => {
    setTimeout(() => {
        splash.classList.add('display-none');
        AOS.refresh()
    }, 800)
})


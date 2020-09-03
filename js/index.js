const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e) => {
    setTimeout(() => {
        splash.classList.add('display-none');
        AOS.refresh()
    }, 800)
})


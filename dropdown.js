document.addEventListener('DOMContentLoaded', () => {

    let burgerMenu = document.querySelector('#burger-button')
    let littleMenu = document.querySelector('#little-menu')
    let subMenu = document.querySelector('#sub-menu')

    burgerMenu.style.backgroundImage = "url('asset/images/bars.svg')"

    littleMenu.addEventListener("click", () => {
        if (subMenu.style.display == 'block') {
            burgerMenu.style.backgroundImage = "url('asset/images/bars.svg')"
            subMenu.style.display = "none"
        } else {
            subMenu.style.display = "block"
            burgerMenu.style.backgroundImage = "url('asset/images/xmark.svg')"
        }
    })
})
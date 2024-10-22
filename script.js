const NavIcon = document.querySelector('#NavIcon')
const closeBtn = document.querySelector('#closeBtn')
const popUp = document.querySelector('#popUp')



NavIcon.addEventListener('click', () => {
    popUp.classList.toggle("showNav")
 


})

function closeFn() {
    popUp.classList.toggle("showNav")


}
const NavIcon = document.querySelector('#NavIcon')
const closeBtn = document.querySelector('#closeBtn')
const popUp = document.querySelector('#popUp')



NavIcon.addEventListener('click', () => {
    popUp.classList.toggle("showNav")
 


})

function closeFn() {
    popUp.classList.toggle("showNav")


}

let bookBtn = document.querySelector('#bookBtn');
let contactus = document.querySelector('#contactus');




bookBtn.addEventListener('click', function(){
    console.log('Button was clicked!');
    contactus.scrollIntoView({ 
        behavior: 'smooth' 
    })

});
    

// let contactBtn = document.querySelector('#contactBtn');

// contactBtn.addEventListener('click',function(){
//     console.log('Button was clicked');
    
//     contactus.scrollIntoView({
//         behavior:"smooth"
//     })
// }); 




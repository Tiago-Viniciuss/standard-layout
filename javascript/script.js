function openMenu() {
    let menu = document.getElementById('menuNav')
    let button = document.getElementById('menuButton')

    menu.classList.toggle('active')
    
    
    if (menu.className == 'bg-dark active') {
        button.innerHTML = 'close'
    } else {
        button.innerHTML = 'menu'
    }
}

function seekLink() {
    let menu = document.getElementById('menuNav')
    let button = document.getElementById('menuButton')

    menu.className = 'bg-dark'
    button.innerHTML = 'menu'
}

   

const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate';


function animeScroll() {

const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4)
target.forEach(function(element){
if ((windowTop) > element.offsetTop) {
    element.classList.add(animationClass);
} else {
    element.classList.remove(animationClass);
}

})

}

animeScroll();

if(target.length){
    window.addEventListener('scroll', function(){

    animeScroll();

})
    
}
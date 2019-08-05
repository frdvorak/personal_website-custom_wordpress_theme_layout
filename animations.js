// navigation collapse
const navigationToggle = document.querySelector('.navigation_toggle');
const navigationBar = document.querySelector('.navigation');

const collapseNav = function(){
    navigationBar.classList.toggle('collapsed');
    navigationToggle.classList.toggle('collapsed');
};
navigationToggle.addEventListener('click', collapseNav);


// header badge animations
const unicorn =  document.querySelector('.unicorn');
const butterfly =  document.querySelector('.butterfly');
const dragon =  document.querySelector('.dragon');
const stegosaurus =  document.querySelector('.stegosaurus');
const deer =  document.querySelector('.deer');
const frog =  document.querySelector('.frog');
const images = [unicorn, butterfly, dragon, stegosaurus, deer, frog];
const allImagesPaths = document.querySelectorAll('.header_badge path');
console.log(images);
console.log(frog);
let temp = 0;

const showOneImage = function(){
    let activeImage = Math.floor(Math.random()*6)+1;
    // prevent duplicates
    if (activeImage === temp) {
        return showOneImage();
    }
    images.forEach(image => {image.style.display = "none";});
    console.log('active image: '+activeImage)
    if (activeImage === 1) {
        unicorn.style.display = "block";
    } else if (activeImage === 2){
        butterfly.style.display = "block";
    } else if (activeImage === 3){
        dragon.style.display = "block";
    } else if (activeImage === 4){
        stegosaurus.style.display = "block";
    } else if (activeImage === 5){
        deer.style.display = "block";
    } else if (activeImage === 6){
        frog.style.display = "block";
    } else {
        console.log(activeImage + ' error' );
        return showOneImage();
    }
    temp = activeImage;
}
showOneImage();
const addImage = setInterval(showOneImage, 15000);
addImage;

// stope header animations after 10 loops
const stopHeaderAnimations = function() {
    allImagesPaths.forEach(image => {image.style.animation = 'dash-fill 15s linear forwards';});
    const hideImage = clearInterval(addImage);
    showOneImage();
    console.log('stopped');
}
setTimeout(stopHeaderAnimations, 149000);
 
/*
// append contacts to dynamic WordPress navigation

const navigation_contacts_HTML = `
<div class="navigation_contacts">
                        <a href='mailto:frantisek.dvorak011@gmail.com'><i class="far fa-envelope-open"></i></a>
                        <a href='tel:447392757562'><i class="fas fa-phone"></i></a>
                        <a href='https://github.com/frdvorak' target='blank'><i class="fab fa-github"></i></a>
                        <a href='https://www.linkedin.com/in/frank-dvorak-0a398615a' target='blank'><i class="fab fa-linkedin"></i></a>
                </div>`
navigationBar.insertAdjacentHTML('beforeend', navigation_contacts_HTML);

const navigation_contacts = document.querySelector('.navigation_contacts').style.display = 'none';
*/
 
 moon_cloud.addEventListener('click', function() {
    document.body.classList.toggle('dark');
 });
 night_mode.addEventListener('click', function() {
    document.body.classList.toggle('dark');
 });
 hamburger.addEventListener('click', function(){
    let menu = document.getElementById('menu-body');
    if(menu.style.display === 'block'){
         menu.style.display = 'none';
    }else{
        menu.style.display = 'block'
    };
   
 });
users.addEventListener('click', function(){
    let user = document.getElementById('userCard');
    if(user.style.display === 'block'){
        user.style.display = 'none';
   }else{
       user.style.display = 'block'
   };
});
     

const popup = document.querySelector('.popup');
function showPopup() {
  popup.classList.add('open');
}
function hidePopup() {
  popup.classList.remove('open');
}


window.sr= ScrollReveal();
        sr.reveal('.navbar', {
            duration: 2000,
            origin: 'bottom'
        });
        sr.reveal('.welcom', {
            duration: 2000,
            origin: 'top',
            distance: '300px'
        });
        sr.reveal('.showcase-right', {
            duration: 2000,
            origin: 'right',
            distance: '300px'
        });
        sr.reveal('.btn', {
            duration: 2000,
            origin: 'right',
            delay: 2000,
            distance: '300px'
        });
        sr.reveal('#test div', {
            duration: 2000,
            origin: 'bottom',
        });
        sr.reveal('.info-left', {
            duration: 2000,
            origin: 'left',
            distance: '300px',
            viewFactor: 0.2
        });
        sr.reveal('.info-right', {
            duration: 2000,
            origin: 'right',
            distance: '300px',
            viewFactor: 0.2
        });
        
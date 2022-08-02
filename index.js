 
moon_cloud.addEventListener('click', function() {
    document.body.classList.toggle('dark');
 });

 hamburger.addEventListener('click', function(){
    let menu = document.getElementById('menu-body');
    if(menu.style.display === 'block'){
         menu.style.display = 'none';
    }else{
        menu.style.display = 'block';
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
night_mode.addEventListener('click', function() {
    document.body.classList.toggle('dark');
})

var loader = document.getElementById("preloader")

  window.addEventListener('load', function(){
    loader.style.display = 'none'
 })

window.sr= new ScrollReveal();
        sr.reveal('.hamburger', {
            duration: 2000,
            origin: 'bottom',
            reset: true
        });
        sr.reveal('.', {
            duration: 2000,
            origin: 'bottom',
            distance: '300px',
            reset: true
        });
        sr.reveal('.welcomeanime', {
            duration: 1000,
            origin: 'bottom',
            distance: '100px',
            reset: true
        });
        sr.reveal('.saveanime', {
            duration: 2000,
            origin: 'bottom',
            delay: 300,
            interval: 25,
            distance: '200px',
            reset: true
        });
        sr.reveal('.btn1', {
            duration: 2000,
            display: '300px',
            origin: 'bottom',
            rotate: {
                x: 10,
                y: 2,
                z: 0,
            },
            reset: true
        });

        sr.reveal('.btn2', {
            duration: 2000,
            origin: 'bottom',
            distance: '300px',
            viewFactor: 0.2,
            useDelay: 'always',
            reset: true
        });
        sr.reveal('.img-fluid', {
            duration: 2000,
            origin: 'left',
            distance: '300px',
            viewFactor: 0.2,
            reset: true
        });
        
        sr.reveal('.text', {
            duration: 1000,
            origin: 'bottom',
            distance: '300px',
            viewFactor: 0.2,
            reset: true
        });
        sr.reveal('p', {
            duration: 500,
            origin: 'left',
            distance: '300px',
            viewFactor: 0.2,
            reset: true
        });
        sr.reveal('.img-fluid', {
            duration: 2000,
            origin: 'left',
            distance: '300px',
            viewFactor: 0.2,
            reset: true
        });
        


/*scroll reveal values 

{
    delay: 0,
    distance: '0px',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0,
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    afterReset: function (el) {},
    afterReveal: function (el) {},
    beforeReset: function (el) {},
    beforeReveal: function (el) {},
}
*/


















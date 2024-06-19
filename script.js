let menuIcon = document.getElementById('menu-icon1');
let navlist = document.querySelector('.navlist');
let logo = document.querySelector('.logo');
let links = document.querySelectorAll('nav a');


menuIcon.addEventListener('click',function(){

    navlist.classList.toggle('active');

})
links.addEventListener('click',function(){
    navlist.classList.remove('active');

})
navlist.foreach(link=>{
    link.addEventListener('click',function(){
        link.classList.toggle('active');
    })
})
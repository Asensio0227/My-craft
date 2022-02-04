const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul')
const menu_item = document.querySelector('.header .nav-bar .nav-list ul li a')
const header = document.querySelector('.header .container');

hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active')
  mobile_menu.classList.toggle('active')
})

document.addEventListener('scroll',()=>{
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
})

menu_item.foreach(item=>{
  item.addEventListener('click',()=>{
    hamburger.style.classList.toggle('active');
    mobile_menu.style.classList.toggle('active');
  })
})
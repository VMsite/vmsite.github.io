const showNav = () =>{
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelectorAll('.navbar-list li');

    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');
        navbar.classList.toggle('navbar-active');
        navbarLinks.forEach(link => link.classList.toggle('showNav'));
    });
}

showNav();

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

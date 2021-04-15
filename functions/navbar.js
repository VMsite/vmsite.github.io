
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
import  './style.css';
import {head,foot,home,menu,toggleMenu} from './home';



const myheader = head();
const myfooter = foot();
const myHomePage = home();
const mymenu = menu();
myheader.header();
myfooter.footer();
myHomePage.homePage();

document.getElementById('burger').addEventListener('click',()=>{
    mymenu.burgerCards();
});

document.getElementById('home').addEventListener('click',myHomePage.homePage);
document.getElementById('pizza').addEventListener('click',mymenu.pizzaCards);
document.getElementById('special').addEventListener('click',mymenu.specialsCard);

document.querySelector('.bar').addEventListener('click',toggleMenu);
document.querySelectorAll('li').forEach(list=>{
    list.addEventListener('click', ()=>document.querySelector('ul').classList.remove('open'));
});



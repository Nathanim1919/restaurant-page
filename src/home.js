import mylogo from './logo.png'
import homebanner from './burger/banner1.jpg';
import logo1 from './logo1.png';

import s1 from './burger/b1.jpg';
import s2 from './burger/b10.jpg';
import s3 from './burger/b22.jpg';
import s4 from './burger/b5.jpg';
import s5 from './burger/b3.jpg';
import s6 from './burger/b23.jpg';
import s7 from './burger/b19.jpg';
import s8 from './burger/b20.jpg';

import p1 from './pizza/p2.jpg';
import p2 from './pizza/p4.jpg';
import p3 from './pizza/p3.jpg';
import p4 from './pizza/p1.jpg';
import p5 from './pizza/p6.jpg';
import p6 from './pizza/p7.jpg';
import p7 from './pizza/p8.jpg';
import p8 from './pizza/p9.jpg';

import z1 from './specials/bb2.jpg';
import z2 from './specials/bb5.jpg';
import z3 from './specials/bb6.jpg';
import z4 from './specials/z1.jpg';
import z5 from './specials/z2.jpg';
import z6 from './specials/z3.jpg';
import z7 from './specials/z4.jpg';
import z8 from './specials/z5.jpg';



const content = document.querySelector('.content');


export function toggleMenu(){
      const menu = document.querySelector('ul');
      const bar = document.querySelector('.bar');
      
      if (menu.classList.contains('open')) {
            menu.classList.remove('open');
            bar.setAttribute = ('class','fa-solid fa-xmark')
            bar.removeAttribute =('class','fa-solid fa-bars-staggered')

      }else{
            menu.classList.add('open');
            bar.removeAttribute = ('class','fa-solid fa-xmark')
            bar.setAttribute =('class','fa-solid fa-bars-staggered')
      }
}

export  const head=()=>{

  const header = ()=>{
            const header = document.querySelector('.header');
            const menu = document.createElement('ul');
                  menu.classList.add('menu'); 
            const homeBar = document.createElement('li');
                  homeBar.textContent = 'Home'; 
                  homeBar.id = 'home'; 
            const burgerBar = document.createElement('li');
            burgerBar.textContent = 'Burger';
            burgerBar.id = 'burger';
            const pizzaBar = document.createElement('li');
            pizzaBar.textContent = 'Pizza';
            pizzaBar.id = 'pizza';
            const SpecialitiesBar = document.createElement('li');
            SpecialitiesBar.textContent = 'Special';
            SpecialitiesBar.id = 'special';
            
            const icon = document.createElement('i');
            icon.setAttribute('class','fa-solid fa-cart-shopping');
            const bar = document.createElement('i');
            bar.setAttribute('class','fa-solid fa-bars-staggered bar');

            menu.append(homeBar,burgerBar,pizzaBar,SpecialitiesBar);       
            const logo = new Image();
                  logo.src = mylogo;
                  logo.classList.add('logo');
            
            header.append(logo,menu,bar,icon);       
            
    
  }     
  
  return{
      header,
  }
};


export  const foot =()=>{

      const footer=()=>{

      
            const footerSection = document.querySelector('.footer');
                  
            const logo = new Image();
                        logo.src = logo1;
                        logo.classList.add('logo');
            const services = document.createElement('div');
                  services.classList.add('services');
            const h2 = document.createElement('h2');
                  h2.textContent = 'Useful Links'       
            const s1 = document.createElement('p');
                  s1.textContent = 'Home';
            const s2 = document.createElement('p');
                  s2.textContent = 'About';
            const s3 = document.createElement('p');
                  s3.textContent = 'drink';
            const s4 = document.createElement('p');
                  s4.textContent = 'Fruit';
            
            
                  services.append(h2,s1,s2,s3,s4);

            const contact = document.createElement('div');
                  contact.classList.add('contact'); 
                  const h3 = document.createElement('h2');
                  h3.textContent = 'Contact Us'       
            const c1 = document.createElement('p');
                  c1.textContent = 'Facebook';
            const c2 = document.createElement('p');
                  c2.textContent = 'Telegram';
            const c3 = document.createElement('p');
                  c3.textContent = 'Instagram';
            const c4 = document.createElement('p');
                  c4.textContent = 'Tweeter';           

                  contact.append(h3,c1,c2,c3,c4)
            footerSection.append(logo,services,contact)        
          
      }
     return {
      footer,
     };    
}



export const home=()=>{

    const homePage = ()=>{

            content.textContent ='';
            content.style.background = 'black';
            const homeba = new Image();
            homeba.src = homebanner;
            homeba.classList.add('bannerImage'); 
            const innerBox = document.createElement('div');
                  innerBox.classList.add('innerBox');
            const h1 = document.createElement('h1');
                  h1.textContent = 'Habesh Burger House...';
            const h3 = document.createElement('h3');
                  h3.textContent = "Eat burger .. Enjoy Life";
            const welcom = document.createElement('div');
            welcom.classList.add('bannerContent');
                  welcom.append(h1,h3);             
            innerBox.append(welcom,homeba);
            content.appendChild(innerBox);
    }

    return{
      homePage,
    }
     
}


const  createSpecial = (myimage,name)=>{

      const createSpecials = function(){
           
            const box5 = document.createElement('div');
            box5.classList.add('box');
            const b5Image = new Image();
            b5Image.src = myimage;
            const h1 = document.createElement('h1');
            h1.textContent = name;
            const p = document.createElement('p');
            p.textContent = 'Delicious burger you have ever test! just come and join us';
            const carts5 = document.createElement('div');
            carts5.classList.add('carts');      
            const icon5 = document.createElement('i');
            icon5.setAttribute('class','fa-sharp fa-solid fa-cart-plus');
            const btn5 = document.createElement('button');
            btn5.textContent = 'more';
            btn5.classList.add('btn');
            carts5.append(btn5,icon5);
            box5.append(b5Image,h1,p,carts5);
            content.appendChild(box5);
      }
      
      const specialFood = function(){
            const cardBox = document.createElement('div');
            cardBox.classList.add('cardBox');
            const boxCon = document.createElement('div');
            boxCon.classList.add('boxCon');
            const myImage = new Image();
            myImage.src = myimage;
            const h1 = document.createElement('h1');
            h1.textContent = name;
            const p = document.createElement('p');
            p.textContent = 'Delicious burger you have ever test! just come and join us';
            const cart = document.createElement('div');
            cart.classList.add('carts');      
            const icon = document.createElement('i');
            icon.setAttribute('class','fa-sharp fa-solid fa-cart-plus');
            const btn = document.createElement('button');
            btn.textContent = 'more';
            btn.classList.add('btn');
            cart.append(btn,icon);
            boxCon.append(h1,p,cart)
            cardBox.append(myImage,boxCon);
            content.appendChild(cardBox);
      }

      return{
            createSpecials,
            specialFood,
      }
  };


export const menu =()=>{


      content.textContent =''
      content.style.background = 'rgba(255,255,255,.5)';
      content.style.backdropFilter = 'blur(20px)';


      // Add cards
      const burgerCards = ()=>{
            content.textContent ='';
            content.style.background='rgba(255,255,255,.2)'
            createSpecial(s1,'Hung Far Low Pork Burger').createSpecials();
            createSpecial(s2,' The MOS Burger').createSpecials();
            createSpecial(s3,'Bimbo Deluxe Burger').createSpecials();
            createSpecial(s4,'White Castle Slider').createSpecials();
            createSpecial(s5,'The Varsity Burger').createSpecials();
            createSpecial(s6,'The Umami Burger').createSpecials();
            createSpecial(s7,"The Ray's Hell Burger").createSpecials();
            createSpecial(s8,'The Ramen Burger').createSpecials();
            // document.getElementById('burger').style
      }


      // cards for pizza
      const pizzaCards = ()=>{
            content.textContent ='';
            content.style.background='rgba(255,255,255,.2)'
            createSpecial(p1,'Cheese Pizza').createSpecials();
            createSpecial(p2,'Veggie Pizza').createSpecials();
            createSpecial(p3,'Pepperoni Pizza').createSpecials();
            createSpecial(p4,'Meat Pizza').createSpecials();
            createSpecial(p5,'Margherita Pizza').createSpecials();
            createSpecial(p6,' Hawaiian Pizza').createSpecials();
            createSpecial(p7,"Buffalo Pizza").createSpecials();
            createSpecial(p8,'Supreme Pizza').createSpecials();
      }

      const specialsCard =()=>{
            content.textContent ='';
            content.style.background='rgba(255,255,255,.2)';
            createSpecial(z1,'Cheese Pizza').specialFood();
            createSpecial(z2,'Veggie Pizza').specialFood();
            createSpecial(z3,'Pepperoni Pizza').specialFood();
            createSpecial(z4,'Meat Pizza').specialFood();
            createSpecial(z5,'Margherita Pizza').specialFood();
            createSpecial(z6,' Hawaiian Pizza').specialFood();
            createSpecial(z7,"Buffalo Pizza").specialFood();
            createSpecial(z8,'Supreme Pizza').specialFood();

      }


      return{
            burgerCards,
            pizzaCards,
            specialsCard,
      }

  }



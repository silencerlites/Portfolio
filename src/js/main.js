// ============ SHOW MENU ===========
// const showMenu = (toggleId,navId) => {
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)

//     if(toggle && nav){
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show-menu')
//         })
//     }
// }
// showMenu('nav-toggle', 'nav-menu')
AOS.init();

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const menuBtn = document.querySelector(".nav__toggle");
const navadd = document.querySelector(".nav__add");
const navfoot = document.querySelector(".nav__footer");
const navitem = document.querySelector(".nav__list");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navitem.classList.add(
      "animate__animated",
      "animate__fadeInDown",
      "animate__delay-1s"
    );
    navadd.classList.add(
      "animate__animated",
      "animate__fadeInUp",
      "animate__delay-1s"
    );
    navfoot.classList.add(
      "animate__animated",
      "animate__fadeInUp",
      "animate__delay-1s"
    );
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navitem.classList.remove(
      "animate__animated",
      "animate__fadeInDown",
      "animate__delay-1s"
    );
    navadd.classList.remove(
      "animate__animated",
      "animate__fadeInUp",
      "animate__delay-1s"
    );
    navfoot.classList.remove(
      "animate__animated",
      "animate__fadeInUp",
      "animate__delay-1s"
    );

    menuOpen = false;
  }
});

// ========== REMOVE MENU MOBiLE =========
// 
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // Active Link
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    navitem.classList.remove(
      "animate__animated",
      "animate__fadeInRight",
      "animate__delay-1s"
    );
    navadd.classList.remove(
      "animate__animated",
      "animate__fadeInUp",
      "animate__delay-1s"
    );
    navfoot.classList.remove(
      "animate__animated",
      "animate__fadeInUp",
      "animate__delay-1s"
    );
  }

  // Remove menu mobile
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

// ======= SCROLL SECTIONS ACTIVE LINK =======
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// // ============ CHANGE BACKGROUND HEADER =========
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// ============ SHOW SCROLL TOP =========
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 860) scrollTop.classList.add('show-scroll')
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// Typing Effect
const typedTextSpan = document.querySelector(".home__typed-text");
const cursorSpan = document.querySelector(".home__cursor");

const textArray = ["Web Developer.", "Android Developer.", "Web Designer."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("home__typing"))
      cursorSpan.classList.add("home__typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("home__typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("home__typing"))
      cursorSpan.classList.add("home__typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("home__typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});


// ================= MIXITUP FILTER PORTFOLIO =============
const mixer = mixitup('.portfolio__container', {
    selectors: {
        target: '.portfolio__img'
    },
    animation: {
        duration: 400
    }
});

// link active portfolio
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }
}

linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))

// SWIPER CAROUSEL

const swiper = new Swiper('.testimonial__container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
        640:{
            slidesPerView: 2,
        },
        1024:{
            slidesPerView: 3,
        },
    }
  });

// VANILLA JS
VanillaTilt.init(document.querySelectorAll(".portfolio__img"), {
  max: 25,
  speed: 200,
  gyroscope: false,
  scale: 1.05,
  glare: true,
  "max-glare": 0.2,
  perspective: 2500

});


//   =============== GSAP ANIMATION =====================

// gsap.from('.home__img', {opacity: 0, duration: 2, delay: .5, x:60})
gsap.from('.home__data', {opacity: 0, duration: 2, delay: .5, y:25})
gsap.from('.home__greeting, .home__name, .home__profession, .home__button', {opacity: 0, duration: 2, delay: 1, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 2, delay: 1.5, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav__item', {opacity: 0, duration: 2, delay: 1.8, y:25, ease:'expo.out', stagger:.2})
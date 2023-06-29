window.onload = function () {
// scroll smooth

const scroll = new SmoothScroll('.nav_bar .menu a[href*="#"]', {
  speed: 600,
  header: '[data-scroll-header]'
});

const scrollContacto = new SmoothScroll('.bio a[href*="#"]', {
  speed: 600,
  header: '[data-scroll-header]'
});

const scrollArrowUp = new SmoothScroll('.footer_itop a[href*="#"]', {
  speed: 600,
});

// remove navbar

  let menuIcon = document.querySelector('.nav_bar .menu-btn');
  let navbar = document.querySelector('.nav_bar .menu');

  menuIcon.onclick = () => {
      navbar.classList.toggle('active');   
  }

  // remove activo

  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('.nav_bar .menu li a');

  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('activo');
          document.querySelector('.nav_bar .menu li a[href*=' + id + ']').classList.add('activo');
        });
      };
    });
    menuIcon.checked = false;
    navbar.classList.remove('active');
    

  }


  // parallax hero

  let portada = document.getElementById('portada');

  window.addEventListener('scroll', () => {
    let { scrollY } = window;
    portada.style.top = 0.5 * scrollY + 'px';

  });
}

// // galeria

// const carrusel = document.querySelector(".carrusel-items");

// let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
// let intervalo = null;
// let step = 1;
// const start = () => {
//   intervalo = setInterval(function () {
//     carrusel.scrollLeft = carrusel.scrollLeft + step;
//     if (carrusel.scrollLeft === maxScrollLeft) {
//       step = step * -1;
//     } else if (carrusel.scrollLeft === 0) {
//       step = step * -1;
//     }
//   }, 15);
// };

// const stop = () => {
//   clearInterval(intervalo);
// };

// carrusel.addEventListener("mouseover", () => {
//   stop();
// });

// carrusel.addEventListener("mouseout", () => {
//   start();
// });

// start();





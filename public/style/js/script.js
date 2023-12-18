//ham-menu 

$(document).ready(function(){
    $(".head").show();
    $("#show-menu").click(function(){  
      if($(".head").hasClass('close-menu')) {
        $(".head").removeClass('close-menu');
        $("body").removeClass("rm-scroll");
        $(".head__menu__list").addClass('animation');
        
      }
      else {
        $("body").addClass("rm-scroll");
        $(".head").addClass('close-menu');
        $(".head__menu__list").removeClass('animation');
        $(".head__menu__list").removeClass('animated');
      }
    });
    $(".p-home").addClass("p-home--animation");
});

var swiper = new Swiper('.swiper-container.box', {
  pagination: '.swiper-pagination',
  paginationClickable: true,
  effect: 'coverflow',
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflow: {
      rotate: 0,
      stretch: 100,
      depth: 150,
      modifier: 1.2,
      slideShadows: true,
  }
});

  //animasi scrool
  const elementsHome = document.querySelectorAll('.animation');

  let options = {
    root: null,
  }
  const callbacks = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('animated');
      }
    });
  }

  const observerHome = new IntersectionObserver(callbacks, options);
  elementsHome.forEach(item => {
    observerHome.observe(item);
  });
  
  //cursor
  const custom_cursor = document.getElementById('cursor');
  const pointer = document.getElementById('pointer');

  const animateCursor = (event, interacting, interactable) => {
      let cursorX = `calc(${event.clientX}px - 1.125rem)`,
          cursorY = `calc(${event.clientY}px - 1.125rem)`;

      let pointerX = `calc(${event.clientX}px - 0.25rem)`,
          pointerY = `calc(${event.clientY}px - 0.25rem)`;

      pointer.style.transform = `translate(${pointerX}, ${pointerY})`;

      const dimensions = interacting ? interactable.getBoundingClientRect() : null;
      const radius = interacting ? '0px' : '50%';

      if (interacting) {
          cursorX = (dimensions.x - 2) + 'px';
          cursorY = (dimensions.y - 2) + 'px';
      };

      const cursor_keyframes = {
          transform: `translate(${cursorX}, ${cursorY})`,
          width: interacting ? `${dimensions.width}px` : '2rem',
          height: interacting ? `${dimensions.height}px` : '2rem',
          borderRadius: radius,
      };

      custom_cursor.animate(cursor_keyframes, {
          duration: 400,
          fill: 'forwards'
      });
  };

  window.onmousemove = (event) => {
      const interactable = event.target.closest('.hover'),
          interacting = (interactable !== null);

      animateCursor(event, interacting, interactable);
  };

  window.onmousedown = (event) => {
      cursor.style.backgroundColor = 'transparent';
  };

  window.onmouseup = (event) => {
      cursor.style.backgroundColor = '#F5F74900';
  };
  // const elementsContact = document.querySelectorAll('.head__menu__item');

  // let option = {
  //   root: null,
  // }
  // const callback = (entries) => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting){
  //       entry.target.classList.add('active');
  //     }
  //   });
  // }

  // const observerContact = new IntersectionObserver(callback, option);
  // elementsContact.forEach(item => {
  //   observerContact.observe(item);
  // });
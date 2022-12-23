let count = 1;
function SearchToggle() {
  const searchInp = document.querySelector('header .input-groups');
  if (count % 2) {
    console.log(searchInp);
    searchInp.classList.remove('d-none');
    searchInp.style.cssText =
      'position:absolute;left: -100%;top: 35px;';
  } else {
    searchInp.classList.add('d-none');
    searchInp.style.cssText = '';
  }

  count++;
}

function MegaMenu() {
  const items = [
    ...document.querySelectorAll('.mega-menu > ul > li'),
  ];

  items.map((value) => {
    if (value.classList.contains('d-none')) {
      value.classList.remove('d-none');
      value.classList.add('d-flex');
    } else {
      value.classList.add('d-none');
    }
  });
}

function ToggleSubMenu(event) {
  const menuStyle = window.getComputedStyle(
    event.target.nextElementSibling
  );

  if (window.innerWidth < 994) {
    if (menuStyle.display == 'none') {
      event.target.nextElementSibling.style.display = 'flex';
    } else {
      event.target.nextElementSibling.style.display = 'none';
    }
  }
}

var swiper = new Swiper('.firstProduct', {
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    994: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
      slidesPerGroup: 5,
    },
  },
});

var swiper = new Swiper('.autoplaySlide', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var swiper = new Swiper('.blogProduct', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  slidesPerGroup: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },
  },
});

var swiper = new Swiper('.autoplaySlidePagination', {
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    994: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 3,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 1,
      slidesPerGroup: 4,
    },
  },
});

let mode2 = 1;
function BlackNavbar() {
  if (mode2 % 2) {
    document.getElementById('navbarTogglerDemo03').style.cssText =
      'transform:translateX(0)';
      document.querySelector('nav.border-bottom').style.display='none'
  } else {
    document.getElementById('navbarTogglerDemo03').style.cssText =
      'transform:translateX(-100%)';
      document.querySelector('nav.border-bottom').style.display='block'
  }


  mode2++;
}

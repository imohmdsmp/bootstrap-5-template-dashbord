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

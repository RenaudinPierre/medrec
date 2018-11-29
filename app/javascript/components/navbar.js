
const navbarElem      = document.getElementById('main-nav');
const toogleSizeElem  = document.getElementById('toogle-size-navbar');
const toogleFontUser = document.getElementById('toogle-font-user');
const toogleFontSignOut = document.getElementById('toogle-font-sign-out');

const toogleNavbar = (e) => {
  e.preventDefault();
  navbarElem.classList.toggle('navbar-small');
  toogleFontUser.classList.toggle('hidden');
  toogleFontSignOut.classList.toggle('hidden');
};


const initNavbar = ()  => {
  toogleSizeElem.addEventListener('click', toogleNavbar);
};

export default initNavbar;

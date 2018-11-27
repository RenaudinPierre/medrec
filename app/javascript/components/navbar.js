
const navbarElem      = document.getElementById('main-nav');
const toogleSizeElem  = document.getElementById('toogle-size-navbar');
const toogleFontUser = document.getElementById('toogle-font-user');
const toogleFontSignOut = document.getElementById('toogle-font-sign-out');
const toogleFontUserHidden = document.getElementById('toogle-font-user-hidden');
const toogleFontSignOutHidden = document.getElementById('toogle-font-sign-out-hidden');

const toogleNavbar = (e) => {
  e.preventDefault();
  navbarElem.classList.toggle('navbar-small');
};

const toogleFont = (e) => {
  e.preventDefault();
  toogleFontUser.classList.toggle('hidden');
  // toogleFontUserHidden.classList.toggle('hidden');
  toogleFontSignOut.classList.toggle('hidden');
  // toogleFontSignOutHidden.classList.toggle('hidden');
};

const initNavbar = ()  => {
  toogleSizeElem.addEventListener('click', toogleNavbar);
  toogleSizeElem.addEventListener('click', toogleFont);
};

export default initNavbar;

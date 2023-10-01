const burger = document.querySelector(`.burger_btn`);
const ulNav = document.querySelector(`.header__navbar-list `);
const burgerImg1 = document.querySelector(`.burger_btn__img1`);
const burgerImg2 = document.querySelector(`.burger_btn__img2`);
const burgerImg3 = document.querySelector(`.burger_btn__img3`)
console.log(ulNav);
console.log(burgerImg1);
console.log(burgerImg2);
console.log(burgerImg3);
burger.addEventListener( `click`,(e)=>{
ulNav.classList.toggle(`img_none`);
if(!ulNav.classList.contains(`img_none`)){
  burgerImg1.setAttribute(`src` , `images/burger_second_svg.svg`);
  burgerImg2.setAttribute(`src` , `images/icon-exit.svg`);
  burgerImg3.classList.add(`img_none`);
  burgerImg1.style.top = `3px`;
  burgerImg1.style.left = `5px`;
  burgerImg2.style.top = `3px`;
  burgerImg2.style.left = `5px`;
}else{
    burgerImg1.setAttribute(`src` , `images/burger_sm_svg.svg`);
  burgerImg2.setAttribute(`src` , `images/icon-burger_menu.svg`);
  burgerImg3.classList.remove(`img_none`);
  burgerImg1.style.top = `8px`;
  burgerImg1.style.left = `2px`;
  burgerImg2.style.top = `18px`;
  burgerImg2.style.left = `2px`;
}
})
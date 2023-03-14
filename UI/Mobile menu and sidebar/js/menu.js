document.addEventListener('DOMContentLoaded', function () {
   let burger = document.querySelector('.burger');
   let closeMenuBtn = document.querySelector('.header__close-btn');

   burger.addEventListener('click', function () {
      slideMenuOn();
   });

   closeMenuBtn.addEventListener('click', function () {
      slideMenuOff();
   });

   function slideMenuOn() {
      let menu = document.querySelector('.header');

      burger.classList.add('burger_clicked');
      menu.classList.add('header_slide');
   }

   function slideMenuOff() {
      let menu = document.querySelector('.header');

      menu.classList.remove('header_slide');
      burger.classList.remove('burger_clicked');
   }
});
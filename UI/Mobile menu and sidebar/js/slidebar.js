document.addEventListener('DOMContentLoaded', function () {
   let toggleBtn = document.querySelector('.header__toggle-btn');

   toggleBtn.addEventListener('click', function () {
      slideBar(toggleBtn);
   });

   function slideBar(el) {
      let toggleIcon = el.firstElementChild;
      let bar = document.querySelector('.header');
      let text = document.querySelectorAll('.link__text');

      toggleIcon.classList.toggle('_rotate');
      bar.classList.toggle('header_width');
      text.forEach(function (el) {
         el.classList.toggle('link__text_opacity');
      });
   }
});
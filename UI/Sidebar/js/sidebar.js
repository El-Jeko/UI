document.addEventListener('DOMContentLoaded', function () {
   let barBtn = document.querySelector('.sidebar__button');
   
   barBtn.addEventListener('click', function () {
      sideBarSlide(barBtn);
   });

   function sideBarSlide(el) {
      let btnEl = el.firstElementChild;
      let sideBar = document.querySelector('.sidebar');
      let barText = sideBar.querySelectorAll('.link__text');
      let body = document.querySelector('body');

      btnEl.classList.toggle('sidebar__btn_toggle');
      sideBar.classList.toggle('sidebar_width');
      barText.forEach(function (el) {
         el.classList.toggle('link__text_visibility');
      });
      body.classList.toggle('_overflow');
   }
});
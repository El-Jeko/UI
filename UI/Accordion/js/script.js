document.addEventListener('DOMContentLoaded', function () {
   let accordionBtns = document.querySelectorAll('.accordion__btn');

   accordionBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
         open(btn);
      });
   });

   function open(btn) {
      let text = btn.nextElementSibling;

      if (!text.style.maxHeight) {
         accordionBtns.forEach(function (el) {
            el.classList.remove('_open');
            el.classList.add('_opacity');
            el.nextElementSibling.style.maxHeight = null;
         });
         btn.classList.add('_open');
         btn.classList.remove('_opacity');
         text.style.maxHeight = text.scrollHeight + 'px';
      } else {
         accordionBtns.forEach(function (el) {
            el.classList.remove('_opacity');
         });
         text.style.maxHeight = null;
         btn.classList.remove('_open');
      }
   }
});
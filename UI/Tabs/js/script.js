document.addEventListener('DOMContentLoaded', function () {
   let tabBtns = document.querySelectorAll('.tabs__button');
   
   tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
         open(btn);
      });
   });

   function open(btn) {
      let tabsCont = document.querySelectorAll('.tabs__item');
      let tabId = btn.getAttribute('data-tab');
      let tab = document.querySelector(tabId);

      if (!btn.classList.contains('_active-btn')) {
         tabBtns.forEach(function (el) {
            el.classList.remove('_active-btn');
            el.classList.add('_opacity');
         });
         tabsCont.forEach(function (el) {
            el.classList.remove('_active-tab');
            el.style.maxHeight = 0 + 'px';
         });
         btn.classList.add('_active-btn');
         btn.classList.remove('_opacity');
         tab.classList.add('_active-tab');
      }
   }

   document.querySelector('.tabs__button').click();
});
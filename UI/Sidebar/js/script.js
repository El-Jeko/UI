document.addEventListener('DOMContentLoaded', function () {
   let btns = document.querySelectorAll('.article__button');
   let closePopBtn = document.querySelector('.popup__close-btn');

   btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
         openPopup();
         addImg(btn);
         addText(btn);
      });
   });

   function openPopup() {
      let popup = document.querySelector('.popup');

      popup.classList.add('_open');
      document.querySelector('body').classList.add('_overflow');
   }

   function addImg(btn) {
      let parent = btn.closest('article');
      let popupImg = document.querySelector('.popup__img');
      let parentPic = parent.querySelector('.article__pic');
      let popupPic = document.createElement('img');

      popupPic.classList.add('popup__pic');
      popupPic.src = parentPic.src;
      popupPic.alt = parentPic.alt;
      popupImg.appendChild(popupPic);
   }

   function addText(btn) {
      let parent = btn.closest('article');
      let popupDescription = document.querySelector('.popup__description');
      let parentTitle = parent.querySelector('.article__title');
      let popupTitle = document.createElement('h2');
      let popupText = document.createElement('p');

      popupTitle.classList.add('popup__title');
      popupTitle.textContent = parentTitle.textContent;

      popupText.classList.add('popup__text');
      if (btn.classList.contains('buy-btn')) {
         popupText.textContent = 'Try to look for this product in the shops of your city.';
      } else {
         popupText.textContent = 'If you want to learn more about this product - look for information on the Internet.';
      }

      popupDescription.appendChild(popupTitle);
      popupDescription.appendChild(popupText);
   }

   closePopBtn.addEventListener('click', function () {
      closePopup();
   });

   function closePopup() {
      let popup = document.querySelector('.popup');
      let popupBody = document.querySelector('.popup__body');
      let popupPic = popupBody.querySelector('.popup__pic');
      let popupTitle = popupBody.querySelector('.popup__title');
      let popupText = popupBody.querySelector('.popup__text');

      popup.classList.remove('_open');
      document.querySelector('body').classList.remove('_overflow');
      popupPic.remove();
      popupTitle.remove();
      popupText.remove();
   }
});
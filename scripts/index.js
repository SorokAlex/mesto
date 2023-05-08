import {initialCards, validationConfig} from './data.js';
import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';

//Создаем перемменные для работы с попап 'редактирования профиля'
const popUpEditProfile = document.querySelector('.popup_type_edit-profile');
const popUpFormEditProfile = document.querySelector('.popup__form_type_edit');
const editButton = document.querySelector('.profile__edit-btn');
const userName = document.querySelector('.profile__user-name');
const userJob = document.querySelector('.profile__user-job');
const nameInput = document.querySelector('#text-name');
const jobInput = document.querySelector('#text-job');

//Создаем пременные для работы с попап 'новое место'
const popUpAddPlaceCard = document.querySelector('.popup_type_add-place-card');
const popUpFormAddPlaceCard = document.querySelector('.popup__form_type_add');
const addButton = document.querySelector('.profile__add-btn');
const titleInput = document.querySelector('#text-title');
const linkInput = document.querySelector('#url');

//Создаем переменные для работы с попап 'открытие картинки'
const popUpFullSizePhoto = document.querySelector('.popup_type_full-size-photo');
const popUpPhoto =  document.querySelector('.popup__figure-photo');
const popUpPhotoCaption =  document.querySelector('.popup__figure-photo-caption');

//Создаем переменные для шаблона и сетки мест
const placesList = document.querySelector('.places-list');

//Создаем переменную для работы со всеми попапами
const popUps = document.querySelectorAll('.popup');

//Создаем переменную для работы с кнопкой закрытия попавпов
const closeButtons = document.querySelectorAll('.popup__close-btn');

//Функция создания карточки
const createPlace = (data) => {
  const card = new Card(data, '#place-template', handleFullSizePhoto);

  return card.generateCard();
};

//Функция добавления нового места в начало
const renderPlace = (placeCard) => {
  placesList.prepend(createPlace(placeCard));
};

//Открытие полноразмерного изображения
const handleFullSizePhoto = (photo) => {
    openPopUp(popUpFullSizePhoto);
    popUpPhoto.src = photo.link;
    popUpPhoto.alt = photo.name;
    popUpPhotoCaption.textContent = photo.name;
};

//Карточки в порядке массива
initialCards.forEach((placeCard) => {
  placesList.append(createPlace(placeCard));
});

//Функция открытия попапа
const openPopUp = (popUps) => {
  popUps.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscClosePopUp);
};

//Функция закрытия попапа
const closePopUp = (popUps) => {
  popUps.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscClosePopUp);
};

//Универсальное закрытие любого попапа (кнпка Х)
closeButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    const closestPopUp = evt.target.closest('.popup');
    closePopUp(closestPopUp);
  });
});

//Управление закрытием попапов (кнопка Esc)
const handleEscClosePopUp = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopUp = document.querySelector('.popup_opened');
    closePopUp(openedPopUp);
  }
};

//Закрытие попапа при (нажатие на overlay)
popUps.forEach((popUp) => {
  popUp.addEventListener('mousedown', (evt) => {
    if (evt.target === evt.currentTarget) {
      closePopUp(popUp);
    }
  });
});

//Функция открытия попапа редактирования профиля
editButton.addEventListener('click', () => {
openPopUp(popUpEditProfile);
nameInput.value = userName.textContent;
jobInput.value = userJob.textContent;
editProfileFormValidator.resetValidation();
});

//Функция сабмита для редактирования профиля
const handleFormSubmitProfile = (evt) => {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  closePopUp(popUpEditProfile);
};

//Функция открытия попапа добавления нового места
addButton.addEventListener('click', () => {
  openPopUp(popUpAddPlaceCard);
});

//Функция сабмита для создания нового места
const handleFormSubmitPlace = (evt) => {
  evt.preventDefault();
  renderPlace({
    name: titleInput.value,
    link: linkInput.value,
  });
  popUpFormAddPlaceCard.reset();
  addPlaceFormValidator.resetValidation();
  closePopUp(popUpAddPlaceCard);
};

const editProfileFormValidator = new FormValidator(
  validationConfig,
  popUpFormEditProfile
);
editProfileFormValidator.enableValidation();

const addPlaceFormValidator = new FormValidator(
  validationConfig,
  popUpFormAddPlaceCard
);
addPlaceFormValidator.enableValidation();


//Слушатели событий сохранения/отправки заполненной формы
popUpFormEditProfile.addEventListener('submit', handleFormSubmitProfile);
popUpFormAddPlaceCard.addEventListener('submit', handleFormSubmitPlace);

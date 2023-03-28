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
const placeTemplate = document.querySelector('#place-template').content;


//Создаем переменную для работы со всеми попапами
const popUps = document.querySelectorAll('.popup');

//Создаем переменную для работы с кнопкой закрытия попавпов
const closeButtons = document.querySelectorAll('.popup__close-btn');


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


//Объект валидации
const objectValidation = {
  inputSelector: '.popup__text',
  inputErrorClass: 'popup__text_type_error',
  submitButtonSelector: '.popup__submit-btn',
  submitButtonDisabledClass: 'popup__submit-btn_disabled',
};


//Сброс полей валидации
const resetValidation = (objectValidation) => {
  resetInput(objectValidation);
  resetSubmitButton(objectValidation);
};
const resetInput = (objectValidation) => {
  const inputList = document.querySelectorAll(objectValidation.inputSelector);
  inputList.forEach((inputElement) => {
    inputElement.classList.remove(objectValidation.inputErrorClass);
  });
};
const resetSubmitButton = (objectValidation) => {
  const submitButton = document.querySelectorAll(
    objectValidation.submitButtonSelector
  );
  submitButton.forEach((submitButton) => {
    submitButton.classList.add(objectValidation.submitButtonDisabledClass);
    submitButton.setAttribute('disabled', '');
  });
};

//Функция открытия попапа редактирования профиля
editButton.addEventListener('click', () => {
openPopUp(popUpEditProfile);
nameInput.value = userName.textContent;
jobInput.value = userJob.textContent;
resetValidation(objectValidation);
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
  resetValidation(objectValidation);
  closePopUp(popUpAddPlaceCard);
};

//Открытие полноразмерного изображения
const handleFullSizePhoto = (photo) => {
  photo.addEventListener('click', (evt) => {
    openPopUp(popUpFullSizePhoto);
    popUpPhoto.src = photo.src;
    popUpPhoto.alt = photo.alt;
    popUpPhotoCaption.textContent = evt.target.closest('.place-card').textContent;
  });
};

//Функция добавления нового места в начало
const renderPlace = (placeCard) => {
  placesList.prepend(createPlace(placeCard));
};

//Управление удалением карточки
const handleDeleteButtonPlace = (deleteButtonPlace) => {
  deleteButtonPlace.addEventListener('click', (evt) => {
    evt.target.closest('.place-card').remove();
  });
};

//Управление лайком карточки
const handleLikeButtonPlace = (likeButtonPlace) => {
  likeButtonPlace.addEventListener('click', (evt) => {
    evt.target.classList.toggle('place-card__like-btn_type_active');
  });
};

//Функция создания карточки
const createPlace = (place) => {
  const newPlace = placeTemplate.cloneNode(true);
  const deleteButtonPlace = newPlace.querySelector('.place-card__delete-btn');
  const likeButtonPlace =  newPlace.querySelector('.place-card__like-btn');
  const placeTitle = newPlace.querySelector('.place-card__title');
  const placePhoto = newPlace.querySelector('.place-card__photo');
  placeTitle.textContent = place.name;
  placePhoto.setAttribute('src', place.link);
  placePhoto.setAttribute('alt', `${place.name}`);

  handleDeleteButtonPlace(deleteButtonPlace);
  handleLikeButtonPlace(likeButtonPlace);
  handleFullSizePhoto(placePhoto);

  return newPlace;
};

//Карточки в порядке массива
initialCards.forEach((placeCard) => {
  placesList.append(createPlace(placeCard));
});

//Слушатели событий сохранения/отправки заполненной формы
popUpFormEditProfile.addEventListener('submit', handleFormSubmitProfile);
popUpFormAddPlaceCard.addEventListener('submit', handleFormSubmitPlace);

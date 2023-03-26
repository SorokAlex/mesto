// const initialCards = [
//   {
//     name: 'Карачаевск',
//     link: 'https://images.unsplash.com/photo-1588584922681-745a2223f72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fCVEMCVCQSVEMCVCMCVEMSU4MCVEMCVCMCVEMSU4NyVEMCVCMCVEMCVCNSVEMCVCMiVEMCVCRXxlbnwwfHwwfHw%3D&w=1000&q=80',
//   },
//   {
//     name: 'Гора Эльбрус',
//     link: 'https://images.unsplash.com/photo-1669809503782-733587336cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
//   },
//   {
//     name: 'Домбай',
//     link: 'https://images.unsplash.com/photo-1640957551924-d14bbd5686bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//   },
//   {
//     name: 'Ставропольский край',
//     link: 'https://images.unsplash.com/photo-1620554918659-3f64bce0ac8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//   },
//   {
//     name: 'Мыс Тобзина',
//     link: 'https://images.unsplash.com/photo-1629813366356-b0efcd428339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
//   },
//   {
//     name: 'Владивосток',
//     link: 'https://images.unsplash.com/photo-1634887042266-3651a54b9a69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//   },
// ];

//Создаем перемменные для работы с попап "редактирования профиля"
const popUpEditProfile = document.querySelector('.popup_type_edit-profile');
const popUpFormEditProfile = document.querySelector('.popup__form_type_edit');
const editButton = document.querySelector('.profile__edit-btn');
const userName = document.querySelector('.profile__user-name');
const userJob = document.querySelector('.profile__user-job');
const nameInput = document.querySelector('.popup__text_type_name');
const jobInput = document.querySelector('.popup__text_type_job');

//Создаем пременные для работы с попап "новое место"
const popUpAddPlaceCard = document.querySelector('.popup_type_add-place-card');
const popUpFormAddPlaceCard = document.querySelector('.popup__form_type_add');
const addButton = document.querySelector('.profile__add-btn');
const titleInput = document.querySelector('.popup__text_type_title');
const linkInput = document.querySelector('.popup__text_type_link');


//Создаем переменные для работы с попап "открытие картинки"
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
  popUps.classList.add("popup_opened");
};

//Функция закрытия попапа
const closePopUp = (popUps) => {
  popUps.classList.remove("popup_opened");
};

//Универсальное закрытие любого попапа
closeButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    const closestPopUp = evt.target.closest(".popup");
    closePopUp(closestPopUp);
  });
});

//Функция открытия попапа редактирования профиля
editButton.addEventListener('click', () => {
openPopUp(popUpEditProfile);
nameInput.value = userName.textContent;
jobInput.value = userJob.textContent;
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
  popUpFormAddPlaceCard.reset();
});

//Функция сабмита для создания нового места
const handleFormSubmitPlace = (evt) => {
  evt.preventDefault();
  renderPlace({
    name: titleInput.value,
    link: linkInput.value,
  });
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
  placePhoto.setAttribute('alt', `${place.alt}`);

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

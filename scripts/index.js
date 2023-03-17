let userName = document.querySelector('.profile__user-name');
let userJob = document.querySelector('.profile__user-job');
let nameInput = document.querySelector('.popup__text_type_name');
let jobInput = document.querySelector('.popup__text_type_job');
const editButton = document.querySelector('.profile__edit-btn');
const closeButton = document.querySelector('.popup__close-btn');
const popUp = document.querySelector('.popup');


function popUpOpen() {
    popUp.classList.add('popup_opened');
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
}
function popUpClose() {
  popUp.classList.remove('popup_opened');
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  userName.textContent = nameInput.value;
  userJob.textContent = jobInput.value;
  popUp.classList.remove('popup_opened');
}

editButton.addEventListener('click', popUpOpen);
closeButton.addEventListener('click', popUpClose);
popUp.addEventListener('submit', handleFormSubmit);

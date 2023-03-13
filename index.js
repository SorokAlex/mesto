
const userName = 'Жак-Ив Кусто';
const userJob = 'Исследователь океана';

const userNameElement = document.querySelector('.profile__user-name');
userNameElement.textContent = userName;

const userJobElement = document.querySelector('.profile__user-job');
userJobElement.textContent = userJob;

const userNameInput = document.querySelector('.popup__text_type_name');
userNameInput.value = userName;

const userJobInput = document.querySelector('.popup__text_type_job');
userJobInput.value = userJob;

const popUpOpen = document.querySelector('.profile__edit-btn');
const popUpClose = document.querySelector('.popup__close-btn');
const popUpSubmit = document.querySelector('.popup__submit-btn');
const popUp = document.querySelector('.popup');

popUpOpen.addEventListener('click', () => {
  popUp.classList.add('popup_opened');
})

popUpClose.addEventListener('click', () => {
  popUp.classList.remove('popup_opened');
  userName.textContent = nameInput;
  userJob.textContent = jobInput;
})

popUpSubmit.addEventListener('click', () => {
  popUp.classList.remove('popup_opened');
})



// Находим форму в DOM
let formElement = document.querySelector('.popup__form')// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__text_type_name')// Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector('.popup__text_type_job')// Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {
   evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameInput = document.querySelector('.popup__text_type_name').value;
    jobInput = document.querySelector('.popup__text_type_job').value;
    // Выберите элементы, куда должны быть вставлены значения полей
    const userName = document.querySelector('.profile__user-name');
    const userJob = document.querySelector('.profile__user-job');
    // Вставьте новые значения с помощью textContent
    userName.textContent = nameInput;
    userJob.textContent = jobInput;
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit,);

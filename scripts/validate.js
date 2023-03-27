const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit-btn',
  submitButtonDisabledClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-error',
};

const handleErrorShowing = (event, validationConfig) => {
  const input = event.target;
  const inputId = input.inputId;
  const errorElement = document.querySelector(`.${inputId}-error`);

  if (!input.validity.valid) {
    input.classList.add(validationConfig.inputErrorClass);
    errorElement.textContent = input.validationMessage;
  } else {
    input.classList.remove(validationConfig.inputErrorClass);
    errorElement.textContent = '';
  }
};

const toggleButtonState = (formElement, validationConfig) => {
  const submitButton = formElement.querySelector(
    validationConfig.submitButtonSelector
  );
  const isFormValid = formElement.checkValidity();
  submitButton.disabled = !isFormValid;
  submitButton.classList.toggle(
    validationConfig.submitButtonDisabledClass,
    !isFormValid
  );
};

const setInputListeners = (formElement, validationConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(validationConfig.inputSelector)
  );
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', (event) => {
      handleErrorShowing(event, validationConfig);
    });
  });
};

const enableValidation = (validationConfig) => {
  const formList = Array.from(
    document.querySelectorAll(validationConfig.formSelector)
  );
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    formElement.addEventListener('input', () => {
      toggleButtonState(formElement, validationConfig);
    });
    setInputListeners(formElement, validationConfig);
    toggleButtonState(formElement, validationConfig);
  });
};

enableValidation(validationConfig);
const initialCards = [
  {
    name: 'Карачаевск',
    link: 'https://images.unsplash.com/photo-1588584922681-745a2223f72c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fCVEMCVCQSVEMCVCMCVEMSU4MCVEMCVCMCVEMSU4NyVEMCVCMCVEMCVCNSVEMCVCMiVEMCVCRXxlbnwwfHwwfHw%3D&w=1000&q=80',
  },
  {
    name: 'Гора Эльбрус',
    link: 'https://images.unsplash.com/photo-1669809503782-733587336cc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    name: 'Домбай',
    link: 'https://images.unsplash.com/photo-1640957551924-d14bbd5686bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Ставропольский край',
    link: 'https://images.unsplash.com/photo-1620554918659-3f64bce0ac8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    name: 'Мыс Тобзина',
    link: 'https://images.unsplash.com/photo-1629813366356-b0efcd428339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
  },
  {
    name: 'Владивосток',
    link: 'https://images.unsplash.com/photo-1634887042266-3651a54b9a69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
];


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  submitButtonSelector: '.popup__submit-btn',
  submitButtonDisabledClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__text_type_error',
  errorClass: 'popup__text-error',
};

export {initialCards, validationConfig};

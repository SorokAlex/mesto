class Card {
  constructor(data, templateSelector, handleFullSizePhoto) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleFullSizePhoto = handleFullSizePhoto;
  };

  _getTemplate() {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.place-card')
    .cloneNode(true);

    return cardElement
  };

  generateCard() {
    this._cardElement = this._getTemplate();
    this._deleteButtonPlace = this._cardElement.querySelector('.place-card__delete-btn');
    this._likeButtonPlace =  this._cardElement.querySelector('.place-card__like-btn');
    this._placeTitle = this._cardElement.querySelector('.place-card__title');
    this._placePhoto = this._cardElement.querySelector('.place-card__photo');

    this._placeTitle.textContent = this._name;
    this._placePhoto.src = this._link;
    this._placePhoto.alt = `${this._name}`;

    this._setEventListeners();

    return this._cardElement;
  };

  _handleDeleteButtonPlace() {
    this._cardElement.remove();
  };

  _handleLikeButtonPlace() {
    this._likeButtonPlace.classList.toggle('place-card__like-btn_type_active');
  };

  _setEventListeners() {
    this._likeButtonPlace.addEventListener('click', () =>
      this._handleLikeButtonPlace()
    );
    this._deleteButtonPlace.addEventListener('click', () =>
      this._handleDeleteButtonPlace()
    );
    this._placePhoto.addEventListener('click', () =>
      this._handleFullSizePhoto({ link: this._link, name: this._name })
    );
  };
};

export {Card};

const showButton = document.querySelector('.card__button');
const showDiv = document.querySelector('.card__socialMedia');

showButton.addEventListener('click', () => {
    showDiv.classList.toggle('card__socialMedia-hidden');
})
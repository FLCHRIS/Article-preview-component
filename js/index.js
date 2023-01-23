const button = document.querySelector('.social-button');

button.addEventListener('click', () => {
    if(screen.availWidth >= 750){
        document.querySelector('.social__ctas').classList.toggle('social__ctas-show');
        console.log('aaa')
    }else {
        console.log('bbbb')
        document.querySelector('.social__ctas').classList.toggle('social__ctas-show');
        document.querySelector('.social__person').classList.toggle('social__person-hidden');
        document.querySelector('.card__social').classList.toggle('card__information-active');
    }
})
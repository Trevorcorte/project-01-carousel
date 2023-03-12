
const buttonsCarousel = document.querySelectorAll('.button')
const images = document.querySelectorAll('.image')

buttonsCarousel.forEach((button, index) => {
    button.addEventListener('click', () => {
       
        desactiveButtonSelect();

        selectButtonCarousel(button);

        hidingImage();

        seeImageBackground(index);
    })
})

function seeImageBackground(index) {
    images[index].classList.add('active');
}

function selectButtonCarousel(button) {
    button.classList.add('selecionado');
}

function hidingImage() {
    const imageActive = document.querySelector('.active');
    imageActive.classList.remove('active');
}

function desactiveButtonSelect() {
    const buttonSelect = document.querySelector('.selecionado');
    buttonSelect.classList.remove('selecionado');
}


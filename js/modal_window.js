
// модальное окно
const modal = document.querySelector('.modal-container');
const closeButton = document.querySelector('.close');
// const modalTriggers = document.querySelectorAll('#open');
const modalTriggers = document.querySelector('#open');

function openModal(){
    modal.classList.add('is-open');
}

function closeModel(){
    modal.classList.remove('is-open');
}

// modalTriggers.forEach((item) => {
//     item.addEventListener('click', openModal)
// })
modalTriggers.addEventListener('click', openModal)


const closeA = document.querySelector('.modal-button-1');

console.log(closeA)

closeA.addEventListener('click', (a) => {
        closeModel();
})

closeB.addEventListener('click', (a) => {
    closeModel();
})

modal.addEventListener('click', (a) => {
    if (a.target == modal){
        console.log(a.target);
        closeModel();
    }
})

closeButton.addEventListener('click', closeModel);


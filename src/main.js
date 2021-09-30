const btnAdd = document.getElementById('btn')
const deleteCards = document.getElementById('delete')
const addCard = document.getElementById('addCard')
const inputTitle = document.getElementById('input-title')
const inputDescription = document.getElementById('input-description')
const count = document.getElementById('count')

btnAdd.addEventListener('click', () => createNewCard())
deleteCards.addEventListener('click', () => deleteCard())

count.innerText = '0';

function createNewCard() {
    const newDiv = document.createElement('div')
    addCard.appendChild(newDiv)
    newDiv.innerHTML = informationCard(inputTitle.value, inputDescription.value)
    // clear data of inputs
    inputTitle.value = ''
    inputDescription.value = ''

    const newCard = document.querySelectorAll('.card__new')
    count.innerText = newCard.length;
}

function deleteCard() {
    count.innerText = '0';
    addCard.innerHTML = '';
}
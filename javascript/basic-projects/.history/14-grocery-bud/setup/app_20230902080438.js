// ****** SELECT ITEMS **********
const submitBtn = document.querySelector('.submit-btn')
const groceryList = document.querySelector('.grocery-list')
const groceryInput = document.querySelector('#grocery')
const alert = document.querySelector('.alert')
const groceryContainer = document.querySelector('.grocery-container')
const clearBtn = document.querySelector('.clear-Btn')


const addItem = (e) => {
    e.preventDefault()
    const value = groceryInput.value
    const id = new Date().getTime().toString()

    if (value !== '') {

    } else {
        console.log('hello')
    }

}

submitBtn.addEventListener('click', addItem)



// edit option

// ****** EVENT LISTENERS **********

// ****** FUNCTIONS **********

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

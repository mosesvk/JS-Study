//using selectors inside the element
// traversing the dom

const articles = document.querySelectorAll('.question')

articles.forEach(question => {
    const button = document.querySelectorAll('.question-btn')
    
    console.log(button)
})
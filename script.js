window.addEventListener('DOMContentLoaded', function() {

    let lastFirstname = document.querySelector('#lastFirstname')
    let lastFirstnamePlaceHolder = document.querySelector('#lastFirstname')[0].placeholder
    let email = document.querySelector('#email')
    let mailObject = document.querySelector('#mailObject')
    let mailContent = document.querySelector('#mailContent')
    let submitButton = document.querySelector('#submit')

    let lastFirstnameError = document.querySelector('#lastFirstnameError')
    let emailError = document.querySelector('#emailError')
    let mailObjectError = document.querySelector('#mailObjectError')
    let mailContentError = document.querySelector('#mailContentError')

    submitButton.addEventListener('click', function(event) {
        event.preventDefault()

        if (lastFirstname.value.length === 0) {
            lastFirstnamePlaceHolder = "Veuillez remplir ce champ."
            lastFirstnamePlaceHolder.style.setProperty("red")
        }
    })
})
window.addEventListener('DOMContentLoaded', function() {

    let lastFirstname = document.querySelector('#lastFirstname')
    let email = document.querySelector('#email')
    let mailObject = document.querySelector('#contact__title-input')
    let mailContent = document.querySelector('#contact__comment-input')
    let submitButton = document.querySelector('#submit')

    let emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]{2,}/

    let formIsIncorrect = 0

    submitButton.addEventListener('click', function(event) {

        if (lastFirstname.value.length === 0) {
            lastFirstname.style.border = "solid 2px red"
            formIsIncorrect += 1
        } else {
            lastFirstname.style.border = "none"
        }

        if (!email || email.value.length === 0 || !(email.value.match(emailRegex))) {
            email.style.border = "solid 2px red"
            formIsIncorrect += 1
        } else {
            email.style.border = "none"
        }

        if (!mailObject || mailObject.value.length === 0) {
            mailObject.style.border = "solid 2px red"
            formIsIncorrect += 1
        } else {
            mailObject.style.border = "none"
        }

        if (!mailContent || mailContent.value.length === 0) {
            mailContent.style.border = "solid 2px red"
            formIsIncorrect += 1
        } else {
            mailContent.style.border = "none"
        }

        if (formIsIncorrect === 4) {
            event.preventDefault()
        }
    })
})
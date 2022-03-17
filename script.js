window.addEventListener('DOMContentLoaded', function() {

    let lastFirstname = document.querySelector('#lastFirstname')
    let email = document.querySelector('#email')
    let mailObject = document.querySelector('#contact__title-input')
    let mailContent = document.querySelector('#contact__comment-input')
    let submitButton = document.querySelector('#submit')

    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    submitButton.addEventListener('click', function(event) {

        if (lastFirstname.value.length === 0) {
            lastFirstname.style.border = "solid 2px red"
            event.preventDefault()
        } else {
            lastFirstname.style.border = "none"
        }

        console.log(email.value.match(emailRegex))

        if (!email.value || email.value.length === 0 || email.value.match(emailRegex) === null) {
            email.style.border = "solid 2px red"
            event.preventDefault()
        } else {
            email.style.border = "none"
        }

        if (!mailObject || mailObject.value.length === 0) {
            mailObject.style.border = "solid 2px red"
            event.preventDefault()
        } else {
            mailObject.style.border = "none"
        }

        if (!mailContent || mailContent.value.length === 0) {
            mailContent.style.border = "solid 2px red"
            event.preventDefault()
        } else {
            mailContent.style.border = "none"
        }
    })
})
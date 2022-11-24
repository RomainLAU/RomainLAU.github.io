window.addEventListener('DOMContentLoaded', () => {
  const lastFirstname = document.querySelector('#lastFirstname');
  const email = document.querySelector('#email');
  const mailObject = document.querySelector('#contact__title-input');
  const mailContent = document.querySelector('#contact__comment-input');
  const submitButton = document.querySelector('#submit');

  const nameRegex =
    /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  submitButton.addEventListener('click', (event) => {
    if (
      lastFirstname.value.length === 0 ||
      !lastFirstname.value.match(nameRegex)
    ) {
      lastFirstname.style.borderColor = 'red';
      event.preventDefault();
    } else {
      lastFirstname.style.borderColor = '#529d44';
    }

    if (
      !email.value ||
      email.value.length === 0 ||
      email.value.match(emailRegex) === null
    ) {
      email.style.borderColor = 'red';
      event.preventDefault();
    } else {
      email.style.borderColor = '#529d44';
    }

    if (!mailObject || mailObject.value.length === 0) {
      mailObject.style.borderColor = 'red';
      event.preventDefault();
    } else {
      mailObject.style.borderColor = '#529d44';
    }

    if (!mailContent || mailContent.value.length === 0) {
      mailContent.style.borderColor = 'red';
      event.preventDefault();
    } else {
      mailContent.style.borderColor = '#529d44';
    }
  });
});

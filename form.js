window.addEventListener("DOMContentLoaded", () => {
  let lastFirstname = document.querySelector("#lastFirstname");
  let email = document.querySelector("#email");
  let mailObject = document.querySelector("#contact__title-input");
  let mailContent = document.querySelector("#contact__comment-input");
  let submitButton = document.querySelector("#submit");

  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  submitButton.addEventListener("click", (event) => {
    if (
      lastFirstname.value.length === 0 &&
      parseInt(lastFirstname.value) != NaN
    ) {
      lastFirstname.style.borderColor = "red";
      event.preventDefault();
    } else {
      lastFirstname.style.borderColor = "rgb(255, 174, 0)";
    }

    if (
      !email.value ||
      email.value.length === 0 ||
      email.value.match(emailRegex) === null
    ) {
      email.style.borderColor = "red";
      event.preventDefault();
    } else {
      email.style.borderColor = "rgb(255, 174, 0)";
    }

    if (!mailObject || mailObject.value.length === 0) {
      mailObject.style.borderColor = "red";
      event.preventDefault();
    } else {
      mailObject.style.borderColor = "rgb(255, 174, 0)";
    }

    if (!mailContent || mailContent.value.length === 0) {
      mailContent.style.borderColor = "red";
      event.preventDefault();
    } else {
      mailContent.style.borderColor = "rgb(255, 174, 0)";
    }
  });
});

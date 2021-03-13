const subscribe = document.querySelector(".form-request__button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".modal__btn-close");
const input = document.querySelector("#email-input");
const submitButton = document.querySelector("#submit-button");
const doneButton = document.querySelector(".form-request__button-done-wrap");

const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return re.test(email);
}

input.addEventListener("input", (event) => {
    const { value } = event.target;
    const isValid = !!value.length && validateEmail(value);
    
    if (isValid) {
        submitButton.disabled = false;
        input.style.border = 'none';
    } else {
        submitButton.disabled = true;
        input.style.border = '1px solid red';
    }
});

const sendForm = () => {
    modal.style.display = "block";
    overlay.style.display = "block";
    input.style.border = "none";
}

subscribe.addEventListener("click", (event) => {
    submitButton.style.display = "none";
    doneButton.style.display = "inline-block";
    sendForm();
    event.preventDefault();
    document.body.style.overflowY = 'hidden';
})

const closeModal = () => {
    modal.style.display = "none";
    overlay.style.display = "none";
    let email = document.querySelector(".form-request__input");
    email.value = '';
    submitButton.style.display = "inline-block";
    doneButton.style.display = "none";
    submitButton.disabled = true;
}

btnClose.addEventListener("click", ()=> {
    closeModal();
})

overlay.addEventListener("click", () => {
    if(modal) {
        closeModal();
    }
})
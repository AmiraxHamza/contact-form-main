// GENERAL
const requiredMsgs = document.querySelectorAll(".requiredMsg");

const form = document.getElementById("form");
const inputs = document.querySelectorAll("input");

// INDIVIDUAL
const fNameMsg = document.getElementById("fNameRequiredMsg");
const lNameMsg = document.getElementById("lNameRequiredMsg");
const emailMsg = document.getElementById("emailRequiredMsg");
const queryMsg = document.getElementById("queryRequiredMsg");
const textFieldMsg = document.getElementById("textFieldRequiredMsg");
const checkboxMsg = document.getElementById("checkboxRequiredMsg");
const invalidEmailMsg = document.querySelector(".invalid-email");

// INPUT BUTTON
const fName = document.getElementById("first-name");
const lName = document.getElementById("last-name");
const email = document.getElementById("email-input");
const checkbox = document.getElementById("consent-checkbox");
const textField = document.getElementById("message");
const radioInput = document.querySelectorAll('input[type="radio"]');
// const radioInput = document.querySelectorAll(".query-type");

// SUBMIT
const submit = document.querySelector(".submit-button input");

function isValidEmail() {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
}

function showSuccessMsg() {
  const successMsg = document.getElementById("successMsg");
  successMsg.style.display = "flex";
  setTimeout(() => {
    successMsg.style.display = "none";
  }, 10000);
}

submit.addEventListener("click", function (e) {
  const queryBtn = document.querySelector('input[type="radio"]:checked');
  const checkboxBtn = document.querySelector('input[type="checkbox"]:checked');
  let isValid = true;

  requiredMsgs.forEach((msg) => {
    const field = msg.previousElementSibling;
    if (field.tagName === "INPUT" || field.tagName === "TEXTAREA") {
      if (field.value.trim() === "") {
        msg.style.display = "block";
        msg.style.paddingBottom = "1rem";
        field.style.borderColor = "#d73c3cff";
        isValid = false;
      } else {
        msg.style.display = "none";
        field.style.borderColor = "";
      }
    }
  });

  if (!isValidEmail() && email.value.trim() !== "") {
    invalidEmailMsg.style.display = "block";
    invalidEmailMsg.style.paddingBottom = "1rem";
    email.style.borderColor = "#d73c3cff";
    isValid = false;
  } else {
    invalidEmailMsg.style.display = "none";
    email.style.borderColor = "";
  }

  if (!queryBtn) {
    queryMsg.style.display = "block";
    queryMsg.style.paddingTop = "1rem";
    queryMsg.style.paddingBottom = "1rem";
    isValid = false;
  } else {
    queryMsg.style.display = "none";
  }

  if (!checkboxBtn) {
    checkboxMsg.style.display = "block";
    checkboxMsg.style.paddingBottom = "1rem";
    isValid = false;
  } else {
    checkboxMsg.style.display = "none";
  }

  if (!isValid) {
    e.preventDefault();
  } else {
    showSuccessMsg();
  }
});

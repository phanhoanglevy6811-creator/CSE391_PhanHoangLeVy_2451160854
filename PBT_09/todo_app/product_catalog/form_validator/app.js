const registerForm = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const phoneInput = document.querySelector("#phone");

const submitBtn = document.querySelector("#submitBtn");


// ======================
// NAME VALIDATION
// ======================

function validateName() {

    const value = nameInput.value.trim();

    const icon = document.querySelector("#nameIcon");

    const error = document.querySelector("#nameError");

    if (value.length >= 2 && value.length <= 50) {

        icon.textContent = "✅";

        error.textContent = "";

        return true;
    }

    icon.textContent = "❌";

    error.textContent =
        "Name must be 2-50 characters";

    return false;
}


// ======================
// EMAIL VALIDATION
// ======================

function validateEmail() {

    const value = emailInput.value.trim();

    const error = document.querySelector("#emailError");

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(value)) {

        error.textContent = "";

        return true;
    }

    error.textContent =
        "Invalid email format";

    return false;
}


// ======================
// PASSWORD STRENGTH
// ======================

function validatePassword() {

    const value = passwordInput.value;

    const fill =
        document.querySelector("#strengthFill");

    const text =
        document.querySelector("#strengthText");


    // WEAK
    if (value.length < 8) {

        fill.style.width = "33%";

        fill.style.background = "crimson";

        text.textContent = "Weak Password";

        return false;
    }


    // MEDIUM
    const mediumRegex =
        /^(?=.*[A-Za-z])(?=.*\d).+$/;

    if (
        value.length >= 8 &&
        mediumRegex.test(value)
    ) {

        fill.style.width = "66%";

        fill.style.background = "orange";

        text.textContent = "Medium Password";
    }


    // STRONG
    const strongRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

    if (
        value.length >= 8 &&
        strongRegex.test(value)
    ) {

        fill.style.width = "100%";

        fill.style.background = "limegreen";

        text.textContent = "Strong Password";

        return true;
    }

    return false;
}


// ======================
// CONFIRM PASSWORD
// ======================

function validateConfirmPassword() {

    const error =
        document.querySelector("#confirmError");

    if (
        confirmInput.value === passwordInput.value &&
        confirmInput.value !== ""
    ) {

        error.textContent = "";

        return true;
    }

    error.textContent =
        "Passwords do not match";

    return false;
}


// ======================
// PHONE VALIDATION
// ======================

function formatPhone(value) {

    value = value.replace(/\D/g, "");

    value = value.substring(0, 10);


    if (value.length > 7) {

        return `${value.substring(0,4)}-${value.substring(4,7)}-${value.substring(7)}`;
    }

    if (value.length > 4) {

        return `${value.substring(0,4)}-${value.substring(4)}`;
    }

    return value;
}


function validatePhone() {

    phoneInput.value =
        formatPhone(phoneInput.value);

    const error =
        document.querySelector("#phoneError");

    const digits =
        phoneInput.value.replace(/\D/g, "");

    if (digits.length === 10) {

        error.textContent = "";

        return true;
    }

    error.textContent =
        "Phone must contain 10 digits";

    return false;
}


// ======================
// CHECK FORM VALID
// ======================

function checkFormValid() {

    const valid =
        validateName() &&
        validateEmail() &&
        validatePassword() &&
        validateConfirmPassword() &&
        validatePhone();

    submitBtn.disabled = !valid;
}


// ======================
// EVENTS
// ======================

nameInput.addEventListener("input", checkFormValid);

emailInput.addEventListener("input", checkFormValid);

passwordInput.addEventListener("input", checkFormValid);

confirmInput.addEventListener("input", checkFormValid);

phoneInput.addEventListener("input", checkFormValid);


// ======================
// SUBMIT FORM
// ======================

registerForm.addEventListener("submit", function(e) {

    e.preventDefault();


    const modalOverlay =
        document.querySelector("#modalOverlay");

    const modalContent =
        document.querySelector("#modalContent");


    modalContent.innerHTML = `
        <p><strong>Name:</strong>
            ${nameInput.value}
        </p>

        <p><strong>Email:</strong>
            ${emailInput.value}
        </p>

        <p><strong>Phone:</strong>
            ${phoneInput.value}
        </p>
    `;


    modalOverlay.classList.remove("hidden");
});


// ======================
// CLOSE MODAL
// ======================

document
    .querySelector("#closeModal")
    .addEventListener("click", function() {

        document
            .querySelector("#modalOverlay")
            .classList.add("hidden");
});
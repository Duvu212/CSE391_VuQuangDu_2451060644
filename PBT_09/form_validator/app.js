const form = document.querySelector("#registerForm");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmInput = document.querySelector("#confirmPassword");
const phoneInput = document.querySelector("#phone");

const nameMsg = document.querySelector("#nameMsg");
const emailMsg = document.querySelector("#emailMsg");
const passwordMsg = document.querySelector("#passwordMsg");
const confirmMsg = document.querySelector("#confirmMsg");
const phoneMsg = document.querySelector("#phoneMsg");

const strengthBar = document.querySelector("#strengthBar");
const submitBtn = document.querySelector("#submitBtn");

const validState = {
    name: false,
    email: false,
    password: false,
    confirm: false,
    phone: false
};

function setMessage(element, message, isValid) {
    element.textContent = message;
    element.className = isValid ? "valid" : "invalid";
}

function validateName() {
    const value = nameInput.value.trim();

    if (value.length >= 2 && value.length <= 50) {
        setMessage(nameMsg, "✅ Tên hợp lệ", true);
        validState.name = true;
    } else {
        setMessage(nameMsg, "❌ Tên phải từ 2 đến 50 ký tự", false);
        validState.name = false;
    }

    updateSubmitButton();
}

function validateEmail() {
    const value = emailInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(value)) {
        setMessage(emailMsg, "✅ Email hợp lệ", true);
        validState.email = true;
    } else {
        setMessage(emailMsg, "❌ Email chưa đúng định dạng", false);
        validState.email = false;
    }

    updateSubmitButton();
}

function validatePassword() {
    const value = passwordInput.value;

    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[^A-Za-z0-9]/.test(value);

    if (value.length < 8) {
        passwordMsg.textContent = "Yếu: mật khẩu dưới 8 ký tự";
        passwordMsg.className = "invalid";
        strengthBar.style.width = "33%";
        strengthBar.style.background = "red";
        validState.password = false;
    } else if (hasLower && hasNumber && !hasUpper && !hasSpecial) {
        passwordMsg.textContent = "Trung bình: có chữ và số";
        passwordMsg.className = "valid";
        strengthBar.style.width = "66%";
        strengthBar.style.background = "orange";
        validState.password = true;
    } else if (hasUpper && hasLower && hasNumber && hasSpecial) {
        passwordMsg.textContent = "Mạnh: mật khẩu rất tốt";
        passwordMsg.className = "valid";
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
        validState.password = true;
    } else {
        passwordMsg.textContent = "Trung bình: nên thêm chữ hoa, số hoặc ký tự đặc biệt";
        passwordMsg.className = "valid";
        strengthBar.style.width = "66%";
        strengthBar.style.background = "orange";
        validState.password = true;
    }

    validateConfirm();
    updateSubmitButton();
}

function validateConfirm() {
    if (confirmInput.value !== "" && confirmInput.value === passwordInput.value) {
        setMessage(confirmMsg, "✅ Mật khẩu khớp", true);
        validState.confirm = true;
    } else {
        setMessage(confirmMsg, "❌ Mật khẩu chưa khớp", false);
        validState.confirm = false;
    }

    updateSubmitButton();
}

function formatPhone(value) {
    const digits = value.replace(/\D/g, "").slice(0, 10);

    if (digits.length <= 4) {
        return digits;
    }

    if (digits.length <= 7) {
        return digits.slice(0, 4) + "-" + digits.slice(4);
    }

    return digits.slice(0, 4) + "-" + digits.slice(4, 7) + "-" + digits.slice(7);
}

function validatePhone() {
    phoneInput.value = formatPhone(phoneInput.value);

    const digits = phoneInput.value.replace(/\D/g, "");

    if (digits.length === 10) {
        setMessage(phoneMsg, "✅ Số điện thoại hợp lệ", true);
        validState.phone = true;
    } else {
        setMessage(phoneMsg, "❌ Số điện thoại phải đủ 10 chữ số", false);
        validState.phone = false;
    }

    updateSubmitButton();
}

function updateSubmitButton() {
    const allValid = Object.values(validState).every(value => value === true);
    submitBtn.disabled = !allValid;
}

function showSuccessModal() {
    const modal = document.createElement("div");
    modal.className = "modal";

    const content = document.createElement("div");
    content.className = "modal-content";

    const title = document.createElement("h2");
    title.textContent = "Đăng ký thành công!";

    const info = document.createElement("p");
    info.textContent = `Tên: ${nameInput.value} | Email: ${emailInput.value} | SĐT: ${phoneInput.value}`;

    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Đóng";
    closeBtn.addEventListener("click", () => modal.remove());

    content.appendChild(title);
    content.appendChild(info);
    content.appendChild(closeBtn);

    modal.appendChild(content);
    document.body.appendChild(modal);
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);
confirmInput.addEventListener("input", validateConfirm);
phoneInput.addEventListener("input", validatePhone);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    showSuccessModal();
});
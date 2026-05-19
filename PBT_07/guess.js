const secretNumber = Math.floor(Math.random() * 100) + 1;
const guessedNumbers = [];

let attempts = 0;
const maxAttempts = 7;
let isWin = false;

alert("Chào mừng bạn đến với game Đoán Số!\nHãy đoán một số từ 1 đến 100.");

while (attempts < maxAttempts) {
    const input = prompt(`Lần đoán ${attempts + 1}/${maxAttempts}: Nhập số từ 1 đến 100`);

    if (input === null) {
        alert("Bạn đã thoát game!");
        break;
    }

    const guess = Number(input);

    if (!Number.isInteger(guess) || guess < 1 || guess > 100) {
        alert("Input không hợp lệ! Vui lòng nhập số nguyên từ 1 đến 100.");
        continue;
    }

    let isDuplicate = false;

    for (let i = 0; i < guessedNumbers.length; i++) {
        if (guessedNumbers[i] === guess) {
            isDuplicate = true;
            break;
        }
    }

    if (isDuplicate) {
        alert("Bạn đã đoán số này rồi!");
        continue;
    }

    guessedNumbers.push(guess);
    attempts++;

    if (guess === secretNumber) {
        alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
        isWin = true;
        break;
    } else if (guess < secretNumber) {
        alert("Cao hơn!");
    } else {
        alert("Thấp hơn!");
    }
}

if (!isWin && attempts >= maxAttempts) {
    alert(`Bạn đã hết lượt! Đáp án đúng là ${secretNumber}.`);
}
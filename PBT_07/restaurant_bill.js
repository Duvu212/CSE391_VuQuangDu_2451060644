const items = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 },
];

const day = "Wednesday";
const hasTip = true;

let subtotal = 0;

for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].quantity;
}

let discountRate = 0;

if (subtotal > 1000000) {
    discountRate = 0.15;
} else if (subtotal > 500000) {
    discountRate = 0.10;
}

if (day === "Wednesday") {
    discountRate += 0.05;
}

const discountAmount = subtotal * discountRate;
const afterDiscount = subtotal - discountAmount;

const vatRate = 0.08;
const vatAmount = afterDiscount * vatRate;

const tipRate = hasTip ? 0.05 : 0;
const tipAmount = afterDiscount * tipRate;

const total = afterDiscount + vatAmount + tipAmount;

function formatMoney(number) {
    return number.toLocaleString("vi-VN") + "đ";
}

console.log("╔════════════════════════════════════════════╗");
console.log("║              HÓA ĐƠN NHÀ HÀNG             ║");
console.log("╠════════════════════════════════════════════╣");

for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const lineTotal = item.price * item.quantity;

    console.log(
        `║ ${i + 1}. ${item.name.padEnd(10)} x${String(item.quantity).padEnd(3)} @${formatMoney(item.price).padEnd(10)} = ${formatMoney(lineTotal).padEnd(10)} ║`
    );
}

console.log("╠════════════════════════════════════════════╣");
console.log(`║ Tổng cộng:              ${formatMoney(subtotal).padStart(15)} ║`);
console.log(`║ Giảm giá (${discountRate * 100}%):        ${formatMoney(discountAmount).padStart(15)} ║`);
console.log(`║ VAT (8%):               ${formatMoney(vatAmount).padStart(15)} ║`);
console.log(`║ Tip (${tipRate * 100}%):              ${formatMoney(tipAmount).padStart(15)} ║`);
console.log("╠════════════════════════════════════════════╣");
console.log(`║ THANH TOÁN:              ${formatMoney(total).padStart(14)} ║`);
console.log("╚════════════════════════════════════════════╝");
# PBT07 - JavaScript Basics

## PHẦN A — KIỂM TRA ĐỌC HIỂU

---

## A1 — var / let / const

### Đoạn 1

```javascript
console.log(x);
var x = 5;
```

**Dự đoán:** `undefined`

**Giải thích:**  
`var` bị hoisting, nghĩa là biến `x` được đưa lên đầu scope nhưng giá trị chưa được gán.  
Vì vậy khi `console.log(x)` chạy, `x` tồn tại nhưng đang là `undefined`.

---

### Đoạn 2

```javascript
console.log(y);
let y = 10;
```

**Dự đoán:** Lỗi `ReferenceError`

**Giải thích:**  
`let` cũng được hoisting nhưng nằm trong **Temporal Dead Zone**, nên không thể truy cập trước khi khai báo.

---

### Đoạn 3

```javascript
const z = 15;
z = 20;
console.log(z);
```

**Dự đoán:** Lỗi `TypeError`

**Giải thích:**  
`const` không cho phép gán lại giá trị mới.

---

### Đoạn 4

```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
```

**Dự đoán:** `[1, 2, 3, 4]`

**Giải thích:**  
`const` không cho gán lại biến, nhưng nếu biến là array/object thì vẫn có thể thay đổi nội dung bên trong.

---

### Đoạn 5

```javascript
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
```

**Dự đoán:**

```txt
Trong block: 2
Ngoài block: 1
```

**Giải thích:**  
`let` có block scope. Biến `a` bên trong `{}` là biến khác với biến `a` bên ngoài.

---

## A2 — Data Types & Coercion

```javascript
console.log(typeof null);              // object
console.log(typeof undefined);         // undefined
console.log(typeof NaN);               // number
console.log("5" + 3);                  // "53"
console.log("5" - 3);                  // 2
console.log("5" * "3");                // 15
console.log(true + true);              // 2
console.log([] + []);                  // ""
console.log([] + {});                  // "[object Object]"
console.log({} + []);                  // "[object Object]" hoặc 0 tùy môi trường chạy
```

**Giải thích:**

- `"5" + 3` ra `"53"` vì toán tử `+` khi gặp chuỗi sẽ nối chuỗi.
- `"5" - 3` ra `2` vì toán tử `-` bắt buộc chuyển về số để tính toán.

---

## A3 — So sánh `==` và `===`

```javascript
console.log(5 == "5");                // true
console.log(5 === "5");               // false
console.log(null == undefined);       // true
console.log(null === undefined);      // false
console.log(NaN == NaN);              // false
console.log(0 == false);              // true
console.log(0 === false);             // false
console.log("" == false);             // true
```

**Nên dùng:** `===`

**Lý do:**  
`===` so sánh cả giá trị và kiểu dữ liệu, giúp tránh lỗi do JavaScript tự động ép kiểu.

---

## A4 — Truthy & Falsy

Các giá trị **falsy** trong JavaScript:

```txt
false
0
-0
0n
""
null
undefined
NaN
```

Dự đoán:

```javascript
if ("0") console.log("A");       // In
if ("") console.log("B");        // Không in
if ([]) console.log("C");        // In
if ({}) console.log("D");        // In
if (null) console.log("E");      // Không in
if (0) console.log("F");         // Không in
if (-1) console.log("G");        // In
if (" ") console.log("H");       // In
```

**Giải thích:**  
Chuỗi rỗng `""` là falsy, nhưng chuỗi có khoảng trắng `" "` là truthy.  
Array `[]` và object `{}` cũng là truthy.

---

## A5 — Template Literals

### Cách 1

```javascript
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
```

### Cách 2

```javascript
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
```

### Cách 3

```javascript
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;
```

---

# PHẦN C — SUY LUẬN

## C1 — Debug JavaScript

Code ban đầu có các lỗi:

1. Không kiểm tra `giaBan` có phải số hay không.
2. Không kiểm tra `phanTramGiam` có phải số hay không.
3. Thiếu dấu `;`, tuy không bắt buộc nhưng nên có.
4. Dùng `if (giaSauGiam = 0)` là gán giá trị, không phải so sánh.
5. Nên dùng `===` thay vì `=`.
6. Test truyền `"100000"` là string, cần truyền number hoặc kiểm tra input.
7. Dùng `var i` trong vòng lặp với `setTimeout` sẽ in ra cùng một giá trị cuối.
8. Nên dùng `let i` để mỗi vòng lặp có scope riêng.

Code đã sửa:

```javascript
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    if (typeof giaBan !== "number" || typeof phanTramGiam !== "number") {
        return "Input không hợp lệ";
    }

    if (giaBan < 0) {
        return "Giá bán không hợp lệ";
    }

    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "Phần trăm giảm không hợp lệ";
    }

    const giamGia = giaBan * phanTramGiam / 100;
    const giaSauGiam = giaBan - giamGia;

    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }

    return giaSauGiam;
}

const gia = tinhGiaGiamGia(100000, 20);
console.log("Giá sau giảm: " + gia + "đ");

const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2);

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
```

**Giải thích lỗi ẩn:**

Khi dùng `var i`, biến `i` có function scope.  
Sau khi vòng lặp chạy xong, `i` đã bằng `5`.  
Lúc `setTimeout` chạy, nó dùng chung biến `i`, nên sẽ in ra `Item 5` nhiều lần.

Khi dùng `let i`, mỗi vòng lặp có một biến `i` riêng, nên kết quả đúng là:

```txt
Item 0
Item 1
Item 2
Item 3
Item 4
```

---

## C2 — Bài toán thực tế

Câu C2 được làm trong file: restaurant_bill.js
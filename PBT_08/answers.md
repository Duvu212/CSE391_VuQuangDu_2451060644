# PBT08 - JavaScript Functions, Arrays & Objects

## PHẦN A — KIỂM TRA ĐỌC HIỂU

---

## Câu A1 — Function Declaration vs Expression vs Arrow

### Cách 1: Function Declaration

```javascript
function tinhThueBaoHiem(luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;

  return {
    thuong: thue,
    thuc_nhan: luong - thue,
  };
}
```

### Cách 2: Function Expression

```javascript
const tinhThueBaoHiem2 = function (luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;

  return {
    thuong: thue,
    thuc_nhan: luong - thue,
  };
};
```

### Cách 3: Arrow Function

```javascript
const tinhThueBaoHiem3 = (luong) => {
  const thue = luong > 11000000 ? luong * 0.1 : 0;

  return {
    thuong: thue,
    thuc_nhan: luong - thue,
  };
};
```

### Khác nhau về hoisting

Function Declaration được hoisting nên có thể gọi trước khi khai báo.

```javascript
console.log(tinhThueBaoHiem(12000000));

function tinhThueBaoHiem(luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return {
    thuong: thue,
    thuc_nhan: luong - thue,
  };
}
```

Function Expression và Arrow Function được gán vào biến `const`, nên không thể gọi trước khi khai báo.

```javascript
console.log(tinhThueBaoHiem2(12000000)); // Lỗi

const tinhThueBaoHiem2 = function (luong) {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return {
    thuong: thue,
    thuc_nhan: luong - thue,
  };
};
```

```javascript
console.log(tinhThueBaoHiem3(12000000)); // Lỗi

const tinhThueBaoHiem3 = (luong) => {
  const thue = luong > 11000000 ? luong * 0.1 : 0;
  return {
    thuong: thue,
    thuc_nhan: luong - thue,
  };
};
```

---

## Câu A2 — Scope & Closure

### Đoạn 1

Output:

```javascript
1;
2;
3;
2;
2;
```

Giải thích:

Biến `count` nằm trong hàm `counter`. Các hàm `increment`, `decrement`, `getCount` vẫn nhớ và truy cập được biến `count`. Đây gọi là closure.

- Lần 1 tăng từ 0 lên 1
- Lần 2 tăng từ 1 lên 2
- Lần 3 tăng từ 2 lên 3
- Sau đó giảm từ 3 xuống 2
- `getCount()` lấy giá trị hiện tại là 2

### Đoạn 2

Output:

```javascript
var: 3
var: 3
var: 3
let: 0
let: 1
let: 2
```

Giải thích:

`var` có function scope nên cả 3 lần `setTimeout` dùng chung một biến `i`. Khi callback chạy thì vòng lặp đã kết thúc, lúc đó `i = 3`.

`let` có block scope nên mỗi vòng lặp tạo ra một biến `j` riêng. Vì vậy kết quả lần lượt là 0, 1, 2.

---

## Câu A3 — Array Methods

```javascript
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Lấy các số chẵn
const evenNums = nums.filter((num) => num % 2 === 0);

// 2. Nhân mỗi số với 3
const multiplied = nums.map((num) => num * 3);

// 3. Tính tổng tất cả
const total = nums.reduce((sum, num) => sum + num, 0);

// 4. Tìm số đầu tiên > 7
const firstGreaterThan7 = nums.find((num) => num > 7);

// 5. Kiểm tra CÓ số > 10 không
const hasGreaterThan10 = nums.some((num) => num > 10);

// 6. Kiểm tra TẤT CẢ đều > 0
const allPositive = nums.every((num) => num > 0);

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
const descriptions = nums.map(
  (num) => `Số ${num} là ${num % 2 === 0 ? "chẵn" : "lẻ"}`,
);

// 8. Đảo ngược mảng không mutate gốc
const reversed = [...nums].reverse();
```

---

## Câu A4 — Object Destructuring & Spread

```javascript
const product = {
  name: "iPhone 16",
  price: 25990000,
  specs: { ram: 8, storage: 256, color: "Titan" },
};

const {
  name,
  price,
  specs: { ram, color },
} = product;
console.log(name, price, ram, color);
```

Output:

```javascript
iPhone 16 25990000 8 Titan
```

Dòng này:

```javascript
console.log(specs);
```

Sẽ bị lỗi vì `specs` không được tạo thành biến riêng. Ta chỉ lấy `ram` và `color` bên trong `specs`.

Phần spread:

```javascript
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price);
console.log(updated.sale);
console.log(product.price);
```

Output:

```javascript
23990000;
true;
25990000;
```

Giải thích:

`updated` là object mới. Giá `price` trong `updated` đổi thành `23990000`, thêm `sale: true`, còn object gốc `product` không đổi.

Phần spread gotcha:

```javascript
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram);
```

Output:

```javascript
16;
```

Giải thích:

Spread chỉ copy nông. Object con `specs` vẫn dùng chung vùng nhớ giữa `copy` và `product`. Vì vậy sửa `copy.specs.ram` thì `product.specs.ram` cũng bị đổi.

---

# PHẦN C — SUY LUẬN

## Câu C1 — Refactor Code

```javascript
const processOrders = (orders) =>
  orders
    .filter((order) => order.status === "completed" && order.total > 100000)
    .map(({ id, customer, total }) => {
      const discount = total * 0.1;
      return {
        id,
        customer,
        total,
        discount,
        finalTotal: total - discount,
      };
    })
    .sort((a, b) => b.finalTotal - a.finalTotal);
```

---

## Câu C2 — Thiết kế API miniArray

```javascript
const miniArray = {
  map(arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      result.push(fn(arr[i], i, arr));
    }

    return result;
  },

  filter(arr, fn) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }

    return result;
  },

  reduce(arr, fn, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < arr.length; i++) {
      accumulator = fn(accumulator, arr[i], i, arr);
    }

    return accumulator;
  },
};

console.log(miniArray.map([1, 2, 3], (x) => x * 2));
console.log(miniArray.filter([1, 2, 3, 4], (x) => x > 2));
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0));
```

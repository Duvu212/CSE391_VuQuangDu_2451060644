console.log("===== A1: var / let / const =====");

console.log("\n--- Đoạn 1: var hoisting ---");
console.log(x);
var x = 5;

console.log("\n--- Đoạn 2: let TDZ ---");
try {
    console.log(y);
    let y = 10;
} catch (error) {
    console.log("Lỗi:", error.message);
}

console.log("\n--- Đoạn 3: const gán lại ---");
try {
    const z = 15;
    z = 20;
    console.log(z);
} catch (error) {
    console.log("Lỗi:", error.message);
}

console.log("\n--- Đoạn 4: const array ---");
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

console.log("\n--- Đoạn 5: block scope ---");
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);

console.log("\n===== A2: Data Types & Coercion =====");

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof NaN);
console.log("5" + 3);
console.log("5" - 3);
console.log("5" * "3");
console.log(true + true);
console.log([] + []);
console.log([] + {});
console.log({} + []);

console.log("\n===== A3: == vs === =====");

console.log(5 == "5");
console.log(5 === "5");
console.log(null == undefined);
console.log(null === undefined);
console.log(NaN == NaN);
console.log(0 == false);
console.log(0 === false);
console.log("" == false);

console.log("\n===== A4: Truthy & Falsy =====");

if ("0") console.log("A");
if ("") console.log("B");
if ([]) console.log("C");
if ({}) console.log("D");
if (null) console.log("E");
if (0) console.log("F");
if (-1) console.log("G");
if (" ") console.log("H");
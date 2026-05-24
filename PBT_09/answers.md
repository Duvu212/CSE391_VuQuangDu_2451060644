# PBT09 - DOM Manipulation & Events

## PHẦN A — KIỂM TRA ĐỌC HIỂU

---

## Câu A1 — DOM Tree

DOM tree:

div#app
├── header
│ ├── h1
│ │ └── "Todo App"
│ └── nav
│ ├── a.active
│ │ └── "All"
│ ├── a
│ │ └── "Active"
│ └── a
│ └── "Completed"
└── main
├── form#todoForm
│ ├── input#todoInput
│ └── button
│ └── "Add"
└── ul#todoList
├── li.todo-item
│ └── "Learn HTML"
└── li.todo-item.completed
└── "Learn CSS"

### QuerySelector

Chọn thẻ h1:

```js
document.querySelector("h1");

Chọn input trong form:

document.querySelector("#todoForm input");

Chọn tất cả .todo-item:

document.querySelectorAll(".todo-item");

Chọn link đang active:

document.querySelector("nav a.active");

Chọn <li> đầu tiên trong #todoList:

document.querySelector("#todoList li:first-child");

Chọn tất cả <a> bên trong <nav>:

document.querySelectorAll("nav a");
Câu A2 — innerHTML vs textContent

innerHTML dùng để lấy hoặc thay đổi nội dung HTML bên trong một phần tử. Nếu chuỗi có chứa thẻ HTML, trình duyệt sẽ hiểu và render thẻ đó.

Ví dụ:

document.querySelector("#result").innerHTML = "<b>Hello</b>";

Kết quả: chữ Hello được in đậm.

textContent dùng để lấy hoặc thay đổi nội dung văn bản thuần. Nếu chuỗi có chứa thẻ HTML, trình duyệt sẽ không render thành HTML mà hiển thị nguyên văn.

Ví dụ:

document.querySelector("#result").textContent = "<b>Hello</b>";

Kết quả: màn hình hiện nguyên văn <b>Hello</b>.

Khi nào dùng innerHTML?

Dùng innerHTML khi ta thật sự muốn chèn một đoạn HTML do lập trình viên kiểm soát.

Ví dụ:

document.querySelector("#message").innerHTML = "<strong>Thông báo quan trọng</strong>";
Khi nào dùng textContent?

Dùng textContent khi hiển thị dữ liệu do người dùng nhập vào hoặc dữ liệu không cần render HTML.

Ví dụ:

const name = document.querySelector("#nameInput").value;
document.querySelector("#hello").textContent = name;
Vì sao innerHTML có thể gây XSS?

innerHTML nguy hiểm nếu chèn trực tiếp dữ liệu người dùng nhập vào. Người dùng có thể nhập mã HTML hoặc JavaScript độc hại. Khi đó trình duyệt có thể chạy đoạn mã này.

Ví dụ nguy hiểm:

// Giả sử user nhập:
// <img src=x onerror="alert('Hacked!')">

const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput;

Đoạn trên nguy hiểm vì trình duyệt có thể chạy onerror.

Cách sửa an toàn:

const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput;

Dùng textContent sẽ coi nội dung người dùng nhập là văn bản bình thường, không chạy HTML hoặc JavaScript.

Câu A3 — Event Bubbling

Code:

document.querySelector("#outer").addEventListener("click", () => {
    console.log("OUTER");
});

document.querySelector("#inner").addEventListener("click", () => {
    console.log("INNER");
});

document.querySelector("#btn").addEventListener("click", (e) => {
    console.log("BUTTON");
});

HTML:

<div id="outer">
    <div id="inner">
        <button id="btn">Click me</button>
    </div>
</div>

Khi click vào button, event sẽ chạy từ phần tử được click trước, sau đó nổi bọt dần lên phần tử cha.

Thứ tự output là:

BUTTON
INNER
OUTER

Nếu bỏ comment dòng:

e.stopPropagation();

thì event sẽ dừng lại ở button, không nổi bọt lên #inner và #outer.

Output lúc đó là:

BUTTON
PHẦN C — DEBUG & PHÂN TÍCH
Câu C1 — Debug DOM Code

Code ban đầu có nhiều lỗi. Các lỗi chính gồm:

countDisplay.innerHTML = count không sai hoàn toàn nhưng không cần thiết, nên dùng textContent vì chỉ hiển thị text.
addEventListener("onclick", ...) sai. Tên event đúng là "click".
countDisplay khai báo bằng const nhưng trong reset lại gán countDisplay = count, gây lỗi.
Muốn cập nhật nội dung phải dùng countDisplay.textContent = count.
historyList.innerHTML = null không nên dùng. Nên dùng historyList.textContent = "".
item.remove; sai vì thiếu dấu ngoặc. Đúng là item.remove();.
localStorage.getItem("count") trả về chuỗi, nên cần chuyển sang số bằng Number().
Code có lưu history vào localStorage nhưng chưa load lại history khi mở trang.
Nếu dùng historyList.innerHTML để load lại thì event click trên từng li sẽ bị mất.
Nên dùng event delegation cho danh sách history.
Nút decrement chưa lưu lịch sử thay đổi.
Khi reset hoặc clear history nên lưu lại localStorage.

Code đã sửa:

const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = Number(localStorage.getItem("count")) || 0;

countDisplay.textContent = count;

function updateDisplay() {
    countDisplay.textContent = count;
    localStorage.setItem("count", count);
}

function addHistory(text) {
    const li = document.createElement("li");
    li.textContent = text;
    historyList.appendChild(li);
    saveHistory();
}

function saveHistory() {
    const histories = [];

    historyList.querySelectorAll("li").forEach((li) => {
        histories.push(li.textContent);
    });

    localStorage.setItem("history", JSON.stringify(histories));
}

function loadHistory() {
    const histories = JSON.parse(localStorage.getItem("history")) || [];

    histories.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        historyList.appendChild(li);
    });
}

document.querySelector("#incrementBtn").addEventListener("click", function () {
    count++;
    updateDisplay();
    addHistory("Count changed to " + count);
});

document.querySelector("#decrementBtn").addEventListener("click", function () {
    count--;
    updateDisplay();
    addHistory("Count changed to " + count);
});

document.querySelector("#resetBtn").addEventListener("click", () => {
    count = 0;
    updateDisplay();
    historyList.textContent = "";
    saveHistory();
});

historyList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
        saveHistory();
    }
});

document.querySelector("#clearHistory").addEventListener("click", () => {
    const items = historyList.querySelectorAll("li");

    items.forEach((item) => {
        item.remove();
    });

    saveHistory();
});

loadHistory();

Giải thích code sửa:

updateDisplay() dùng để cập nhật số đếm lên giao diện và lưu vào localStorage.
addHistory() tạo thẻ li mới bằng createElement.
saveHistory() lưu danh sách history vào localStorage dưới dạng JSON.
loadHistory() lấy history từ localStorage và render lại.
Dùng event delegation ở historyList.addEventListener("click", ...) để click vào bất kỳ li nào cũng xóa được.
Không dùng innerHTML để render history nhằm tránh rủi ro XSS.
Câu C2 — Performance
1. Vì sao bind event lên 1000 elements riêng lẻ là bad practice?

Nếu có 1000 phần tử và ta gắn event listener riêng cho từng phần tử, trình duyệt phải lưu 1000 event listener trong bộ nhớ. Việc này làm code nặng hơn, tốn RAM hơn và khó quản lý hơn.

Ví dụ không tốt:

const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(item.textContent);
    });
});

Cách này không tối ưu nếu danh sách có rất nhiều phần tử.

Event Delegation giải quyết bằng cách chỉ gắn một event listener lên phần tử cha. Khi click vào phần tử con, event sẽ nổi bọt lên cha. Ta dùng event.target để biết người dùng vừa click vào phần tử nào.

Ví dụ tốt hơn:

const list = document.querySelector("#list");

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("item")) {
        console.log(e.target.textContent);
    }
});

Ưu điểm của Event Delegation:

Chỉ cần một event listener.
Tiết kiệm bộ nhớ.
Code gọn hơn.
Các phần tử được thêm mới sau này vẫn hoạt động mà không cần bind event lại.
2. Refactor dùng DocumentFragment

Code ban đầu:

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    document.body.appendChild(div);
}

Vấn đề:

Mỗi lần appendChild vào document.body, trình duyệt có thể phải tính toán lại layout. Nếu làm 1000 lần, trang có thể bị chậm vì gây nhiều lần reflow/repaint.

Code tối ưu bằng DocumentFragment:

const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const div = document.createElement("div");
    div.textContent = `Item ${i}`;
    fragment.appendChild(div);
}

document.body.appendChild(fragment);

Giải thích:

DocumentFragment giống như một vùng chứa tạm thời nằm trong bộ nhớ. Ta thêm 1000 phần tử vào fragment trước. Sau đó chỉ append fragment vào DOM một lần.

Lợi ích:

Giảm số lần thao tác trực tiếp với DOM.
Giảm reflow/repaint.
Trang chạy nhanh hơn.
Code rõ ràng và dễ tối ưu hơn.
```

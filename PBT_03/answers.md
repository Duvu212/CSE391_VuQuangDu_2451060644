# BÁO CÁO KẾT QUẢ PHIẾU BÀI TẬP 03
**Môn học:** CSS CORE — Selectors, Box Model, Inheritance & Cascade

---

## PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 — 3 Cách nhúng CSS
1. **Inline CSS:** Sử dụng thuộc tính `style` trực tiếp trong thẻ HTML.
   - *Ví dụ:* `<p style="color: red;">Văn bản đỏ</p>`
   - *Ưu điểm:* Nhanh, có độ ưu tiên cao nhất.
   - *Nhược điểm:* Khó bảo trì, làm rối mã HTML, không tái sử dụng được.
   - *Khi nào dùng:* Khi cần thay đổi kiểu dáng nhanh cho 1 phần tử duy nhất hoặc test nhanh.
2. **Internal CSS:** Sử dụng cặp thẻ `<style>` đặt trong thẻ `<head>`.
   - *Ví dụ:* `<style> p { color: blue; } </style>`
   - *Ưu điểm:* Quản lý style của toàn bộ trang trong 1 file.
   - *Nhược điểm:* Không dùng được cho các trang khác, làm file HTML nặng.
   - *Khi nào dùng:* Trang web đơn lẻ hoặc cần style đặc thù cho trang đó.
3. **External CSS:** Tạo file `.css` riêng và liên kết bằng thẻ `<link>`.
   - *Ví dụ:* `<link rel="stylesheet" href="style.css">`
   - *Ưu điểm:* Tách biệt hoàn toàn nội dung và giao diện, dễ bảo trì, tái sử dụng cho nhiều trang, giúp trình duyệt cache file tốt hơn.
   - *Nhược điểm:* Cần thêm một yêu cầu HTTP để tải file.
   - *Khi nào dùng:* Luôn luôn khuyên dùng cho mọi dự án thực tế.

**Câu hỏi thêm:** Nếu cùng áp dụng, **Inline CSS** sẽ thắng vì nó có độ ưu tiên cao nhất trong 3 cách nhúng (specificity cao nhất).

### Câu A2 — CSS Selectors
1. `h1` → Chọn: **ArtToy Station**
2. `.price` → Chọn: **950.000đ** và **1.250.000đ**
3. `#app header` → Chọn: **Header chứa h1 và nav**
4. `nav a:first-child` → Chọn: **Săn Deal**
5. `.product.featured h2` → Chọn: **Molly Space 100%**
6. `article > p` → Chọn: Các đoạn text giá tiền và mô tả trực thuộc article.
7. `a[href="/"]` → Chọn: **Săn Deal**
8. `.top-bar.dark h1` → Chọn: **ArtToy Station**

### Câu A3 — Box Model
- **Trường hợp 1 (content-box):** Chiều rộng hiển thị = **450px**.
- **Trường hợp 2 (border-box):** Chiều rộng hiển thị = **400px**.
- **Trường hợp 3 (Margin collapse):** Khoảng cách giữa 2 box là **40px** (lấy giá trị lớn nhất).

### Câu A4 — Specificity
- Rule A: (0,0,1) - Đen
- Rule B: (0,1,0) - Xanh dương
- Rule C: (1,0,0) - Đỏ
- Rule D: (0,1,1) - Xanh lá
- **Kết quả:** Màu **Đỏ** (Rule C thắng vì có ID).
- Nếu có `style="color: orange;"`: Màu **Cam** (Inline thắng).
- Nếu Rule A có `!important`: Màu **Đen** (`!important` thắng tất cả).

---

## PHẦN C — DEBUG & SUY LUẬN

### Câu C1 — Debug CSS Layout
1. **Chiều rộng thực tế:**
   - Sidebar: 300 (width) + 40 (padding) + 2 (border) = **342px**
   - Content: 660 (width) + 60 (padding) + 2 (border) = **722px**
   - Tổng cộng: 342 + 722 = **1064px** (> 960px).
2. **Tại sao vỡ:** Tổng chiều rộng hai phần tử vượt quá chiều rộng container cha.
3. **Cách sửa:**
   - Cách 1: Thêm `box-sizing: border-box;` cho cả `.sidebar` và `.content`.
   - Cách 2: Giảm width content xuống còn 618px ($960 - 342$).

### Câu C2 — Cascade Puzzle
1. "Sản phẩm A": Font-size = **20px** (từ `.card .title`), Color = **green** (do `.highlight !important`).
2. "Mô tả sản phẩm": Color = **blue** (kế thừa từ `.card`).
3. "Sản phẩm B": Font-size = **20px**, Color = **blue** (thừa hưởng từ `.card`, ID không áp dụng vì ID đó ở thẻ cha khác).
4. "Mô tả sản phẩm B": Color = **green** (do `.highlight !important`).

---

## PHẦN B — LIỆT KÊ SELECTORS (Bài B1)
Trong file style.css, em đã sử dụng các selector:
1. `*` (Universal)
2. `body` (Element)
3. `#header` (ID)
4. `.active` (Class)
5. `nav a` (Descendant)
6. `tr:nth-child(even)` (Pseudo-class)
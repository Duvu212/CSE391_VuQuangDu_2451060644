
## PHẦN A — KIỂM TRA ĐỌC HIỂU
### Câu A1 — Input Types (10 loại)
1. **type="email"** → Ô nhập văn bản; tự kiểm tra định dạng phải có `@`; Dùng cho form đăng ký/đăng nhập.
2. **type="password"** → Ký tự hiển thị dạng dấu chấm/sao; Bảo mật thông tin; Dùng cho ô nhập mật khẩu.
3. **type="number"** → Ô nhập có nút tăng/giảm; Chỉ cho phép số; Dùng chọn số lượng sản phẩm.
4. **type="tel"** → Tối ưu bàn phím số trên thiết bị di động; Dùng để nhập số điện thoại.
5. **type="date"** → Hiển thị bảng chọn lịch (Date picker); Dùng chọn ngày sinh hoặc ngày giao hàng.
6. **type="checkbox"** → Ô tích chọn cho phép chọn nhiều; Dùng chọn danh mục yêu thích.
7. **type="radio"** → Nút chọn duy nhất trong một nhóm; Dùng chọn phương thức thanh toán (COD/Banking).
8. **type="range"** → Thanh trượt chọn giá trị trong khoảng; Dùng để lọc mức giá sản phẩm.
9. **type="file"** → Nút chọn tệp tin từ máy tính; Dùng để tải lên ảnh đại diện hoặc minh chứng thanh toán.
10. **type="color"** → Bảng chọn màu sắc (Hex); Dùng chọn màu tùy chỉnh cho sản phẩm (áo, phụ kiện).

### Câu A2 — Validation Attributes (Dự đoán)
1. **Trường hợp 1:** Trình duyệt báo lỗi "Please fill out this field" vì thuộc tính `required` không cho phép để trống.
2. **Trường hợp 2:** Báo lỗi sai định dạng vì thiếu dấu `@` và tên miền trong email.
3. **Trường hợp 3:** Báo lỗi giá trị vượt quá phạm vi cho phép (15 > `max="10"`).
4. **Trường hợp 4:** Báo lỗi không khớp định dạng (Pattern mismatch) vì regex `[0-9]{10}` chỉ nhận 10 chữ số, không nhận chữ cái.
5. **Trường hợp 5:** Báo lỗi chuỗi quá ngắn vì `123` (3 ký tự) nhỏ hơn `minlength="8"`.

### Câu A3 — Accessibility
* **`<label for="...">`**: Giúp Screen Reader đọc tên trường dữ liệu khi người khiếm thị di chuyển tiêu điểm. Đồng thời giúp tăng diện tích click (bấm vào chữ label thì input vẫn hoạt động).
* **`<fieldset>` + `<legend>`**: Dùng để nhóm các input có liên quan logic với nhau (VD: Thông tin người nhận, Thông tin thanh toán) kèm tiêu đề nhóm.
* **`aria-label`**: Dùng khi giao diện không có văn bản hiển thị (ví dụ nút chỉ có icon). Không dùng khi đã có `<label>` để tránh thiết bị hỗ trợ đọc lặp thông tin.

### Câu A4 — Media
* **`loading="lazy"`**: Trì hoãn việc tải ảnh cho đến khi người dùng cuộn trang đến gần vị trí đó. Giúp tăng tốc độ tải trang ban đầu. Không dùng cho ảnh ở đầu trang (Above the fold).
* **Nhiều `<source>`**: Để trình duyệt tự chọn định dạng video phù hợp nhất mà nó hỗ trợ (giảm dung lượng, tăng hiệu suất). 3 định dạng phổ biến: MP4, WebM, Ogg.
* **`alt`**: Mô tả bằng văn bản nếu ảnh bị lỗi hoặc cho Screen Reader.
    * *iPhone 16:* `alt="Điện thoại iPhone 16 Pro màu Titan Sa mạc mặt trước và sau"`
    * *Ảnh trang trí:* `alt=""` (để trống để Screen Reader bỏ qua).
    * *Biểu đồ:* `alt="Biểu đồ cột thể hiện doanh thu Q1/2026 tăng trưởng 15% so với năm ngoái"`

### Câu A5 — So sánh <figure> vs <img>
* **Cách 1 (<img>):** Dùng khi ảnh chỉ là một phần nhỏ của nội dung, không cần mô tả thêm (VD: Icon, ảnh minh họa nhỏ trong bài).
* **Cách 2 (<figure>):** Dùng khi ảnh là một đơn vị nội dung độc lập, cần có chú thích đi kèm (VD: Ảnh sản phẩm kèm giá, ảnh biểu đồ trong báo cáo).

---

## PHẦN C — PHÂN TÍCH & SUY LUẬN

### Câu C1 — Debug Form (8 lỗi)
1. **Lỗi 1:** Dòng 2 — Input "Tên" thiếu `<label for="...">`. Sửa: `<label for="name">Tên:</label> <input type="text" id="name" name="name">`.
2. **Lỗi 2:** Dòng 4 — Input email thiếu `id` để kết nối label và thiếu `required`.
3. **Lỗi 3:** Dòng 6, 7 — Input mật khẩu thiếu thuộc tính `name`, dữ liệu sẽ không được gửi lên server.
4. **Lỗi 4:** Dòng 9 — Số điện thoại dùng `type="text"` là chưa tối ưu. Sửa thành `type="tel"`.
5. **Lỗi 5:** Dòng 11 — Thẻ `<select>` thiếu thuộc tính `name`.
6. **Lỗi 6:** Dòng 12, 13 — Các `<option>` thiếu thuộc tính `value`.
7. **Lỗi 7:** Dòng 16 — `<label>` không có thuộc tính `for` hoặc không bao quanh checkbox.
8. **Lỗi 8:** Toàn bộ form thiếu thuộc tính `action` và `method="POST"`.

### Câu C2 — Thiết kế chiến lược Validation
1. **Regex Pattern:**
   * CMND/CCCD: `pattern="[0-9]{12}"`
   * Số tài khoản: `pattern="[0-9]{10,15}"`
2. **An toàn?** KHÔNG. HTML5 validation chỉ ở phía Client (Frontend), người dùng có thể tắt hoặc vượt qua dễ dàng bằng công cụ Developer Tools. Ứng dụng ngân hàng bắt buộc phải validate lại ở phía Server (Backend).
3. **3 loại validation HTML5 không làm được:**
   * So sánh giá trị giữa 2 ô (Mật khẩu và Xác nhận mật khẩu).
   * Kiểm tra tính duy nhất (Email đã tồn tại trong DB chưa).
   * Kiểm tra logic nghiệp vụ phức tạp (Số dư tài khoản có đủ thanh toán không).
4. **Rủi ro nếu chỉ validate Frontend:**
   * **SQL Injection:** Hacker có thể gửi mã độc vào server nếu Backend không lọc dữ liệu.
   * **Data Integrity:** Dữ liệu rác hoặc sai định dạng làm hỏng cấu trúc cơ sở dữ liệu.

   linkvideo:https://drive.google.com/file/d/1SvuCg3qNApdlYDkJOiPJhj6r1ad20QrG/view?usp=sharing
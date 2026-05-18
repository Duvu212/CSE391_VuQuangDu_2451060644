# PHIẾU BÀI TẬP 05  
# CSS RESPONSIVE & SCSS
---

PHẦN A — KIỂM TRA ĐỌC HIỂU

Câu A1 — Viewport & Mobile-First

1. Thẻ meta viewport chuẩn

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">

Giải thích:

name="viewport": khai báo cho trình duyệt biết đây là thẻ cấu hình vùng hiển thị.
width=device-width: chiều rộng trang web sẽ bằng chiều rộng thật của thiết bị.
initial-scale=1.0: mức phóng to ban đầu là 100%.

2. Nếu thiếu thẻ viewport thì iPhone hiển thị như thế nào?

Nếu thiếu thẻ viewport, iPhone có thể hiểu trang web giống như một trang desktop lớn. Khi đó trang sẽ bị thu nhỏ lại để vừa màn hình điện thoại. Kết quả là chữ nhỏ, nút bấm khó nhìn, người dùng phải zoom thủ công và layout responsive có thể không hoạt động đúng.

3. Mobile-First và Desktop-First khác nhau thế nào?

Mobile-First là cách viết CSS mặc định cho màn hình nhỏ trước, sau đó dùng @media (min-width: ...) để mở rộng layout cho tablet và desktop.

Ví dụ Mobile-First:

.product-grid {
  display: grid;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

Desktop-First là cách viết CSS mặc định cho màn hình lớn trước, sau đó dùng @media (max-width: ...) để chỉnh lại cho màn hình nhỏ.

Ví dụ Desktop-First:

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

@media (max-width: 767px) {
  .product-grid {
    grid-template-columns: 1fr;
  }
}

Mobile-First được khuyên dùng vì hiện nay rất nhiều người truy cập web bằng điện thoại. Cách này giúp trang web tối ưu cho mobile trước, code dễ mở rộng hơn và phù hợp với thiết kế responsive hiện đại.

Câu A2 — Breakpoints
Breakpoint	Kích thước pixel	Thiết bị đại diện	Lưới sản phẩm nên hiển thị
Extra Small	< 576px	Điện thoại nhỏ	1 cột
Small	≥ 576px	Điện thoại lớn	1 đến 2 cột
Medium	≥ 768px	Tablet	2 cột
Large	≥ 992px	Laptop nhỏ	3 cột
Extra Large	≥ 1200px	Desktop	4 cột
Extra Extra Large	≥ 1400px	Màn hình lớn	4 đến 5 cột
Câu A3 — Media Queries

Đoạn CSS:

.container { width: 100%; padding: 10px; }

@media (min-width: 576px) { .container { width: 540px; } }
@media (min-width: 768px) { .container { width: 720px; } }
@media (min-width: 992px) { .container { width: 960px; } }
@media (min-width: 1200px) { .container { width: 1140px; } }

Bảng kết quả:

Chiều rộng màn hình	.container width
375px	100%
600px	540px
800px	720px
1000px	960px
1400px	1140px

Giải thích ngắn gọn:

CSS dùng min-width, nghĩa là khi màn hình đạt đến kích thước breakpoint thì rule bên trong sẽ được áp dụng. Nếu có nhiều rule cùng đúng, rule ở phía dưới sẽ ghi đè rule phía trên.

Câu A4 — SCSS Basics

SCSS là một cách viết mở rộng của CSS, giúp code gọn hơn, dễ quản lý hơn.

1. Variables

Variables dùng để lưu giá trị có thể tái sử dụng nhiều lần như màu sắc, font chữ, khoảng cách.

$primary-color: #2563eb;
$text-color: #1f2937;

.button {
  background-color: $primary-color;
  color: $text-color;
}
2. Nesting

Nesting cho phép viết CSS lồng nhau theo cấu trúc HTML.

.card {
  padding: 16px;
  border-radius: 12px;

  .card-title {
    font-size: 20px;
    font-weight: bold;
  }

  .card-desc {
    font-size: 15px;
  }
}
3. Mixins

Mixin dùng để tạo một nhóm thuộc tính CSS có thể tái sử dụng.

@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  @include flex-center;
}
4. Extend / Inheritance

@extend dùng để kế thừa style từ một class khác.

.btn {
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
}

.btn-primary {
  @extend .btn;
  background-color: blue;
  color: white;
}
Vì sao trình duyệt không đọc được file .scss?

Trình duyệt chỉ hiểu HTML, CSS và JavaScript. File .scss là file viết theo cú pháp Sass/SCSS nên trình duyệt không đọc trực tiếp được. Vì vậy cần compile SCSS sang CSS.

Lệnh compile:

sass scss/style.scss scss/style.css
PHẦN C — PHÂN TÍCH
Câu C1 — Phân tích trang web thực

Trang web được chọn: YouTube

Em mở YouTube trên 3 kích thước màn hình khác nhau bằng DevTools Toggle Device Toolbar.

1. Mobile — 375px

Ở màn hình mobile, giao diện YouTube được thu gọn lại để phù hợp với chiều rộng nhỏ.

Navigation được rút gọn.
Một số thành phần phụ bị ẩn bớt.
Video hiển thị theo dạng 1 cột.
Người dùng cuộn dọc để xem nội dung.
Font chữ và khoảng cách được tối ưu cho màn hình nhỏ.
Sidebar không hiển thị đầy đủ như desktop.

Ảnh minh chứng lưu tại:

screenshots/youtube-mobile.png
2. Tablet — 768px

Ở màn hình tablet, giao diện rộng hơn mobile nên có thể hiển thị nhiều nội dung hơn.

Navigation hiển thị rõ hơn so với mobile.
Nội dung có thể chia thành nhiều cột hơn.
Một số icon và menu có thêm không gian hiển thị.
Sidebar có thể xuất hiện ở dạng thu gọn.
Khoảng cách giữa các phần tử rộng hơn mobile.

Ảnh minh chứng lưu tại:

screenshots/youtube-tablet.png
3. Desktop — 1440px

Ở màn hình desktop, giao diện YouTube hiển thị đầy đủ nhất.

Thanh sidebar bên trái hiển thị rõ hơn.
Thanh tìm kiếm nằm ở khu vực đầu trang.
Danh sách video hiển thị nhiều cột.
Các icon, menu và khu vực nội dung có nhiều không gian hơn.
Layout tận dụng chiều rộng lớn của màn hình.

Ảnh minh chứng lưu tại:

screenshots/youtube-desktop.png
4. Media Queries

Khi mở DevTools → Styles, em tìm các rule @media được trang sử dụng để thay đổi giao diện theo kích thước màn hình.

Ảnh minh chứng:

screenshots/media-query-1.png
screenshots/media-query-2.png

Nhận xét:

Các media queries giúp trang web tự động thay đổi bố cục, kích thước, khoảng cách và cách hiển thị thành phần theo từng loại thiết bị. Đây là kỹ thuật quan trọng trong responsive design.

Câu C2 — Thiết kế Responsive Strategy

Đề bài: Thiết kế trang đặt bàn nhà hàng responsive.

Trang có:

Header với logo và số điện thoại đặt bàn
Hero image toàn trang
Grid 6 ảnh món ăn
Form đặt bàn gồm ngày, giờ, số người, ghi chú
Bản đồ Google Maps nhúng
Footer
1. Wireframe Mobile
┌─────────────────────────┐
│ HEADER                  │
│ Logo + nút gọi điện      │
├─────────────────────────┤
│ HERO IMAGE              │
├─────────────────────────┤
│ FORM ĐẶT BÀN            │
│ Ngày                    │
│ Giờ                     │
│ Số người                │
│ Ghi chú                 │
│ Button Đặt bàn          │
├─────────────────────────┤
│ GRID ẢNH MÓN ĂN         │
│ 1 cột                   │
├─────────────────────────┤
│ GOOGLE MAP              │
├─────────────────────────┤
│ FOOTER                  │
└─────────────────────────┘

Trên mobile:

Layout dùng 1 cột.
Form đặt bàn nên đặt gần đầu trang để người dùng dễ thao tác.
Grid ảnh món ăn hiển thị 1 cột.
Không cần sidebar.
Có thể ẩn bớt mô tả dài để giao diện gọn hơn.
2. Wireframe Tablet
┌────────────────────────────────┐
│ HEADER                         │
│ Logo + số điện thoại           │
├────────────────────────────────┤
│ HERO IMAGE                     │
├────────────────────────────────┤
│ FORM ĐẶT BÀN                   │
├────────────────────────────────┤
│ GRID ẢNH MÓN ĂN                │
│ 2 cột                          │
├────────────────────────────────┤
│ GOOGLE MAP                     │
├────────────────────────────────┤
│ FOOTER                         │
└────────────────────────────────┘

Trên tablet:

Layout vẫn ưu tiên đọc từ trên xuống.
Grid ảnh món ăn có thể chia 2 cột.
Form đặt bàn rộng hơn mobile nên dễ nhập hơn.
Bản đồ đặt dưới form hoặc dưới grid ảnh.
3. Wireframe Desktop
┌────────────────────────────────────────────┐
│ HEADER: Logo + Menu + Số điện thoại         │
├────────────────────────────────────────────┤
│ HERO IMAGE FULL WIDTH                       │
├───────────────────┬────────────────────────┤
│ FORM ĐẶT BÀN       │ GOOGLE MAP             │
├───────────────────┴────────────────────────┤
│ GRID ẢNH MÓN ĂN: 3 cột                      │
├────────────────────────────────────────────┤
│ FOOTER                                      │
└────────────────────────────────────────────┘

Trên desktop:

Form và bản đồ có thể nằm cạnh nhau thành 2 cột.
Grid ảnh món ăn chia 3 cột.
Header có thể hiển thị đầy đủ logo, menu và số điện thoại.
Không nhất thiết cần sidebar vì nội dung chính đã rõ ràng.
4. CSS Skeleton Mobile-First
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.restaurant-page {
  display: grid;
  gap: 16px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
}

.hero {
  min-height: 300px;
  background-image: url("hero.jpg");
  background-size: cover;
  background-position: center;
}

.booking-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 16px;
}

.booking-form {
  display: grid;
  gap: 12px;
}

.food-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  padding: 16px;
}

.map {
  min-height: 300px;
  padding: 16px;
}

.footer {
  padding: 20px;
  text-align: center;
}

/* Tablet */
@media (min-width: 768px) {
  .food-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .hero {
    min-height: 400px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .booking-section {
    grid-template-columns: 1fr 1fr;
    align-items: start;
  }

  .food-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .header {
    padding: 20px 60px;
  }
}
# PBT06 - CSS Frameworks

## Track chọn: Bootstrap 5

---

# PHẦN A - ĐỌC HIỂU

## Câu A1 - Grid System

| Kích thước | <768px | 768px-991px | >=992px |
|---|---|---|---|
| Số cột | 1 | 2 | 4 |
| Layout | 1 box / hàng | 2 box / hàng | 4 box / hàng |

Giải thích:
- col-12: chiếm toàn bộ chiều ngang
- col-md-6: từ md trở lên chiếm 6/12 cột
- col-lg-3: từ lg trở lên chiếm 3/12 cột

Không cần col-sm-12 vì col-12 đã áp dụng cho mobile.

---

## Câu A2

1. d-none d-md-block
- Mobile: ẩn
- Tablet trở lên: hiện

2. Spacing utilities
- mt-3: margin-top
- mb-3: margin-bottom
- ms-3: margin-left
- p-4: padding
- px-4: padding trái phải

3. Khác nhau
- container: width cố định responsive
- container-fluid: full width
- container-md: responsive từ md

---

# PHẦN C - PHÂN TÍCH

## C1

1.
- Dùng SASS
- Đổi biến $primary
- Compile SCSS sang CSS

2.
Không nên override trực tiếp vì:
- khó bảo trì
- dễ lỗi
- không đồng bộ

Nên dùng SASS variables.

---

## C2

Bootstrap:
- code nhanh
- ít CSS
- responsive dễ

Không nên dùng Bootstrap khi:
- cần thiết kế quá riêng
- cần tối ưu cực nhẹ
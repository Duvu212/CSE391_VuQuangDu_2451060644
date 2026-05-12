## Câu A1 — 5 Loại Positioning

| Position | Vẫn chiếm chỗ trong flow? | Tham chiếu vị trí | Cuộn theo trang? | Use case |
| :--- | :--- | :--- | :--- | :--- |
| `static` | Có | Theo luồng tự nhiên | Có | Mặc định |
| `relative` | Có | Vị trí ban đầu của nó | Có | Làm gốc cho absolute |
| `absolute` | **Không** | Ancestor gần nhất có position | Có | Badge, icon trên ảnh |
| `fixed` | **Không** | Viewport (cửa sổ trình duyệt) | **Không** | Header, nút Back to top |
| `sticky` | Có | Vị trí được chỉ định trong scroll | Có | Header bảng, sidebar |

Câu hỏi thêm: absolute tham chiếu body khi tất cả cha của nó đều là static. "Nearest positioned ancestor" là thẻ cha gần nhất có thuộc tính position khác static.

## Câu A2 — Dự đoán Layout
1.Trường hợp 1: 4 items dàn hàng ngang, chia đều chiều rộng bằng nhau (mỗi cái 25%). ┌───────────┬───────────┬───────────┬───────────┐
│  Item 1   │  Item 2   │  Item 3   │  Item 4   │
│ (flex: 1) │ (flex: 1) │ (flex: 1) │ (flex: 1) │
└───────────┴───────────┴───────────┴───────────┘

2.Trường hợp 2: 2 hàng, mỗi hàng 2 cột (do 45% + 45% + margin chiếm gần hết 100%). Dư 1 khoảng trắng nhỏ ở giữa.
┌──────────────┐ ┌──────────────┐
│    Item 1    │ │    Item 2    │  <- Hàng 1
└──────────────┘ └──────────────┘
┌──────────────┐ ┌──────────────┐
│    Item 3    │ │    Item 4    │  <- Hàng 2
└──────────────┘ └──────────────┘
┌──────────────┐ ┌──────────────┐
│    Item 5    │ │    Item 6    │  <- Hàng 3
└──────────────┘ └──────────────┘

3.Trường hợp 3: 1 item sát trái, 1 item ở chính giữa, 1 item sát phải. Tất cả căn giữa theo chiều dọc.
Container (H)
┌───────────────────────────────────────────────┐
│ ┌────────┐         ┌────────┐         ┌────────┐
│ │ Item 1 │         │ Item 2 │         │ Item 3 │
│ └────────┘         └────────┘         └────────┘
└───────────────────────────────────────────────┘

4.Trường hợp 4: 3 cột. Hai cột bên cố định 200px, cột giữa co giãn linh hoạt.
200px          1fr (Flexible)         200px
┌──────────┐ ┌──────────────────────┐ ┌──────────┐
│  Item 1  │ │        Item 2        │ │  Item 3  │
└──────────┘ └──────────────────────┘ └──────────┘
           <-- gap 20px -->        <-- gap 20px -->

5.Trường hợp 5: 3 hàng. Hai hàng đầu 3 cột full. Hàng thứ 3 chỉ có 1 item ở vị trí cột đầu tiên bên trái.
┌───────────┐ ┌───────────┐ ┌───────────┐
│  Item 1   │ │  Item 2   │ │  Item 3   │
└───────────┘ └───────────┘ └───────────┘
┌───────────┐ ┌───────────┐ ┌───────────┐
│  Item 4   │ │  Item 5   │ │  Item 6   │
└───────────┘ └───────────┘ └───────────┘
┌───────────┐
│  Item 7   │  <-- Item cuối ở cột đầu tiên hàng 3
└───────────┘


## Câu C1 — Khi nào dùng gì?
1.Nav bar: Flexbox (Dàn hàng ngang đơn giản, khoảng cách linh hoạt).

2.Instagram Grid: Grid (Lưới 2 chiều hoàn hảo, các ô vuông bằng chằn chặn).

3.Blog Layout: Grid (Phân chia cột sidebar và main nội dung lớn).

4.Footer: Flexbox (Dễ dàng căn chỉnh các nhóm link).

5.Card nội dung: Flexbox (column) (Để dùng margin-top: auto cho nút bấm).

## Câu C2 — Debug
Lỗi 1: Thiếu display: flex; flex-direction: column; bên trong .card.

Sửa: Thêm display: flex; flex-direction: column; cho .card và margin-top: auto cho .btn.

Lỗi 2: Flexbox mặc định căn lề trái.

Sửa: Thêm justify-content: center; align-items: center; vào .hero.

Lỗi 3: Flex items mặc định có flex-shrink: 1.

Sửa: Thêm flex-shrink: 0; cho .sidebar để giữ nguyên 250px.
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
1.Trường hợp 1: 4 items dàn hàng ngang, chia đều chiều rộng bằng nhau (mỗi cái 25%).

2.Trường hợp 2: 2 hàng, mỗi hàng 2 cột (do 45% + 45% + margin chiếm gần hết 100%). Dư 1 khoảng trắng nhỏ ở giữa.

3.Trường hợp 3: 1 item sát trái, 1 item ở chính giữa, 1 item sát phải. Tất cả căn giữa theo chiều dọc.

4.Trường hợp 4: 3 cột. Hai cột bên cố định 200px, cột giữa co giãn linh hoạt.

5.Trường hợp 5: 3 hàng. Hai hàng đầu 3 cột full. Hàng thứ 3 chỉ có 1 item ở vị trí cột đầu tiên bên trái.

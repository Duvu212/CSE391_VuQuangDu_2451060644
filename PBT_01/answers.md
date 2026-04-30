# Phần A: Kiểm tra đọc hiểu

## Câu A1: HTTP & Browser

1. **Khi gõ https://shopee.vn vào trình duyệt và nhấn Enter, các bước lần lượt xảy ra là:**
   Bước 1: DNS lookup(Tìm địa chỉ IP): Trình duyệt hỏi hệ thống DNS để dịch tên miền shopee.vn thành dãy số địa chỉ IP của máy chủ Shopee
   Bước 2: Thiết lập kết nối: Trình duyệt kết nối với máy chủ Shopee qua địa chỉ IP vừa tìm được và thiết lập bảo mật (vì trang web dùng https an toàn)
   Bước 3: http request: Trình duyệt gửi thông điệp đến máy chủ Shopee để xin tải dữ liệu của trang chủ về
   Bước 4: http response: Máy chủ Shopee nhận được yêu cầu, sau đó lấy các tài nguyên cần thiết (html, css, js,...) và gửi trả lại trình duyệt
   Bước 5: Render(hiển thị giao diện): Trình duyệt nhận được các tài nguyên, bắt đầu đọc code và tiến hành tạo ra giao diện trang web Shopee lên màn hình trình duyệt
   (nguồn tham chiếu: tuan_1_html5/01_introduction_html_universe.md / Phần 1. WEB HOẠT ĐỘNG NHƯ THẾ NÀO?)

2. *Trong DevTools của Chrome, Tab Network hiển thị* chi tiết tất cả các tài nguyên mạng mà trang web tải về. Nó cung cấp thông tin như:

- Name: Tên các tài nguyên được tải về
- Status: Kết quả quá trình tải tài nguyên, 200 là tải thành công, 404 là không tìm thấy tài nguyên, 500 là lỗi máy chủ
- Type: Định dạng của tài nguyên
- Initiator: Cho biết tệp tin hoặc dòng code nào đã yêu cầu tải tài nguyên
- Size: Dung lượng của tài nguyên
- Time: Thời gian để tài nguyên về hoàn tất
  ![alt text](image-1.png)

## Câu A2: Semantic HTML

- *Trang web bị Google đánh giá SEO thấp vì* sử dụng "Div Soup", làm google không hiểu gì. Thẻ <div> là một thẻ vô nghĩa (non-semantic). Khi các công cụ tìm kiếm như thu thập dữ liệu, chúng không thể phân biệt được phần menu điều hướng, nội dung chính, chân trang... Việc thiếu cấu trúc làm Google không hiểu được nội dung cốt lõi của trang, dẫn đến việc xếp hạng SEO thấp
- *Các lỗi semantic:*

1. Dùng thẻ <div class = header> => sửa thành thẻ <header>, cho phần chứa đầu trang
2. Dùng thẻ <div class = menu> => sửa thành thẻ <nav>, cho phần menu điều hướng
3. Dùng thẻ <div class = "main"> => sửa thành thẻ <main>, cho phần nội dung chính của trang
4. Dùng thẻ <div class = "product"> => sửa thành thẻ <article>, cho một thẻ sản phẩm độc lập
5. Dùng thẻ <div class = "footer> => sửa thành thẻ <footer>, cho phần cuối trang
   Sửa hoàn chỉnh:

<header>
    <div class="logo">ShopTLU</div>
    <nav class="menu">
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>
</header>`
<main>
    <article class="product">
        <h2 class="title">iPhone 16 Pro</h2>
        <p class="price">25.990.000đ</p>
        <figure class="image">
            <img src="iphone.jpg" alt="iPhone 16 Pro">
        </figure>
    </article>
</main>

<footer>© 2026 ShopTLU</footer>

(nguồn tham chiếu: tuan_1_html5/04_visible_part_html.md / Phần Semantic HTML5 — "Thẻ có ý nghĩa")

## Câu A3: Block vs Inline

![alt text](image.png)

- <div> là thẻ dạng Block, nó luôn luôn bắt đầu ở một dòng mới, trình duyệt sẽ tự động thêm khoảng trống trước và sau element để chiếm chiều rộng toàn bộ có sẵn. Vì vậy "Hộp 1", "Hộp 2", "Hộp 3" nằm trong thẻ <div> luôn chiếm một dòng mới
- <span> là thẻ thuộc dạng Inline, chỉ chiếm chiều rộng bằng nội dung chữ bên trong, không tự động xuống dòng. Vì vậy "Text A", "Text B" và "Text C", "Text D" nằm cạnh nhau
- <strong> là thẻ thuộc dạng Inline, có tính chất in đậm nên "Text D" được in đậm
  (nguồn tham chiếu: tuan_1_html5/04_visible_part_html.md / Phần Block vs Inline — Hai loại element cơ bản)

## Câu A4: Table

- **Sự khác nhau giữa <thead>, <tbody>, <tfoot>:**

* <thead>: Phần đầu, tiêu đề cột của bảng
* <tbody>: Phần thân, dữ liệu chính của bảng
* <tfoot>: Phần chân, tổng kết của bảng

- *Lý do không nên dùng table để tạo layout trang web:*

1. Phá vỡ tính ngữ nghĩa và Giảm điểm SEO: Thẻ <table> sinh ra với mục đích duy nhất là hiển thị "dữ liệu dạng bảng" (Tabular Data). Nếu dùng nó để làm khung giao diện, các bộ máy tìm kiếm và phần mềm đọc màn hình cho người khiếm thị sẽ hiểu sai hoàn toàn cấu trúc trang, làm giảm nghiêm trọng điểm SEO và tính trợ năng
2. Chiếm nhiều dung lượng file HTML: Để tạo ra một giao diện trang web phức tạp bằng Table, bạn sẽ phải lồng hàng chục thẻ <table>, <tr>, <td> vào bên trong nhau. Việc lặp lại mã này trên toàn bộ trang web làm file HTML trở bên rối, nặng hơn đáng kể, tốn băng thông mạng và giảm tốc độ load trang
3. Code phức tạp, khó bảo trì : Do chiếm nhiều dung lượng, nhiều thẻ lồng vào nhau nên sẽ khiến cho việc code và sau này bảo trì sẽ rất phức tạp.
   (nguồn tham chiếu: tuan_1_html5/05_tables_hyperlinks.md)

# Phần B: Thực hành code

## Câu B3: Debug HTML

- Lỗi 1: Dòng 1 - Thiếu khai báo html trong DOCTYPE - Sửa thành <!DOCTYPE html>
- Lỗi 2: Dòng 4 - Thẻ <title> chưa đóng - Sửa thành <title> Trang web </title>
- Lỗi 3: Dòng 5 - utf8 viết sai - Sửa thành UTF-8
- Lỗi 4: Dòng 8 - Đóng thẻ <h1> sai - Sửa thành <h1> Welcome to ShopTLU`</h1>`
- Lỗi 5: Dòng 12 - Link Trang chủ đóng thẻ <a> sai — Sửa thành <a href="home">Trang chủ</a>
- Lỗi 6: Dòng 19+20 - Thuộc tính src của ảnh thiếu dấu ngoặc kép, thẻ <img> thiếu thuộc tính alt — Sửa thành <img src="iphone.jpg" alt="iPhone 16 Pro">
- Lỗi 7: Dòng 21 - Sai thứ tự đóng thẻ (<b> và <p> lồng sai nhau) — Sửa thành <p>Giá: <b>25.990.000đ`</b></p>`
- Lỗi 8: Dòng 27 - Table thiếu <thead> và <tbody> — Sửa bằng cách thêm các thẻ này và dùng <th> cho tiêu đề.
- Lỗi 9: Dòng 39 - Sử dụng thẻ <main> thứ 2 - Sửa <main> thứ 2 thành <aside>
- Lỗi 10: Dòng 44 - Thẻ <p> trong footer chưa đóng — Sửa thành <p>Copyright 2026</p>

## Câu B4: Phân tích trang web thật (shopee.vn)

*1. 3 thẻ mà semantic HTML5 mà shopee sử dụng là:*

- <header> nằm trong khối <div id = "main">
- <footer> nằm trong khối <div id = "main">
- <section> nằm ở phần thân trang
  2 thẻ mà chưa dùng đúng semantic:
- Lạm dụng thẻ <div> bọc ngoài thay vì <main>
- Một số menu điều hướng dùng <div> thay vì <nav>
  *2. Qua quá trình kiểm tra thực tế bằng DevTools,* phát hiện ra trang web không sử dụng thẻ <table> chuẩn cho phần thông số kỹ thuật. Thay vào đó, họ lạm dụng các thẻ <div> kết hợp CSS để dàn trang dạng lưới
  **3. Phân tích thẻ <form> (Ô tìm kiếm trên Shopee.vn)**
- Action và Method: Rất đặc biệt, thẻ <form> không có thuộc tính action và method
- Input types được dùng:
  - Ô nhập từ khóa: Dùng thẻ <input> (Shopee không ghi rõ thuộc tính type, nên theo chuẩn HTML, trình duyệt sẽ mặc định nó là type="text").
  - Nút bấm kính lúp: Dùng <button type="button"> thay vì type="submit"

  # Phần C: Suy luận

  ## Câu C1: Thiết kế kiến trúc

<!DOCTYPE html> <!-- khai báo tài liệu HTML5 -->
<html lang="vi"> <!-- thẻ gốc của trang web, lang="vi" nghĩa là ngôn ngữ tiếng Việt -->
<head> <!-- head chứa các thông tin cấu hình của trang web, không hiển thị trực tiếp trên giao diện -->
    <meta charset="UTF-8"> <!-- khai báo bảng mã UTF-8 để hiển thị đúng tiếng Việt -->
    <title>iPhone 15 Plus - ShopTLU</title> <!-- tiêu đề trang hiển thị trên tab trình duyệt -->
</head>
<body> <!-- phần nội dung của trang web -->
    <header> <!-- phần đầu trang web, thường chứa logo hoặc menu -->
        <nav>  <!-- thanh điều hướng chính của website --> 
            <a href="#">Trang chủ</a><!-- Liên kết tới trang chủ -->
            <a href="/product">Sản phẩm</a> <!-- Liên kết tới trang sản phẩm -->
        </nav>
    </header>

    <main> <!-- Nội dung chính của trang -->
        <nav>
            <p>Trang chủ > Điện thoại > <strong>iPhone 15 Plus</strong></p> <!-- strong dùng để in đậm-->
        </nav>

        <article> <!-- Nội dung chính của trang -->
            <section> <!-- section dùng để chia nội dung của trang, phần này để hiển thị hình ảnh sản phẩm -->
                <img src="https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus_1__1.png" alt="iPhone 15 Plus màu Hồng" width="250">
                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-15-plus-cu-dep.png" alt="iPhone 15 Plus màu Xanh lá" width="250">
                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/a/p/app-ip15-128gb-dn-99-2_1.png" alt="iPhone 15 Plus màu Đen" width="250">
                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/a/p/app-ip15-plus-128gb-xd-99.png" alt="iPhone 15 Plus màu Xanh dương" width="250">
                <img src="https://cdn2.cellphones.com.vn/358x/media/catalog/product/i/p/iphone-15-cu-dep_1_.png" alt="iPhone 15 Plus màu Vàng" width="250">
            </section>

            <section><!-- phần này để hiển thị thông tin sản phẩm -->
                <h1>iPhone 15 Plus 128GB</h1> <p>Giá: <strong>14.790.000đ</strong></p>
                <p>Đánh giá: ⭐⭐⭐⭐⭐</p>
                <p>Mô tả: Màn hình lớn 6.7 inch, khung nhôm nhẹ và Dynamic Island hiện đại.</p>
            </section>

            <section> <!-- phần này để hiển thị thông số kỹ thuật của sản phẩm -->
                <h2>Thông số kỹ thuật</h2>
                <table border="1"> <!-- table dùng để tạo bảng -->
                    <tr><!-- tr là một hàng trong bảng -->
                        <th scope="row">Màn hình</th> <!-- th là ô tiêu đề -->
                        <td>6.7 inches, Super Retina XDR OLED</td></td> <!-- td là ô dữ liệu -->
                    </tr>
                    <tr>
                        <th scope="row">Chipset</th>
                        <td>Apple A16 Bionic</td>
                    </tr>
                    <tr>
                        <th scope="row">Độ phân giải màn hình</th>
                        <td>2796 x 1290-pixel</td>
                    </tr>
                    <tr>
                        <th scope="row">Loại CPU</th>
                        <td>2796 x 1290-pixel</td>
                    </tr>
                </table>
            </section>

            <section> <h2>Đánh giá từ khách hàng</h2> <!-- Section hiển thị đánh giá của khách hàng -->
                <p><strong>Nguyễn Văn A:</strong> Máy mượt, chụp ảnh rất đẹp.</p>
                <p><strong>Trần Thị B:</strong> Pin dùng cực lâu, rất hài lòng.</p>
            </section>

        </article>

        <aside> <h2>Sản phẩm tương tự</h2> <!-- Nội dung phụ bên cạnh nội dung chính -->
            <ul> <!-- Danh sách không thứ tự -->
                <li><a href="/iphone-15-pro">iPhone 15 Pro</a></li> <!-- Liên kết tới sản phẩm tương tự -->
                <li><a href="/samsung-s24">Samsung Galaxy S24</a></li>
            </ul>
        </aside>

    </main>

    <footer> <!-- Phần cuối trang web -->
        <p>&copy; 2026 ShopTLU.</p>
    </footer>

</body>
</html>

## Câu C2: So sánh và tranh luận

Quan điểm cho rằng chỉ cần dùng thẻ <div> kết hợp với class để xây dựng giao diện là một tư duy chưa đầy đủ về phát triển web hiện đại. Việc sử dụng Semantic HTML (HTML ngữ nghĩa) mang lại những giá trị cốt lõi mà các thuộc tính class đơn thuần không thể thay thế được.
Về mặt kỹ thuật, có hai lý do quan trọng nhất:

- SEO (Search Engine Optimization): Các bộ máy tìm kiếm như Google sử dụng robot để quét nội dung website. Thẻ Semantic như <main>, <article>, hay <section> cung cấp các "chỉ dẫn" rõ ràng giúp robot hiểu đâu là nội dung chính, đâu là nội dung phụ. Một trang web có cấu trúc ngữ nghĩa tốt sẽ được đánh giá cao hơn và dễ dàng đạt thứ hạng tốt trên kết quả tìm kiếm so với một trang web chỉ toàn các thẻ <div> vô danh.
- Khả năng truy cập: Đây là yếu tố nhân văn trong lập trình. Những người khiếm thị sử dụng phần mềm đọc màn hình (Screen Reader) để tiếp cận web. Các phần mềm này dựa vào thẻ <nav>, <header>, <button> để thông báo cho người dùng biết họ đang đứng ở đâu và có thể thao tác gì. Nếu sử dụng <div> cho mọi thứ, người dùng khuyết tật sẽ mất đi khả năng điều hướng và gặp khó khăn cực lớn khi sử dụng dịch vụ.
- Ví dụ cụ thể: Khi thiết kế bảng thông số kỹ thuật, việc sử dụng thẻ <table giúp trình duyệt và các công cụ hỗ trợ hiểu đây là dữ liệu có cấu trúc hàng-cột. Nếu ta dùng các thẻ <div> lồng nhau để giả lập bảng, dữ liệu sẽ trở thành các dòng chữ rời rạc, làm mất đi tính liên kết logic và gây khó khăn trong việc bảo trì hoặc trích xuất dữ liệu sau này.
- Tuy nhiên, thẻ <div> vẫn có vai trò riêng của nó. Thẻ này hoàn toàn phù hợp khi được dùng làm các vùng chứa (wrapper/container) với mục đích thuần túy là để dàn trang, chia cột (Flexbox, Grid) hoặc tạo các lớp bao bọc để xử lý hiệu ứng CSS mà không mang ý nghĩa về mặt nội dung.
linkvideo:https://drive.google.com/file/d/1h-_rvlMd1VsffjXa6wibBEYJKk8Hjwqd/view?usp=sharing
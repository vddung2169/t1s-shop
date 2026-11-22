# Website T1s Shop

Website xem máy, giá và cẩm nang của T1s Shop (iPhone Lock, iPhone Quốc tế, iPad cũ). Không có giỏ hàng hay thanh toán online.
Làm bằng Next.js 14.

## Chạy thử trên máy tính

1. Cài **Node.js 18 trở lên** (bản LTS) tại https://nodejs.org nếu máy chưa có.
2. Giải nén file zip, mở Terminal (Mac) hoặc Command Prompt / PowerShell (Windows) trong thư mục `t1s-shop-web`.
3. Chạy lần lượt:

```bash
npm install
npm run dev
```

4. Mở trình duyệt vào **http://localhost:3000**

Muốn chạy bản tối ưu (giống khi đưa lên mạng):

```bash
npm run build
npm start
```

## Sửa nội dung

Mọi thông tin nằm trong thư mục `data/`, không cần đụng vào phần giao diện:

| File | Nội dung |
|---|---|
| `data/shop.js` | Tên shop, số điện thoại, Zalo, địa chỉ, giờ mở cửa, cam kết, 4 bước mua máy |
| `data/products.js` | Danh sách máy và giá. Thêm máy: copy một khối `{ ... }` rồi sửa |
| `data/articles.js` | Bài cẩm nang, mẹo, tin tức |
| `public/logo.svg` | Logo shop |

Sửa xong, lưu file, trang web đang chạy `npm run dev` sẽ tự cập nhật.

## Các trang

- `/` Trang chủ
- `/iphone` (lọc `?loai=lock` hoặc `?loai=quoc-te`) và `/ipad`
- `/san-pham/<tên-máy>` chi tiết từng máy
- `/cam-nang` và `/cam-nang/<bài-viết>`
- `/tra-gop` công cụ tính trả góp
- `/lien-he` cửa hàng, bản đồ
- `/tim-kiem?q=...` kết quả tìm kiếm

## Ghi chú

- Hình máy hiện là hình vẽ minh hoạ (`components/DeviceArt.jsx`). Khi có ảnh thật, có thể thay bằng ảnh.
- Lãi suất trong công cụ trả góp là số tham khảo, sửa ở `components/InstallmentCalc.jsx`.
- Đưa lên mạng: có thể deploy miễn phí lên Vercel (https://vercel.com) rồi gắn tên miền riêng.
# t1s-shop

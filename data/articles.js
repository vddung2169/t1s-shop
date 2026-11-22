// Cẩm nang & tin tức. Nội dung viết bằng HTML đơn giản (p, h2, ul, ol, table, .tip).
// Thêm bài mới: copy một khối { ... }, đổi slug (không dấu, nối bằng gạch ngang).

export const ARTICLE_CATS = {
  'cam-nang': 'Cẩm nang',
  meo: 'Mẹo hay',
  'tin-tuc': 'Tin tức',
};

export const ARTICLES = [
  {
    slug: 'so-sanh-iphone-lock-vs-quoc-te', cat: 'cam-nang', date: '20/11/2026', read: 5, icon: 'swap', mark: 'Lock / QT',
    title: 'So sánh iPhone Lock và Quốc tế: nên mua loại nào?',
    excerpt: 'Lock rẻ hơn vài triệu nhưng cần sim ghép. Bảng so sánh nhanh để chọn đúng máy.',
    body: `<p>Cùng một chiếc iPhone, bản Lock có thể rẻ hơn bản Quốc tế vài triệu, có khi cả chục triệu với máy đời mới. Khác biệt nằm ở chỗ máy có bị khoá nhà mạng hay không.</p>
<h2>iPhone Quốc tế là gì?</h2><p>Máy không khoá nhà mạng, lắp sim nào ở Việt Nam cũng dùng được, cập nhật iOS thoải mái, bán lại giữ giá tốt.</p>
<h2>iPhone Lock là gì?</h2><p>Máy bán kèm hợp đồng nhà mạng ở nước ngoài (Mỹ, Nhật…) nên chỉ nhận sim của nhà mạng đó. Về Việt Nam, máy dùng sim ghép hoặc eSIM ghép để nhận sim trong nước.</p>
<div class="tbl"><table><tr><th></th><th>Quốc tế</th><th>Lock</th></tr>
<tr><td>Giá</td><td>Cao hơn</td><td>Rẻ hơn vài triệu đến hơn chục triệu</td></tr>
<tr><td>Dùng sim</td><td>Mọi nhà mạng</td><td>Cần sim ghép</td></tr>
<tr><td>Cập nhật iOS</td><td>Thoải mái</td><td>Được, shop fix sim miễn phí nếu mất sóng</td></tr>
<tr><td>Bán lại</td><td>Giữ giá tốt</td><td>Mất giá nhanh hơn</td></tr></table></div>
<h2>Ví dụ thực tế</h2><p>iPhone 18 Pro Max 256GB: bản Quốc tế 40.990.000đ, bản Lock 29.990.000đ. Bạn tiết kiệm được 11.000.000đ nếu chọn Lock.</p>
<h2>Nên chọn loại nào?</h2><ul><li>Chọn <b>Quốc tế</b> nếu bạn dùng lâu dài, hay đi nước ngoài, hoặc muốn bán lại sau 1–2 năm.</li><li>Chọn <b>Lock</b> nếu muốn máy đời cao với ngân sách thấp hơn. Ở T1s, máy Lock được fix sim trọn đời, kể cả sau khi cập nhật iOS.</li></ul>`,
  },
  {
    slug: 'kiem-tra-iphone-cu', cat: 'meo', date: '18/11/2026', read: 6, icon: 'shield', mark: '7 bước',
    title: '7 bước kiểm tra iPhone cũ trước khi mua',
    excerpt: 'Tự kiểm IMEI, iCloud, pin, Face ID và lịch sử linh kiện trong 10 phút.',
    body: `<p>Đây là 7 bước kỹ thuật viên của shop làm với mọi máy nhập về. Bạn có thể tự làm lại khi nhận máy.</p>
<h2>1. Đối chiếu IMEI</h2><p>Bấm <code>*#06#</code> trên bàn phím gọi. IMEI phải trùng với số trong <code>Cài đặt › Cài đặt chung › Giới thiệu</code>.</p>
<h2>2. Kiểm tra iCloud</h2><p>Vào <code>Cài đặt</code>, dòng trên cùng phải là "Đăng nhập vào iPhone". Máy còn tài khoản người khác thì không nhận.</p>
<h2>3. Xem tình trạng pin</h2><p><code>Cài đặt › Pin › Tình trạng pin</code>. Từ iPhone 15 trở đi còn xem được số chu kỳ sạc.</p>
<h2>4. Thử Face ID</h2><p>Cài thử một khuôn mặt. Báo lỗi là dấu hiệu máy từng bị sửa hoặc va đập.</p>
<h2>5. Kiểm tra màn hình</h2><ul><li>Mở ảnh nền trắng để tìm điểm chết, ám vàng.</li><li>Bật, tắt True Tone. Mất True Tone thường là màn đã thay.</li></ul>
<h2>6. Loa, mic, camera, sóng</h2><p>Gọi một cuộc, quay video có tiếng, chuyển qua các camera. Lắp sim của bạn để thử sóng.</p>
<h2>7. Lịch sử linh kiện</h2><p><code>Cài đặt › Cài đặt chung › Giới thiệu</code>, mục "Lịch sử linh kiện và dịch vụ". Linh kiện không chính hãng sẽ hiện "Không xác định".</p>
<p class="tip">Ở T1s, iCloud, MDM và pin được kiểm trước khi giao. Bạn vẫn được tự kiểm lại thoải mái rồi mới thanh toán.</p>`,
  },
  {
    slug: 'ipad-lock-la-gi', cat: 'cam-nang', date: '15/11/2026', read: 4, icon: 'tablet', mark: 'Cellular',
    title: 'iPad Lock là gì? Khác gì iPad Wi‑Fi và bản Cellular',
    excerpt: 'Hiểu đúng 3 loại iPad trước khi mua: Wi‑Fi, Cellular quốc tế và Cellular bị khoá mạng.',
    body: `<h2>iPad Wi‑Fi</h2><p>Chỉ kết nối Wi‑Fi, không có khe sim. Muốn dùng mạng ngoài đường thì phát Wi‑Fi từ điện thoại.</p>
<h2>iPad Cellular</h2><p>Có khe sim hoặc eSIM, dùng 4G/5G trực tiếp. Bản này thường có thêm GPS riêng, hữu ích khi dùng bản đồ.</p>
<h2>iPad Lock</h2><p>Là bản Cellular bị khoá nhà mạng nước ngoài. Máy vẫn dùng Wi‑Fi bình thường, chỉ phần sim là không nhận sim Việt Nam nếu không ghép.</p>
<p class="tip">Nhiều iPad Cellular giá rất mềm vì nhu cầu chủ yếu là dùng Wi‑Fi. Shop ghi rõ "Chỉ Wi‑Fi" hay "Wi‑Fi + Cellular" ở từng máy.</p>`,
  },
  {
    slug: 'chon-dong-ipad-phu-hop', cat: 'cam-nang', date: '12/11/2026', read: 6, icon: 'tablet', mark: 'Pro · Air',
    title: 'Nên mua iPad dòng nào? So sánh iPad Pro, Air và Gen',
    excerpt: 'Chọn theo nhu cầu học tập, vẽ, giải trí và ngân sách.',
    body: `<div class="tbl"><table><tr><th>Ngân sách</th><th>Gợi ý</th><th>Hợp với</th></tr>
<tr><td>Dưới 5 triệu</td><td>iPad Gen 7, Gen 8, Gen 9, Air 3, Pro 10.5</td><td>Đọc tài liệu, học online, xem phim</td></tr>
<tr><td>7–9 triệu</td><td>iPad Air 4, Air 5</td><td>Học sinh, sinh viên, ghi chép bằng Pencil 2</td></tr>
<tr><td>10–15 triệu</td><td>iPad Pro 2018, 2020, M1</td><td>Vẽ, chỉnh ảnh, màn 120Hz mượt</td></tr>
<tr><td>Trên 15 triệu</td><td>iPad Air M4</td><td>Máy mới, dùng lâu dài nhiều năm</td></tr></table></div>
<h2>Mẹo chọn nhanh</h2><ul><li>Cần màn mượt để vẽ: chọn dòng Pro (120Hz).</li><li>Cần nhẹ, gọn, pin tốt: chọn Air.</li><li>Chỉ xem phim, học online: dòng Gen là đủ.</li></ul>`,
  },
  {
    slug: 'chon-dung-luong-ipad', cat: 'meo', date: '10/11/2026', read: 3, icon: 'box', mark: '64GB',
    title: 'Mua iPad nên chọn dung lượng bao nhiêu? 32GB, 64GB hay 256GB',
    excerpt: 'Tính nhanh dung lượng theo cách bạn dùng máy.',
    body: `<ul><li><b>32GB:</b> đủ cho học online, đọc sách, xem phim trực tuyến. Không nên cài nhiều game.</li><li><b>64GB:</b> hợp đa số học sinh, sinh viên, ghi chú và tài liệu PDF.</li><li><b>128GB:</b> vẽ, chỉnh ảnh, lưu tài liệu nhiều.</li><li><b>256GB trở lên:</b> quay dựng video, lưu nhiều file vẽ, chơi game nặng.</li></ul><p class="tip">iPad không lắp thẻ nhớ, nên chọn dư một bậc nếu bạn định dùng trên 3 năm.</p>`,
  },
  {
    slug: 'apple-pencil-cho-ipad', cat: 'meo', date: '06/11/2026', read: 3, icon: 'pen', mark: 'Pencil',
    title: 'Apple Pencil 1 hay 2? Chọn đúng bút cho iPad của bạn',
    excerpt: 'Mỗi đời iPad chỉ hỗ trợ một số loại bút. Bảng tra nhanh.',
    body: `<div class="tbl"><table><tr><th>Bút</th><th>Dùng với</th></tr>
<tr><td>Apple Pencil 1</td><td>iPad Gen 7, 8, 9, iPad Air 3, iPad Pro 10.5</td></tr>
<tr><td>Apple Pencil 2</td><td>iPad Air 4, Air 5, iPad Pro 11 inch và 12.9 inch từ 2018 đến M2</td></tr>
<tr><td>Apple Pencil Pro</td><td>iPad Air M2 trở lên, iPad Pro M4 trở lên</td></tr>
<tr><td>Apple Pencil USB‑C</td><td>Hầu hết iPad có cổng USB‑C</td></tr></table></div>
<p class="tip">Thông số "Bút hỗ trợ" của từng máy được ghi trong trang chi tiết sản phẩm.</p>`,
  },
  {
    slug: 'kiem-tra-icloud-activation-lock-ipad', cat: 'meo', date: '03/11/2026', read: 4, icon: 'lock', mark: 'iCloud',
    title: 'Cách kiểm tra iCloud ẩn, Activation Lock và MDM trên iPad cũ',
    excerpt: 'Ba thứ cần kiểm trước khi trả tiền một chiếc iPad cũ.',
    body: `<h2>1. iCloud</h2><p>Vào <code>Cài đặt</code>. Dòng trên cùng phải là "Đăng nhập vào iPad". Nếu còn tên người khác, không mua.</p>
<h2>2. Activation Lock</h2><p>Nhờ người bán đặt lại máy ngay trước mặt bạn rồi cài đặt từ đầu. Nếu máy hỏi Apple ID của chủ cũ, máy đang bị khoá kích hoạt.</p>
<h2>3. MDM (quản lý từ xa)</h2><p>Trong lúc cài đặt, nếu hiện màn hình "Quản lý từ xa" thì máy thuộc doanh nghiệp hoặc trường học. Sau khi vào máy, xem thêm <code>Cài đặt › Cài đặt chung › VPN & Quản lý thiết bị</code>.</p>
<p class="tip">T1s kiểm iCloud và MDM cho mọi iPad trước khi giao.</p>`,
  },
  {
    slug: 'tinh-trang-pin-iphone', cat: 'meo', date: '30/10/2026', read: 3, icon: 'battery', mark: '85%',
    title: 'Pin iPhone còn 85% có nên mua không?',
    excerpt: 'Hiểu đúng con số tình trạng pin và khi nào cần thay.',
    body: `<ul><li><b>95–100%:</b> gần như mới.</li><li><b>85–94%:</b> dùng thoải mái một ngày với nhu cầu bình thường.</li><li><b>80–84%:</b> vẫn ổn, nên tính trước chi phí thay pin.</li><li><b>Dưới 80%:</b> iOS sẽ khuyên thay pin.</li></ul><p>Trên iPhone 15 trở lên, xem thêm số chu kỳ sạc trong <code>Cài đặt › Pin › Tình trạng pin</code>.</p>`,
  },
  {
    slug: 't1s-shop-chinh-thuc-mo-cua', cat: 'tin-tuc', date: '22/11/2026', read: 2, icon: 'store', mark: 'T1s',
    title: 'T1s Shop mở cửa tại 265 Đường số 5, P. An Lạc',
    excerpt: 'Ghé xem máy trực tiếp, kiểm tra thoải mái trước khi mua.',
    body: `<p>T1s Shop mở cửa tại <b>265 Đường số 5, Phường An Lạc, TP. Hồ Chí Minh</b>, từ 9:00 đến 21:00 mỗi ngày.</p><p>Shop chuyên iPhone Lock, iPhone Quốc tế và iPad cũ, free ship toàn quốc, trả góp 0% và fix sim trọn đời cho máy Lock.</p><p>Hotline và Zalo: <b>0909 836 905</b>. Hotline 2: <b>0909 836 416</b>.</p>`,
  },
];

export const getArticle = (slug) => ARTICLES.find((a) => a.slug === slug);

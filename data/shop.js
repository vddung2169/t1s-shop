// Thông tin cửa hàng. Sửa ở đây là cả website cập nhật theo.
export const SHOP = {
  name: 'T1s Shop',
  tagline: 'iPhone Lock · Quốc tế · iPad cũ',
  phone: '0909836905',
  phoneDisplay: '0909 836 905',
  // Số điện thoại thứ hai (chỉ gọi)
  phone2: '0909836416',
  phone2Display: '0909 836 416',
  zalo: 'https://zalo.me/0909836905',
  address: '265 Đường số 5, Phường An Lạc, TP. Hồ Chí Minh',
  hours: '9:00 – 21:00, mở cửa cả tuần',
  mapQuery: '265 Đường số 5, Phường An Lạc, TP. Hồ Chí Minh',
};

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SHOP.mapQuery)}`;
export const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(SHOP.mapQuery)}&output=embed`;

// Cam kết dịch vụ của shop
export const PROMISES = [
  { icon: 'truck', title: 'Free ship toàn quốc', text: 'Giao tận nơi, kiểm hàng rồi mới thanh toán.' },
  { icon: 'sim', title: 'Fix sim trọn đời', text: 'Cho máy Lock, kể cả sau khi cập nhật iOS.' },
  { icon: 'shield', title: 'Kiểm tra kỹ', text: 'iCloud, MDM, pin được kiểm trước khi giao máy.' },
  { icon: 'card', title: 'Trả góp 0%', text: 'Qua thẻ tín dụng, công ty tài chính hoặc iCloud.' },
];

// 4 bước mua máy
export const STEPS = [
  { title: 'Nhắn tin hỏi máy', text: 'Nhắn Zalo hoặc gọi shop để hỏi máy, xin ảnh và video thật.' },
  { title: 'Xem máy', text: 'Xem trực tiếp tại 265 Đường số 5, P. An Lạc hoặc gọi video. Kiểm tra IMEI, pin, sóng sim.' },
  { title: 'Nhận máy', text: 'Lấy tại cửa hàng hoặc ship toàn quốc miễn phí. Kiểm tra máy rồi mới thanh toán.' },
  { title: 'Yên tâm dùng', text: 'Mất sóng sau khi cập nhật iOS, lỗi sim ghép: được xử lý miễn phí trọn đời máy.' },
];

// Banner dọc 2 bên (chỉ hiện trên màn hình rộng từ 1500px).
// Muốn dùng ảnh tự thiết kế: bỏ ảnh vào public/banners/ (khổ dọc, ví dụ 360x1200) rồi điền image: '/banners/ten-anh.jpg'.
// Khi có image, banner hiện đúng ảnh đó; khi bỏ trống, banner tự vẽ theo nội dung bên dưới.
// product: slug máy để vẽ hình minh hoạ (lấy trong data/products.js).
export const SIDE_BANNERS = {
  left: {
    href: '/san-pham/iphone-18-pro-max-lock',
    image: '',
    tone: 'dark',
    product: 'iphone-18-pro-max-lock',
    eyebrow: 'Mới về',
    title: 'iPhone 18 Pro Max Lock',
    highlight: 'Rẻ hơn 11 triệu',
    text: 'so với bản Quốc tế. Fix sim trọn đời.',
    cta: 'Xem máy',
  },
  right: {
    href: '/ipad',
    image: '',
    tone: 'light',
    product: 'ipad-air-5',
    eyebrow: 'iPad cũ',
    title: 'iPad cho học online',
    highlight: 'Từ 1.990.000đ',
    text: 'Đã kiểm iCloud, MDM. Trả góp 0%.',
    cta: 'Chọn iPad',
  },
};

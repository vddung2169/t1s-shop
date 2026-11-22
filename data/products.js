// Danh mục sản phẩm. Giá chép từ website DEV PỒ (devpo.vn) ngày 22/11/2026.
// Thêm máy mới: copy một khối { ... } và sửa thông tin.
//   category: 'iphone-lock' | 'iphone-quoc-te' | 'ipad'
//   price: giá "từ" (đồng), oldPrice: giá gạch ngang (bỏ trống nếu không có)
//   art: kiểu hình minh hoạ (cam: bar | air | tri | vert | diag | pro | one), color: màu thân máy
//   image: đường dẫn ảnh thật trong public/products/ (tuỳ chọn; có ảnh sẽ thay hình minh hoạ)

export const CATEGORIES = {
  'iphone-lock': { label: 'iPhone Lock', short: 'Lock', href: '/iphone?loai=lock' },
  'iphone-quoc-te': { label: 'iPhone Quốc tế', short: 'Quốc tế', href: '/iphone?loai=quoc-te' },
  ipad: { label: 'iPad', short: 'iPad', href: '/ipad' },
};

export const PRODUCTS = [
  // ---------- iPhone Lock ----------
  {
    slug: 'iphone-18-pro-max-lock', name: 'iPhone 18 Pro Max Lock', category: 'iphone-lock', line: 'iPhone 18',
    price: 29990000, storages: ['256GB'], sim: '2 sim 2 sóng', battery: 'Pin zin 100%', badges: ['Mới về'],
    image: '/products/iPhone 18ProMax.png',
    art: { cam: 'bar', color: '#CDD0D6' },
    specs: { 'Cổng sạc': 'USB‑C', 'Kháng nước': 'IP68' },
  },
  {
    slug: 'iphone-17-pro-max-lock', name: 'iPhone 17 Pro Max Lock', category: 'iphone-lock', line: 'iPhone 17',
    price: 23590000, oldPrice: 27500000, storages: ['256GB'], sim: '2 sim 2 sóng', battery: 'Pin 100%', badges: ['Mới về'],
    image: '/products/iPhone 17 Pro Max.jpg',
    art: { cam: 'bar', color: '#E2762F' },
    specs: { 'Màn hình': '6.9" OLED, ProMotion 120Hz', Chip: 'A19 Pro', 'Camera sau': '3 camera 48MP: chính, góc siêu rộng, tele 4x', 'Camera trước': '18MP Center Stage', 'Cổng sạc': 'USB‑C', 'Kháng nước': 'IP68' },
  },
  {
    slug: 'iphone-17-pro-lock', name: 'iPhone 17 Pro Lock', category: 'iphone-lock', line: 'iPhone 17',
    price: 21590000, oldPrice: 25000000, storages: ['256GB'], sim: '2 sim 2 sóng', battery: 'Pin 100%', badges: ['Hot nhất'],
    image: '/products/iPhone 17 Pro.jpg',
    art: { cam: 'bar', color: '#33415C' },
    specs: { 'Màn hình': '6.3" OLED, ProMotion 120Hz', Chip: 'A19 Pro', 'Camera sau': '3 camera 48MP: chính, góc siêu rộng, tele 4x', 'Camera trước': '18MP Center Stage', 'Cổng sạc': 'USB‑C', 'Kháng nước': 'IP68' },
  },
  {
    slug: 'iphone-17-lock', name: 'iPhone 17 Lock', category: 'iphone-lock', line: 'iPhone 17',
    price: 16990000, oldPrice: 18000000, storages: ['256GB'], sim: '2 sim vật lý', battery: 'Pin 100%', badges: ['Bán chạy'],
    image: '/products/iPhone 17.png',
    art: { cam: 'vert', color: '#D9CCE8' },
    specs: { 'Màn hình': '6.3" OLED, ProMotion 120Hz', Chip: 'A19', 'Camera sau': '2 camera 48MP: chính, góc siêu rộng', 'Camera trước': '18MP Center Stage', 'Cổng sạc': 'USB‑C', 'Kháng nước': 'IP68' },
  },
  {
    slug: 'iphone-17-air-lock', name: 'iPhone 17 Air Lock', category: 'iphone-lock', line: 'iPhone 17',
    price: 16990000, oldPrice: 17000000, storages: ['256GB'], sim: 'Nguyên bản', battery: 'Pin 100%', badges: ['Bán chạy'],
    image: '/products/iPhone Air.png',
    art: { cam: 'air', color: '#C7D9EA' },
    specs: { 'Màn hình': '6.5" OLED, ProMotion 120Hz', Chip: 'A19 Pro', 'Camera sau': '48MP Fusion', 'Camera trước': '18MP Center Stage', 'Cổng sạc': 'USB‑C', 'Kháng nước': 'IP68' },
  },
  {
    slug: 'iphone-16-pro-max-lock', name: 'iPhone 16 Pro Max Lock', category: 'iphone-lock', line: 'iPhone 16',
    price: 17990000, oldPrice: 21990000, storages: ['256GB'], sim: '2 sim vật lý', battery: 'Pin 9x–100%', badges: ['Bán chạy'],
    image: '/products/iPhone 16ProMax.png',
    art: { cam: 'tri', color: '#C2A88E' },
    specs: { 'Màn hình': '6.9" OLED, ProMotion 120Hz', Chip: 'A18 Pro', 'Camera sau': '48MP chính, 48MP góc siêu rộng, 12MP tele 5x', 'Camera trước': '12MP', 'Cổng sạc': 'USB‑C', 'Kháng nước': 'IP68' },
  },
  {
    slug: 'iphone-16-pro-lock', name: 'iPhone 16 Pro Lock', category: 'iphone-lock', line: 'iPhone 16',
    price: 14490000, oldPrice: 17990000, storages: ['256GB'], sim: '2 sim vật lý', battery: 'Pin 9x–100%', badges: ['Bán chạy'],
    image: '/products/iPhone 16 Pro.jpg',
    art: { cam: 'tri', color: '#BAB5AB' },
    specs: { 'Màn hình': '6.3" OLED, ProMotion 120Hz', Chip: 'A18 Pro', 'Camera sau': '48MP chính, 48MP góc siêu rộng, 12MP tele 5x', 'Camera trước': '12MP', 'Cổng sạc': 'USB‑C', 'Kháng nước': 'IP68' },
  },
  {
    slug: 'iphone-15-pro-max-lock', name: 'iPhone 15 Pro Max Lock', category: 'iphone-lock', line: 'iPhone 15',
    price: 14990000, oldPrice: 17000000, storages: ['256GB', '512GB'], sim: '2 sim vật lý', battery: 'Pin 8x–100%', badges: ['Bán chạy'],
    image: '/products/iPhone 15ProMax.png',
    art: { cam: 'tri', color: '#3F4A5B' },
    specs: { 'Màn hình': '6.7" OLED, ProMotion 120Hz', Chip: 'A17 Pro', 'Camera sau': '48MP chính, 12MP góc siêu rộng, 12MP tele 5x', 'Camera trước': '12MP', 'Cổng sạc': 'USB‑C', 'Kháng nước': 'IP68' },
  },

  // ---------- iPhone Quốc tế ----------
  {
    slug: 'iphone-18-pro-max-quoc-te', name: 'iPhone 18 Pro Max Quốc tế', category: 'iphone-quoc-te', line: 'iPhone 18',
    price: 40990000, storages: ['256GB'], sim: 'Mọi nhà mạng', battery: 'Pin zin 100%', condition: 'Máy new, chưa qua sử dụng', badges: ['Mới về'],
    image: '/products/iPhone 18ProMax.png',
    art: { cam: 'bar', color: '#CDD0D6' },
    specs: { 'Cổng sạc': 'USB‑C', 'Kháng nước': 'IP68' },
  },
  {
    slug: 'iphone-16-pro-max-quoc-te', name: 'iPhone 16 Pro Max Quốc tế', category: 'iphone-quoc-te', line: 'iPhone 16',
    price: 18990000, storages: [], sim: 'Mọi nhà mạng', badges: [],
    image: '/products/iPhone 16ProMax.png',
    art: { cam: 'tri', color: '#BAB5AB' },
    specs: { 'Màn hình': '6.9" OLED, ProMotion 120Hz', Chip: 'A18 Pro', 'Camera sau': '48MP chính, 48MP góc siêu rộng, 12MP tele 5x', 'Camera trước': '12MP', 'Cổng sạc': 'USB‑C', 'Kháng nước': 'IP68' },
  },

  // ---------- iPad ----------
  {
    slug: 'ipad-air-m4-11-inch', name: 'iPad Air M4 11 inch (2026)', category: 'ipad', line: 'iPad Air',
    price: 16990000, oldPrice: 18490000, storages: ['128GB'], connectivity: 'Chỉ Wi‑Fi', condition: 'Hình thức new', badges: [],
    image: '/products/ipad-air-m4-11-inch.jpg',
    art: { cam: 'one', color: '#B9C9DA' },
    specs: { 'Màn hình': '11" Liquid Retina', Chip: 'Apple M4', 'Cổng': 'USB‑C', 'Bút hỗ trợ': 'Apple Pencil Pro, Pencil USB‑C' },
  },
  {
    slug: 'ipad-pro-m1-12-9-inch', name: 'iPad Pro M1 12.9 inch', category: 'ipad', line: 'iPad Pro',
    price: 14990000, oldPrice: 17990000, storages: ['128GB', '256GB'], connectivity: 'Wi‑Fi và Cellular', condition: 'Hình thức 98–99%', badges: ['Hot nhất'],
    image: '/products/iPad Pro M1.png',
    art: { cam: 'pro', color: '#6B6C70' },
    specs: { 'Màn hình': '12.9" Liquid Retina XDR (mini‑LED), 120Hz', Chip: 'Apple M1', 'Camera sau': '12MP chính, 10MP góc siêu rộng, LiDAR', 'Cổng': 'USB‑C Thunderbolt', 'Bút hỗ trợ': 'Apple Pencil 2, Pencil USB‑C' },
  },
  {
    slug: 'ipad-pro-m1-11-inch', name: 'iPad Pro M1 11 inch', category: 'ipad', line: 'iPad Pro',
    price: 14990000, oldPrice: 16990000, storages: ['128GB'], connectivity: 'Wi‑Fi + Cellular (lắp SIM)', condition: 'Hình thức 98–99%', badges: [],
    image: '/products/iPad Pro M1.png',
    art: { cam: 'pro', color: '#E3E4E5' },
    specs: { 'Màn hình': '11" Liquid Retina, 120Hz', Chip: 'Apple M1', 'Camera sau': '12MP chính, 10MP góc siêu rộng, LiDAR', 'Cổng': 'USB‑C Thunderbolt', 'Bút hỗ trợ': 'Apple Pencil 2, Pencil USB‑C' },
  },
  {
    slug: 'ipad-pro-2020-12-9-inch', name: 'iPad Pro 2020 12.9 inch', category: 'ipad', line: 'iPad Pro',
    price: 12990000, storages: ['128GB'], connectivity: 'Chỉ Wi‑Fi', condition: 'Hình thức đẹp 99%', badges: [],
    image: '/products/ipad-pro-2020-12-9-inch.jpg',
    art: { cam: 'pro', color: '#6B6C70' },
    specs: { 'Màn hình': '12.9" Liquid Retina, 120Hz', Chip: 'A12Z Bionic', 'Camera sau': '12MP chính, 10MP góc siêu rộng, LiDAR', 'Cổng': 'USB‑C', 'Bút hỗ trợ': 'Apple Pencil 2, Pencil USB‑C' },
  },
  {
    slug: 'ipad-pro-2020-11-inch', name: 'iPad Pro 2020 11 inch', category: 'ipad', line: 'iPad Pro',
    price: 12290000, oldPrice: 13890000, storages: ['128GB'], connectivity: 'Wi‑Fi + Cellular (lắp SIM)', condition: 'Hình thức 98–99%', badges: [],
    image: '/products/iPad Pro 2020 11inch.png',
    art: { cam: 'pro', color: '#E3E4E5' },
    specs: { 'Màn hình': '11" Liquid Retina, 120Hz', Chip: 'A12Z Bionic', 'Camera sau': '12MP chính, 10MP góc siêu rộng, LiDAR', 'Cổng': 'USB‑C', 'Bút hỗ trợ': 'Apple Pencil 2, Pencil USB‑C' },
  },
  {
    slug: 'ipad-pro-2018-12-9-inch', name: 'iPad Pro 2018 12.9 inch', category: 'ipad', line: 'iPad Pro',
    price: 9790000, oldPrice: 11590000, storages: ['64GB'], connectivity: 'Chỉ Wi‑Fi', condition: 'Hình thức 98–99%', badges: [],
    image: '/products/iPad Pro 2018.png',
    art: { cam: 'one', color: '#6B6C70' },
    specs: { 'Màn hình': '12.9" Liquid Retina, 120Hz', Chip: 'A12X Bionic', 'Camera sau': '12MP', 'Cổng': 'USB‑C', 'Bút hỗ trợ': 'Apple Pencil 2, Pencil USB‑C' },
  },
  {
    slug: 'ipad-air-5', name: 'iPad Air 5', category: 'ipad', line: 'iPad Air',
    price: 8990000, storages: ['64GB', '256GB'], connectivity: 'Wi‑Fi và Cellular', condition: 'Hình thức 98–99%', badges: ['Bán chạy'],
    image: '/products/iPad Air 5.jpg',
    art: { cam: 'one', color: '#7F9CC0' },
    specs: { 'Màn hình': '10.9" Liquid Retina', Chip: 'Apple M1', 'Camera sau': '12MP', 'Cổng': 'USB‑C', 'Bút hỗ trợ': 'Apple Pencil 2, Pencil USB‑C' },
  },
  {
    slug: 'ipad-air-4', name: 'iPad Air 4', category: 'ipad', line: 'iPad Air',
    price: 7390000, oldPrice: 9890000, storages: ['64GB', '256GB'], connectivity: 'Wi‑Fi và Cellular', condition: 'Hình thức 98–99%', badges: ['Bán chạy'],
    image: '/products/iPad Air 4.png',
    art: { cam: 'one', color: '#8FB3C9' },
    specs: { 'Màn hình': '10.9" Liquid Retina', Chip: 'A14 Bionic', 'Camera sau': '12MP', 'Cổng': 'USB‑C', 'Bút hỗ trợ': 'Apple Pencil 2, Pencil USB‑C' },
  },
  {
    slug: 'ipad-gen-9', name: 'iPad Gen 9 (2021)', category: 'ipad', line: 'iPad Gen',
    price: 4990000, oldPrice: 5990000, storages: ['64GB', '256GB'], connectivity: 'Wi‑Fi + Cellular (lắp SIM)', condition: 'Hình thức 98–99%', badges: [],
    image: '/products/iPad Gen 9.png',
    art: { cam: 'one', color: '#E2E3E4', home: true },
    specs: { 'Màn hình': '10.2" Retina', Chip: 'A13 Bionic', 'Camera sau': '8MP', 'Cổng': 'Lightning', 'Bút hỗ trợ': 'Apple Pencil 1' },
  },
  {
    slug: 'ipad-pro-10-5-2017', name: 'iPad Pro 10.5 inch 2017', category: 'ipad', line: 'iPad Pro',
    price: 4600000, oldPrice: 5590000, storages: ['64GB', '256GB'], connectivity: 'Wi‑Fi + Cellular (lắp SIM)', condition: 'Hình thức 98–99%', badges: [],
    image: '/products/iPad Pro 2017.png',
    art: { cam: 'one', color: '#6B6C70', home: true },
    specs: { 'Màn hình': '10.5" Retina, ProMotion 120Hz', Chip: 'A10X Fusion', 'Camera sau': '12MP', 'Cổng': 'Lightning', 'Bút hỗ trợ': 'Apple Pencil 1' },
  },
  {
    slug: 'ipad-gen-8-128gb', name: 'iPad Gen 8 (2020)', category: 'ipad', line: 'iPad Gen',
    price: 3990000, oldPrice: 4990000, storages: ['128GB'], connectivity: 'Wi‑Fi + Cellular (lắp SIM)', condition: 'Hình thức 98–99%', badges: [],
    image: '/products/iPad Gen 8.jpg',
    art: { cam: 'one', color: '#E2E3E4', home: true },
    specs: { 'Màn hình': '10.2" Retina', Chip: 'A12 Bionic', 'Camera sau': '8MP', 'Cổng': 'Lightning', 'Bút hỗ trợ': 'Apple Pencil 1' },
  },
  {
    slug: 'ipad-air-3', name: 'iPad Air 3 (2019)', category: 'ipad', line: 'iPad Air',
    price: 3490000, oldPrice: 4290000, storages: ['64GB'], connectivity: 'Wi‑Fi + Cellular (lắp SIM)', condition: 'Hình thức 98–99%', badges: [],
    image: '/products/iPad Air 3.png',
    art: { cam: 'one', color: '#E9D9C3', home: true },
    specs: { 'Màn hình': '10.5" Retina', Chip: 'A12 Bionic', 'Camera sau': '8MP', 'Cổng': 'Lightning', 'Bút hỗ trợ': 'Apple Pencil 1' },
  },
  {
    slug: 'ipad-gen-7', name: 'iPad Gen 7', category: 'ipad', line: 'iPad Gen',
    price: 1990000, oldPrice: 2900000, storages: ['32GB'], connectivity: 'Wi‑Fi + Cellular (lắp SIM)', condition: 'Hình thức 98–99%', badges: [],
    image: '/products/iPad Gen 7.png',
    art: { cam: 'one', color: '#E2E3E4', home: true },
    specs: { 'Màn hình': '10.2" Retina', Chip: 'A10 Fusion', 'Camera sau': '8MP', 'Cổng': 'Lightning', 'Bút hỗ trợ': 'Apple Pencil 1' },
  },
];

export const getProduct = (slug) => PRODUCTS.find((p) => p.slug === slug);
export const byCategory = (cat) => PRODUCTS.filter((p) => p.category === cat);
export const minPrice = (list) => Math.min(...list.map((p) => p.price));

// Khoảng giá cho thanh kéo ở trang Tính trả góp, tự co giãn theo máy rẻ nhất / đắt nhất
const allPrices = PRODUCTS.map((p) => p.price);
export const PRICE_MIN = Math.min(1000000, Math.floor(Math.min(...allPrices) / 1e6) * 1e6);
export const PRICE_MAX = Math.max(45000000, Math.ceil(Math.max(...allPrices) / 5e6) * 5e6);

// Phần trăm giảm, chỉ tính khi có giá cũ cao hơn ít nhất 1%
export function discount(p) {
  if (!p.oldPrice || p.oldPrice <= p.price) return null;
  const pct = Math.round((1 - p.price / p.oldPrice) * 100);
  return pct >= 1 ? { pct, save: p.oldPrice - p.price } : null;
}

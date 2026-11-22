import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import DeviceArt from '@/components/DeviceArt';
import ProductCard from '@/components/ProductCard';
import ArticleCard from '@/components/ArticleCard';
import { PRODUCTS, CATEGORIES, getProduct, discount } from '@/data/products';
import { getArticle } from '@/data/articles';
import { SHOP } from '@/data/shop';
import { vnd } from '@/lib/format';

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const p = getProduct(params.slug);
  if (!p) return {};
  return { title: p.name, description: `${p.name} giá từ ${vnd(p.price)} tại ${SHOP.name}. ${SHOP.address}.` };
}

const PROMISE_ALL = [
  'Thanh toán tiền mặt giảm đến 500K',
  'Tặng kèm bộ phụ kiện chuẩn trị giá 686K',
];
const PROMISE = {
  'iphone-lock': ['Fix sim trọn đời, kể cả sau khi cập nhật iOS', 'Kiểm iCloud, pin, sóng sim trước khi giao', 'Free ship toàn quốc, kiểm máy rồi mới thanh toán', 'Trả góp 0%', ...PROMISE_ALL],
  'iphone-quoc-te': ['Dùng mọi nhà mạng, cập nhật iOS thoải mái', 'Kiểm iCloud, pin trước khi giao', 'Free ship toàn quốc, kiểm máy rồi mới thanh toán', 'Trả góp 0%', ...PROMISE_ALL],
  ipad: ['Kiểm iCloud và MDM trước khi giao', 'Bảo hành phần cứng theo chính sách ghi trên hoá đơn', 'Free ship toàn quốc, kiểm máy rồi mới thanh toán', 'Trả góp 0%', ...PROMISE_ALL],
};
const READS = {
  'iphone-lock': ['so-sanh-iphone-lock-vs-quoc-te', 'kiem-tra-iphone-cu', 'tinh-trang-pin-iphone'],
  'iphone-quoc-te': ['so-sanh-iphone-lock-vs-quoc-te', 'kiem-tra-iphone-cu', 'tinh-trang-pin-iphone'],
  ipad: ['chon-dong-ipad-phu-hop', 'kiem-tra-icloud-activation-lock-ipad', 'apple-pencil-cho-ipad'],
};

export default function ProductPage({ params }) {
  const p = getProduct(params.slug);
  if (!p) notFound();
  const cat = CATEGORIES[p.category];
  const d = discount(p);
  const facts = [
    ['Dung lượng', p.storages.length ? p.storages.join(' / ') : 'Hỏi shop'],
    p.sim && ['Sim', p.sim],
    p.connectivity && ['Kết nối', p.connectivity],
    p.battery && ['Pin', p.battery.replace(/^Pin\s*/, '').replace(/^./, (c) => c.toUpperCase())],
    p.condition && ['Tình trạng', p.condition],
  ].filter(Boolean);
  const related = PRODUCTS.filter((x) => x.slug !== p.slug && (x.category === 'ipad') === (p.category === 'ipad'))
    .sort((a, b) => Math.abs(a.price - p.price) - Math.abs(b.price - p.price)).slice(0, 4);
  const tone = p.category === 'iphone-lock' ? 'amber' : p.category === 'iphone-quoc-te' ? 'green' : '';

  return (
    <div className="wrap">
      <div className="crumbs"><Link href="/">Trang chủ</Link> › <Link href={cat.href}>{cat.label}</Link> › <span>{p.name}</span></div>
      <div className="pd">
        <div className={`pd-art${p.image ? ' has-img' : ''}`} style={{ '--tint': p.art.color }}>
          <DeviceArt product={p} priority />
          {!p.image && <span className="note">Hình minh hoạ. Gọi shop để xin ảnh, video máy thật.</span>}
        </div>
        <div className="pd-info">
          <div className="pd-tags">
            <span className={`pill ${tone}`}>{cat.label}</span>
            {p.badges.map((b) => <span key={b} className="pill red">{b}</span>)}
            <span className="pill">Trả góp 0%</span>
          </div>
          <h1>{p.name}</h1>
          <div className="pd-price">
            <div className="pd-price-main">
              <span className="eyebrow">Giá từ</span>
              <strong>{vnd(p.price)}</strong>
              {d && <><s>{vnd(p.oldPrice)}</s><span className="save">Rẻ hơn {vnd(d.save)} (−{d.pct}%)</span></>}
            </div>
            <div className="pd-price-note">Giá tuỳ dung lượng, màu và tình trạng máy có sẵn. Gọi {SHOP.phoneDisplay} hoặc {SHOP.phone2Display} để báo giá chính xác.</div>
          </div>
          <div className="facts">
            {facts.map(([k, v]) => <div key={k} className="fact"><span>{k}</span><b>{v}</b></div>)}
          </div>
          <div className="pd-cta">
            <a href={`tel:${SHOP.phone}`} className="btn btn-red"><Icon name="call" size={18} /> Gọi {SHOP.phoneDisplay}</a>
            <a href={SHOP.zalo} target="_blank" rel="noopener noreferrer" className="btn btn-line"><Icon name="chat" size={18} /> Nhắn Zalo</a>
            <Link href={`/tra-gop?may=${p.slug}`} className="btn btn-soft wide"><Icon name="calc" size={18} /> Tính trả góp máy này</Link>
          </div>
          <ul className="checklist">
            {PROMISE[p.category].map((t) => <li key={t}><Icon name="check" size={18} />{t}</li>)}
          </ul>
        </div>
      </div>

      <section className="sec">
        <div className="sec-head"><div><h2>Thông số</h2></div></div>
        <table className="specs">
          <tbody>
            {Object.entries(p.specs).map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}
            {facts.map(([k, v]) => <tr key={'f' + k}><th>{k}</th><td>{v}</td></tr>)}
          </tbody>
        </table>
      </section>

      <section className="sec">
        <div className="sec-head"><div><h2>Máy cùng tầm giá</h2></div></div>
        <div className="pgrid">{related.map((x) => <ProductCard key={x.slug} product={x} />)}</div>
      </section>

      <section className="sec">
        <div className="sec-head"><div><h2>Nên đọc trước khi mua</h2></div></div>
        <div className="agrid">{READS[p.category].map((s) => <ArticleCard key={s} a={getArticle(s)} />)}</div>
      </section>
    </div>
  );
}

import Link from 'next/link';
import Icon from '@/components/Icon';
import DeviceArt from '@/components/DeviceArt';
import ProductCard from '@/components/ProductCard';
import ArticleCard from '@/components/ArticleCard';
import StoreBlock from '@/components/StoreBlock';
import { PRODUCTS, CATEGORIES, byCategory, minPrice, getProduct } from '@/data/products';
import { ARTICLES } from '@/data/articles';
import { PROMISES, STEPS, SHOP } from '@/data/shop';
import { vnd } from '@/lib/format';

export default function Home() {
  const lock = getProduct('iphone-18-pro-max-lock');
  const qt = getProduct('iphone-18-pro-max-quoc-te');
  const iphones = PRODUCTS.filter((p) => p.category !== 'ipad').sort((a, b) => b.badges.length - a.badges.length).slice(0, 8);
  const ipads = byCategory('ipad').slice(0, 8);
  const cats = [
    { key: 'iphone-lock', icon: 'lock', text: 'Ghép sim ổn định, fix sim trọn đời.' },
    { key: 'iphone-quoc-te', icon: 'globe', text: 'Dùng mọi nhà mạng, giữ giá tốt.' },
    { key: 'ipad', icon: 'tablet', text: 'Đã kiểm iCloud và MDM trước khi giao.' },
  ];

  return (
    <>
      <section className="wrap hero">
        <div>
          <span className="loc"><Icon name="map" size={16} /> P. An Lạc, TP.HCM · Ship toàn quốc</span>
          <h1>Máy lướt giá tốt.<br /><em>Giá cả minh bạch.</em></h1>
          <p className="hero-lede">iPhone Lock, iPhone Quốc tế và iPad cũ. Kiểm iCloud, MDM, pin trước khi giao. Xem máy tận tay rồi mới trả tiền.</p>
          <div className="hero-cta">
            <Link href="/iphone" className="btn btn-red">Xem máy đang có <Icon name="arrowR" size={18} /></Link>
            <Link href="/tra-gop" className="btn btn-line"><Icon name="calc" size={18} /> Tính trả góp</Link>
          </div>
          <div className="hero-facts">
            <span><Icon name="check" size={16} /> Free ship toàn quốc</span>
            <span><Icon name="check" size={16} /> Fix sim trọn đời</span>
            <span><Icon name="check" size={16} /> Trả góp 0%</span>
          </div>
        </div>

        <div className="ticket" aria-label="Phiếu so giá iPhone 18 Pro Max">
          <div className="ticket-top">
            <DeviceArt product={lock} priority />
            <div>
              <span className="eyebrow">Phiếu so giá</span>
              <h3>iPhone 18 Pro Max 256GB</h3>
              <p>Cùng một máy, pin zin 100%.<br />Chọn Lock để tiết kiệm hơn.</p>
            </div>
          </div>
          <div className="ticket-rows">
            <div className="trow qt"><span>Bản Quốc tế (máy new)</span><b>{vnd(qt.price)}</b></div>
            <div className="trow lock"><span>Bản Lock, 2 sim 2 sóng</span><b>{vnd(lock.price)}</b></div>
          </div>
          <Link href={`/san-pham/${lock.slug}`} className="ticket-save">
            <span>Bạn đã tiết kiệm</span><b>{vnd(qt.price - lock.price)}</b>
          </Link>
        </div>
      </section>

      <section className="wrap">
        <div className="cats">
          {cats.map((c) => {
            const list = byCategory(c.key);
            return (
              <Link key={c.key} href={CATEGORIES[c.key].href} className="cat">
                <div className="cat-top"><Icon name={c.icon} size={24} /><span className="eyebrow">{list.length} mẫu</span></div>
                <h3>{CATEGORIES[c.key].label}</h3>
                <p>{c.text}</p>
                <strong>Từ {vnd(minPrice(list))}</strong>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head">
          <div><h2>iPhone đang có</h2><p>Giá cập nhật theo ngày. Gọi shop để giữ máy.</p></div>
          <Link href="/iphone" className="link">Xem tất cả iPhone <Icon name="chevR" size={16} /></Link>
        </div>
        <div className="pgrid">{iphones.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
      </section>

      <section className="band">
        <div className="wrap promises">
          {PROMISES.map((p) => (
            <div key={p.title} className="promise"><Icon name={p.icon} size={28} /><b>{p.title}</b><span>{p.text}</span></div>
          ))}
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head">
          <div><h2>iPad cũ giá tốt</h2><p>Từ iPad Gen 7 cho học online đến iPad Pro M1 để vẽ.</p></div>
          <Link href="/ipad" className="link">Xem tất cả iPad <Icon name="chevR" size={16} /></Link>
        </div>
        <div className="pgrid">{ipads.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
      </section>

      <section className="wrap sec" id="lock">
        <div className="sec-head">
          <div><h2>Lock hay Quốc tế?</h2><p>Tóm tắt nhanh để chọn đúng máy.</p></div>
          <Link href="/cam-nang/so-sanh-iphone-lock-vs-quoc-te" className="link">Đọc bài đầy đủ <Icon name="chevR" size={16} /></Link>
        </div>
        <div className="compare">
          <table>
            <thead><tr><th></th><th>iPhone Lock</th><th>iPhone Quốc tế</th></tr></thead>
            <tbody>
              <tr><th>Giá</th><td>Rẻ hơn vài triệu đến hơn chục triệu</td><td>Cao hơn</td></tr>
              <tr><th>Dùng sim</th><td>Sim ghép, 2 sim 2 sóng tuỳ máy</td><td>Mọi nhà mạng</td></tr>
              <tr><th>Cập nhật iOS</th><td>Được, shop fix sim miễn phí trọn đời</td><td>Thoải mái</td></tr>
              <tr><th>Bán lại</th><td>Mất giá nhanh hơn</td><td>Giữ giá tốt</td></tr>
              <tr><th>Hợp với</th><td>Muốn máy đời cao, tiết kiệm</td><td>Dùng lâu dài, hay đi nước ngoài</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head"><div><h2>Mua máy ở {SHOP.name}</h2><p>Bốn bước, không cần đặt cọc online.</p></div></div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div key={s.title} className="step"><span className="n">0{i + 1}</span><b>{s.title}</b><p>{s.text}</p></div>
          ))}
        </div>
      </section>

      <section className="wrap sec">
        <div className="sec-head">
          <div><h2>Cẩm nang</h2><p>Kinh nghiệm chọn máy, kiểm máy và dùng máy bền.</p></div>
          <Link href="/cam-nang" className="link">Tất cả bài viết <Icon name="chevR" size={16} /></Link>
        </div>
        <div className="agrid">{ARTICLES.slice(0, 4).map((a) => <ArticleCard key={a.slug} a={a} />)}</div>
      </section>

      <section className="wrap sec" id="cua-hang">
        <div className="sec-head"><div><h2>Ghé cửa hàng</h2><p>Xem máy tận tay, kiểm tra thoải mái trước khi mua.</p></div></div>
        <StoreBlock />
      </section>
    </>
  );
}

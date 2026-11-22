import Link from 'next/link';
import { SHOP, mapsLink } from '@/data/shop';
import { ARTICLES } from '@/data/articles';

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap foot-grid">
        <div>
          <div className="brand">
            <span className="brand-tile"><img src="/logo.svg" alt="" width="40" height="38" /></span>
            <span className="brand-text">{SHOP.name}<small>{SHOP.tagline}</small></span>
          </div>
          <p className="foot-addr">{SHOP.address}<br />{SHOP.hours}</p>
          <p className="foot-phone"><a href={`tel:${SHOP.phone}`}>{SHOP.phoneDisplay}</a><a href={`tel:${SHOP.phone2}`}>{SHOP.phone2Display}</a></p>
        </div>
        <div>
          <h4>Mua sắm</h4>
          <Link href="/iphone">Tất cả iPhone</Link>
          <Link href="/iphone?loai=lock">iPhone Lock</Link>
          <Link href="/iphone?loai=quoc-te">iPhone Quốc tế</Link>
          <Link href="/ipad">iPad cũ giá tốt</Link>
          <Link href="/tra-gop">Tính trả góp</Link>
        </div>
        <div>
          <h4>Cẩm nang</h4>
          {ARTICLES.slice(0, 4).map((a) => <Link key={a.slug} href={`/cam-nang/${a.slug}`}>{a.title}</Link>)}
        </div>
        <div>
          <h4>Liên hệ</h4>
          <a href={`tel:${SHOP.phone}`}>Gọi {SHOP.phoneDisplay}</a>
          <a href={`tel:${SHOP.phone2}`}>Gọi {SHOP.phone2Display}</a>
          <a href={SHOP.zalo} target="_blank" rel="noopener noreferrer">Nhắn Zalo</a>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer">Chỉ đường Google Maps</a>
          <Link href="/lien-he">Thông tin cửa hàng</Link>
        </div>
      </div>
      <div className="wrap foot-fine">
        <span>© 2026 {SHOP.name}. Website để xem máy, giá và cẩm nang. Mua hàng tại cửa hàng hoặc qua điện thoại.</span>
        <span>Giá có thể thay đổi theo ngày, gọi shop để xác nhận.</span>
      </div>
    </footer>
  );
}

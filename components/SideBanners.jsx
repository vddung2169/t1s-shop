import Link from 'next/link';
import DeviceArt from './DeviceArt';
import { SIDE_BANNERS } from '@/data/shop';
import { getProduct } from '@/data/products';

// Banner quảng cáo dọc 2 bên, sửa nội dung ở data/shop.js (SIDE_BANNERS)
function Banner({ side, b }) {
  if (!b) return null;
  const product = b.product && getProduct(b.product);
  return (
    <Link href={b.href} className={`side-ad side-ad-${side} ${b.image ? 'is-img' : `tone-${b.tone || 'dark'}`}`} aria-label={b.title}>
      {b.image ? (
        <img src={b.image} alt={b.title} />
      ) : (
        <>
          <span className="sa-eyebrow">{b.eyebrow}</span>
          <b className="sa-title">{b.title}</b>
          {product && <span className="sa-art"><DeviceArt product={{ ...product, slug: `ad-${side}-${product.slug}` }} /></span>}
          <strong className="sa-hl">{b.highlight}</strong>
          <span className="sa-text">{b.text}</span>
          <span className="sa-cta">{b.cta} →</span>
        </>
      )}
    </Link>
  );
}

export default function SideBanners() {
  return (
    <div className="side-ads" aria-label="Khuyến mãi">
      <Banner side="left" b={SIDE_BANNERS.left} />
      <Banner side="right" b={SIDE_BANNERS.right} />
    </div>
  );
}

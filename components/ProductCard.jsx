import Link from 'next/link';
import DeviceArt from './DeviceArt';
import { CATEGORIES, discount } from '@/data/products';
import { vnd } from '@/lib/format';

export default function ProductCard({ product: p }) {
  const d = discount(p);
  const cat = CATEGORIES[p.category];
  const facts = [p.storages.join(' / '), p.sim || p.connectivity, p.battery || p.condition].filter(Boolean);
  return (
    <Link href={`/san-pham/${p.slug}`} className="pcard">
      <div className={`pcard-art${p.image ? ' has-img' : ''}`} style={{ '--tint': p.art.color }}>
        <span className={`tag tag-${p.category}`}>{cat.short}</span>
        {d && <span className="stamp">−{d.pct}%</span>}
        <DeviceArt product={p} />
      </div>
      <div className="pcard-body">
        {p.badges.length > 0 && <div className="pcard-badges">{p.badges.map((b) => <span key={b} className="badge">{b}</span>)}</div>}
        <h3>{p.name}</h3>
        <p className="pcard-facts">{facts.join(' · ')}</p>
      </div>
      <div className="pcard-price">
        <div>
          <span className="from">Từ</span> <strong>{vnd(p.price)}</strong>
          {d && <s>{vnd(p.oldPrice)}</s>}
        </div>
        <span className="go" aria-hidden="true">→</span>
      </div>
    </Link>
  );
}

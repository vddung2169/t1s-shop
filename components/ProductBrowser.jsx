'use client';
import { useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS, discount } from '@/data/products';
import { norm } from '@/lib/format';

const priceBand = (p) => (p.price < 5e6 ? 'duoi-5' : p.price < 10e6 ? '5-10' : p.price < 20e6 ? '10-20' : 'tren-20');
const PRICE = { key: 'gia', label: 'Mức giá', options: [['duoi-5', 'Dưới 5 triệu'], ['5-10', '5–10 triệu'], ['10-20', '10–20 triệu'], ['tren-20', 'Trên 20 triệu']], get: priceBand };

const KINDS = {
  iphone: {
    filter: (p) => p.category !== 'ipad',
    groups: [
      { key: 'loai', label: 'Phiên bản', options: [['lock', 'Lock'], ['quoc-te', 'Quốc tế']], get: (p) => (p.category === 'iphone-lock' ? 'lock' : 'quoc-te') },
      { key: 'dong', label: 'Dòng máy', options: [['iPhone 18', 'iPhone 18'], ['iPhone 17', 'iPhone 17'], ['iPhone 16', 'iPhone 16'], ['iPhone 15', 'iPhone 15']], get: (p) => p.line },
      PRICE,
    ],
  },
  ipad: {
    filter: (p) => p.category === 'ipad',
    groups: [
      { key: 'dong', label: 'Dòng máy', options: [['iPad Pro', 'iPad Pro'], ['iPad Air', 'iPad Air'], ['iPad Gen', 'iPad Gen']], get: (p) => p.line },
      { key: 'ketnoi', label: 'Kết nối', options: [['wifi', 'Chỉ Wi‑Fi'], ['cell', 'Có Cellular']], get: (p) => (/cellular/i.test(p.connectivity) ? 'cell' : 'wifi') },
      { key: 'dl', label: 'Dung lượng', options: [['32GB', '32GB'], ['64GB', '64GB'], ['128GB', '128GB'], ['256GB', '256GB']], get: (p) => p.storages },
      PRICE,
    ],
  },
  search: { filter: () => true, groups: [PRICE] },
};

const SORTS = [
  ['hot', 'Nổi bật'],
  ['asc', 'Giá thấp đến cao'],
  ['desc', 'Giá cao đến thấp'],
  ['deal', 'Giảm nhiều nhất'],
];

// Bộ lọc dạng thanh ngang. Mỗi nhóm: { key, label, options: [[giá trị, nhãn]], get: (sản phẩm) => giá trị }
export default function ProductBrowser({ kind, initial = {}, query = '' }) {
  const { groups } = KINDS[kind];
  const products = useMemo(() => {
    const q = norm(query).replace(/\s/g, '');
    return PRODUCTS.filter(KINDS[kind].filter).filter((p) => !q || norm(p.name).replace(/\s/g, '').includes(q));
  }, [kind, query]);
  const [sel, setSel] = useState(() => Object.fromEntries(groups.map((g) => [g.key, initial[g.key] || 'all'])));
  const [sort, setSort] = useState('hot');

  const list = useMemo(() => {
    const r = products.filter((p) => groups.every((g) => {
      if (sel[g.key] === 'all') return true;
      const v = g.get(p);
      return Array.isArray(v) ? v.includes(sel[g.key]) : v === sel[g.key];
    }));
    const pct = (p) => discount(p)?.pct || 0;
    const by = {
      hot: (a, b) => b.badges.length - a.badges.length,
      asc: (a, b) => a.price - b.price,
      desc: (a, b) => b.price - a.price,
      deal: (a, b) => pct(b) - pct(a),
    };
    return [...r].sort(by[sort]);
  }, [products, groups, sel, sort]);

  return (
    <div>
      <div className="filterbar">
        {groups.map((g) => (
          <div className="fgroup" key={g.key}>
            <span className="flabel">{g.label}</span>
            <div className="seg" role="group" aria-label={g.label}>
              {[['all', 'Tất cả'], ...g.options].map(([v, l]) => (
                <button key={v} type="button" className={sel[g.key] === v ? 'on' : ''} aria-pressed={sel[g.key] === v}
                  onClick={() => setSel({ ...sel, [g.key]: v })}>{l}</button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="list-bar">
        <span><b>{list.length}</b> máy</span>
        <label>
          <span className="sr">Sắp xếp</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            {SORTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </label>
      </div>
      {list.length ? (
        <div className="pgrid">{list.map((p) => <ProductCard key={p.slug} product={p} />)}</div>
      ) : (
        <div className="empty">
          <b>Chưa có máy khớp bộ lọc</b>
          <p>Bỏ bớt điều kiện hoặc gọi shop, máy mới về mỗi tuần.</p>
          <button type="button" className="btn btn-line" onClick={() => setSel(Object.fromEntries(groups.map((g) => [g.key, 'all'])))}>Xoá bộ lọc</button>
        </div>
      )}
    </div>
  );
}

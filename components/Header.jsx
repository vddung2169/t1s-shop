'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import { SHOP } from '@/data/shop';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import { vnd, norm } from '@/lib/format';

const NAV = [
  { href: '/iphone', label: 'iPhone' },
  { href: '/iphone?loai=lock', label: 'iPhone Lock' },
  { href: '/iphone?loai=quoc-te', label: 'iPhone Quốc tế' },
  { href: '/ipad', label: 'iPad' },
  { href: '/cam-nang', label: 'Cẩm nang' },
  { href: '/tra-gop', label: 'Tính trả góp' },
  { href: '/lien-he', label: 'Cửa hàng' },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => { setMenu(false); setOpen(false); }, [pathname]);

  const key = norm(q).replace(/\s/g, '');
  const hits = key ? PRODUCTS.filter((p) => norm(p.name).replace(/\s/g, '').includes(key)).slice(0, 6) : [];

  function submit(e) {
    e.preventDefault();
    if (!q.trim()) return;
    setOpen(false);
    router.push(`/tim-kiem?q=${encodeURIComponent(q.trim())}`);
  }

  return (
    <header className="site-head">
      <div className="head-top">
        <div className="wrap head-row">
          <Link href="/" className="brand" aria-label="T1s Shop, về trang chủ">
            <span className="brand-tile"><img src="/logo.svg" alt="" width="40" height="38" /></span>
            <span className="brand-text">T1s<small>{SHOP.tagline}</small></span>
          </Link>

          <form className="search" onSubmit={submit} role="search">
            <Icon name="search" size={18} />
            <input
              type="search"
              value={q}
              onChange={(e) => { setQ(e.target.value); setOpen(true); }}
              onFocus={() => setOpen(true)}
              onBlur={() => setTimeout(() => setOpen(false), 150)}
              placeholder="Tìm máy: 17 Pro Max, iPad Air…"
              aria-label="Tìm sản phẩm"
            />
            {open && key && (
              <div className="suggest">
                {hits.length ? hits.map((p) => (
                  <Link key={p.slug} href={`/san-pham/${p.slug}`} className="sug-row">
                    <span>{p.name}<small>{CATEGORIES[p.category].label}</small></span>
                    <b>{vnd(p.price)}</b>
                  </Link>
                )) : <p className="sug-empty">Chưa có máy khớp “{q}”. Gọi {SHOP.phoneDisplay} để hỏi hàng sắp về.</p>}
              </div>
            )}
          </form>

          <a className="head-call" href={`tel:${SHOP.phone}`}>
            <Icon name="call" size={18} />
            <span><small>Gọi / Zalo</small>{SHOP.phoneDisplay}</span>
          </a>
          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Mở menu">
            <Icon name={menu ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
      <nav className={`head-nav ${menu ? 'open' : ''}`} aria-label="Danh mục">
        <div className="wrap nav-row">
          {NAV.map((n) => {
            const base = n.href.split('?')[0];
            const active = n.href === base && pathname === base;
            return <Link key={n.href} href={n.href} className={active ? 'on' : ''} onClick={() => setMenu(false)}>{n.label}</Link>;
          })}
        </div>
      </nav>
    </header>
  );
}

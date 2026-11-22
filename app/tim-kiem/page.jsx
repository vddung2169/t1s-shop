import Link from 'next/link';
import ProductBrowser from '@/components/ProductBrowser';

export const metadata = { title: 'Tìm kiếm' };

export default function SearchPage({ searchParams }) {
  const q = (searchParams?.q || '').slice(0, 60);
  return (
    <div className="wrap">
      <div className="crumbs"><Link href="/">Trang chủ</Link> › <span>Tìm kiếm</span></div>
      <h1 className="page-title">Kết quả cho “{q}”</h1>
      <div className="sec" style={{ paddingTop: 20 }}>
        <ProductBrowser key={q} kind="search" query={q} />
      </div>
    </div>
  );
}

import Link from 'next/link';
import ProductBrowser from '@/components/ProductBrowser';

export const metadata = { title: 'iPhone Lock & Quốc tế' };

export default function IphonePage({ searchParams }) {
  const loai = ['lock', 'quoc-te'].includes(searchParams?.loai) ? searchParams.loai : 'all';
  const title = loai === 'lock' ? 'iPhone Lock' : loai === 'quoc-te' ? 'iPhone Quốc tế' : 'iPhone';
  return (
    <div className="wrap">
      <div className="crumbs"><Link href="/">Trang chủ</Link> › <span>{title}</span></div>
      <h1 className="page-title">{title}</h1>
      <p className="page-lede">Máy Lock được fix sim trọn đời, kể cả sau khi cập nhật iOS. Mọi máy đều kiểm iCloud, pin trước khi giao.</p>
      <div className="sec" style={{ paddingTop: 20 }}>
        <ProductBrowser key={loai} kind="iphone" initial={{ loai }} />
      </div>
    </div>
  );
}

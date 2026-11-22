import Link from 'next/link';
import ProductBrowser from '@/components/ProductBrowser';

export const metadata = { title: 'iPad cũ giá tốt' };

export default function IpadPage() {
  return (
    <div className="wrap">
      <div className="crumbs"><Link href="/">Trang chủ</Link> › <span>iPad</span></div>
      <h1 className="page-title">iPad cũ giá tốt</h1>
      <p className="page-lede">Kiểm iCloud và MDM trước khi giao. Bảo hành phần cứng tại cửa hàng theo chính sách ghi trên hoá đơn.</p>
      <div className="sec" style={{ paddingTop: 20 }}>
        <ProductBrowser kind="ipad" />
      </div>
    </div>
  );
}

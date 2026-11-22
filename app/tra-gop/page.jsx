import Link from 'next/link';
import InstallmentCalc from '@/components/InstallmentCalc';
import { getProduct, PRICE_MIN, PRICE_MAX } from '@/data/products';

export const metadata = { title: 'Tính trả góp' };

export default function InstallmentPage({ searchParams }) {
  const may = getProduct(searchParams?.may);
  const gia = Number(searchParams?.gia);
  const initial = may ? may.price : gia >= PRICE_MIN && gia <= PRICE_MAX ? gia : undefined;
  return (
    <div className="wrap">
      <div className="crumbs"><Link href="/">Trang chủ</Link> › <span>Tính trả góp</span></div>
      <h1 className="page-title">Tính trả góp</h1>
      <p className="page-lede">Chọn máy, hình thức và kỳ hạn để xem số tiền trả mỗi tháng. Thủ tục làm tại cửa hàng, website không nhận thanh toán.</p>
      <div className="sec" style={{ paddingTop: 20 }}>
        <InstallmentCalc initialPrice={initial} initialSlug={may?.slug} />
      </div>
    </div>
  );
}

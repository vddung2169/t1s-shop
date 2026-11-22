import Link from 'next/link';
import StoreBlock from '@/components/StoreBlock';
import Icon from '@/components/Icon';
import { PROMISES, STEPS } from '@/data/shop';

export const metadata = { title: 'Cửa hàng & liên hệ' };

export default function ContactPage() {
  return (
    <div className="wrap">
      <div className="crumbs"><Link href="/">Trang chủ</Link> › <span>Cửa hàng</span></div>
      <h1 className="page-title">Cửa hàng &amp; liên hệ</h1>
      <p className="page-lede">Gọi hoặc nhắn Zalo trước để shop giữ máy và hẹn giờ xem.</p>
      <div className="sec" style={{ paddingTop: 20 }}><StoreBlock /></div>
      <section className="sec">
        <div className="sec-head"><div><h2>Cam kết của shop</h2></div></div>
        <div className="steps">
          {PROMISES.map((p) => <div key={p.title} className="step"><Icon name={p.icon} size={28} /><b>{p.title}</b><p>{p.text}</p></div>)}
        </div>
      </section>
      <section className="sec">
        <div className="sec-head"><div><h2>Quy trình mua máy</h2></div></div>
        <div className="steps">
          {STEPS.map((s, i) => <div key={s.title} className="step"><span className="n">0{i + 1}</span><b>{s.title}</b><p>{s.text}</p></div>)}
        </div>
      </section>
    </div>
  );
}

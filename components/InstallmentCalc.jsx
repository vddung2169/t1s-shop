'use client';
import { useState } from 'react';
import { PRODUCTS, PRICE_MIN, PRICE_MAX } from '@/data/products';
import { vnd } from '@/lib/format';

// Lãi suất tham khảo theo tháng (tính trên số tiền vay, dư nợ ban đầu). Sửa theo đối tác thật của shop.
const PLANS = [
  { key: 'the', label: 'Thẻ tín dụng', rate: 0, minDown: 0, note: 'Lãi 0%. Ngân hàng có thể thu phí chuyển đổi trả góp, nhân viên báo trước khi quẹt thẻ.' },
  { key: 'tai-chinh', label: 'HD Saison / Mirae Asset', rate: 3.08, minDown: 20, note: 'Duyệt hồ sơ bằng CCCD. Cần trả trước tối thiểu 20% giá máy.' },
  { key: 'icloud', label: 'Qua iCloud', rate: 3.08, minDown: 20, note: 'Máy gắn iCloud của bên cho vay đến khi trả hết. Cần trả trước tối thiểu 20%.' },
];
const TERMS = [3, 6, 9, 12];

export default function InstallmentCalc({ initialPrice, initialSlug = '' }) {
  const [slug, setSlug] = useState(initialSlug);
  const [price, setPrice] = useState(initialPrice || 20000000);
  const [plan, setPlan] = useState(PLANS[1]);
  const [term, setTerm] = useState(12);
  const [downPct, setDownPct] = useState(20);

  const down = Math.round((price * Math.max(downPct, plan.minDown)) / 100 / 1000) * 1000;
  const loan = Math.max(price - down, 0);
  const interest = Math.round(loan * (plan.rate / 100) * term);
  const monthly = Math.round((loan + interest) / term / 100) * 100;

  function pick(s) {
    setSlug(s);
    const p = PRODUCTS.find((x) => x.slug === s);
    if (p) setPrice(p.price);
  }

  return (
    <div className="calc">
      <div className="calc-form">
        <label className="field">
          <span>Chọn máy</span>
          <select value={slug} onChange={(e) => pick(e.target.value)}>
            <option value="">Tự nhập giá</option>
            {PRODUCTS.map((p) => <option key={p.slug} value={p.slug}>{p.name} – {vnd(p.price)}</option>)}
          </select>
        </label>
        <label className="field">
          <span>Giá máy</span>
          <input type="range" min={PRICE_MIN} max={PRICE_MAX} step="10000" value={price} onChange={(e) => { setSlug(''); setPrice(+e.target.value); }} />
          <b className="num">{vnd(price)}</b>
        </label>
        <div className="field">
          <span>Hình thức</span>
          <div className="seg wrap-seg">
            {PLANS.map((p) => <button key={p.key} type="button" className={plan.key === p.key ? 'on' : ''} onClick={() => { setPlan(p); if (downPct < p.minDown) setDownPct(p.minDown); }}>{p.label}</button>)}
          </div>
        </div>
        <div className="field">
          <span>Kỳ hạn</span>
          <div className="seg">
            {TERMS.map((t) => <button key={t} type="button" className={term === t ? 'on' : ''} onClick={() => setTerm(t)}>{t} tháng</button>)}
          </div>
        </div>
        <label className="field">
          <span>Trả trước {Math.max(downPct, plan.minDown)}%</span>
          <input type="range" min={plan.minDown} max="70" step="5" value={Math.max(downPct, plan.minDown)} onChange={(e) => setDownPct(+e.target.value)} />
          <b className="num">{vnd(down)}</b>
        </label>
      </div>
      <div className="calc-result">
        <span className="eyebrow">Mỗi tháng trả khoảng</span>
        <strong className="calc-month">{vnd(monthly)}</strong>
        <dl>
          <dt>Trả trước</dt><dd>{vnd(down)}</dd>
          <dt>Số tiền vay</dt><dd>{vnd(loan)}</dd>
          <dt>Tiền lãi ước tính</dt><dd>{vnd(interest)}</dd>
          <dt>Tổng phải trả</dt><dd>{vnd(down + loan + interest)}</dd>
        </dl>
        <p className="calc-note">{plan.note}</p>
        <p className="calc-note">Số tiền chỉ mang tính tham khảo. Hồ sơ và mức lãi thực tế do đối tác tài chính duyệt.</p>
      </div>
    </div>
  );
}

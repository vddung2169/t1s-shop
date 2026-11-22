import Icon from './Icon';
import { SHOP } from '@/data/shop';

// Thanh liên hệ cố định ở cuối màn hình trên điện thoại
export default function CallBar() {
  return (
    <div className="callbar">
      <a href={`tel:${SHOP.phone}`} className="cb-call"><Icon name="call" size={18} /> Gọi {SHOP.phoneDisplay}</a>
      <a href={SHOP.zalo} target="_blank" rel="noopener noreferrer" className="cb-zalo"><Icon name="chat" size={18} /> Zalo</a>
    </div>
  );
}

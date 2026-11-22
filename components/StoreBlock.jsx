import Icon from './Icon';
import { SHOP, mapsLink, mapsEmbed } from '@/data/shop';

export default function StoreBlock() {
  return (
    <div className="store">
      <div className="store-info">
        <span className="eyebrow">Cửa hàng</span>
        <h3>{SHOP.name}</h3>
        <dl>
          <dt>Địa chỉ</dt><dd>{SHOP.address}</dd>
          <dt>Giờ mở cửa</dt><dd>{SHOP.hours}</dd>
          <dt>Hotline / Zalo</dt><dd><a href={`tel:${SHOP.phone}`}>{SHOP.phoneDisplay}</a></dd>
          <dt>Hotline 2</dt><dd><a href={`tel:${SHOP.phone2}`}>{SHOP.phone2Display}</a></dd>
        </dl>
        <div className="store-acts">
          <a href={`tel:${SHOP.phone}`} className="btn btn-red"><Icon name="call" size={18} /> Gọi ngay</a>
          <a href={SHOP.zalo} target="_blank" rel="noopener noreferrer" className="btn btn-soft"><Icon name="chat" size={18} /> Nhắn Zalo</a>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-soft"><Icon name="map" size={18} /> Chỉ đường</a>
        </div>
      </div>
      <iframe src={mapsEmbed} title={`Bản đồ ${SHOP.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
  );
}

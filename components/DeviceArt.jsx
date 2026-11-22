// Hiển thị ảnh thật (product.image) nếu có, không thì vẽ hình minh hoạ SVG.
function shade(hex, amt) {
  const n = parseInt(hex.slice(1), 16);
  let r = n >> 16, g = (n >> 8) & 255, b = n & 255;
  const t = amt < 0 ? 255 : 0, a = Math.abs(amt);
  r = Math.round(r + (t - r) * a); g = Math.round(g + (t - g) * a); b = Math.round(b + (t - b) * a);
  return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}

function Lens({ x, y, r, body }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r + 3.5} fill={shade(body, 0.38)} />
      <circle cx={x} cy={y} r={r} fill="#14161b" />
      <circle cx={x} cy={y} r={r * 0.55} fill="#232937" />
      <circle cx={x - r * 0.3} cy={y - r * 0.32} r={r * 0.2} fill="#8f9bb8" opacity=".75" />
    </g>
  );
}
const Flash = ({ x, y, r = 6 }) => <circle cx={x} cy={y} r={r} fill="#f4efe0" />;
const Dot = ({ x, y, r = 5 }) => <circle cx={x} cy={y} r={r} fill="#2b2f38" />;

function Shine({ id }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity=".38" />
        <stop offset=".45" stopColor="#fff" stopOpacity="0" />
        <stop offset="1" stopColor="#000" stopOpacity=".14" />
      </linearGradient>
    </defs>
  );
}

function Phone({ cam, color, id }) {
  const dk = shade(color, 0.16);
  const c = color;
  let module;
  switch (cam) {
    case 'bar':
      module = (<><rect x="16" y="16" width="168" height="118" rx="30" fill={dk} /><Lens x={50} y={48} r={17} body={c} /><Lens x={50} y={102} r={17} body={c} /><Lens x={98} y={75} r={17} body={c} /><Flash x={150} y={52} /><Dot x={150} y={98} r={7} /></>);
      break;
    case 'air':
      module = (<><rect x="18" y="22" width="164" height="54" rx="27" fill={dk} /><Lens x={48} y={49} r={16} body={c} /><Dot x={92} y={49} r={7} /><Flash x={148} y={49} /></>);
      break;
    case 'vert':
      module = (<><rect x="24" y="22" width="50" height="106" rx="25" fill={dk} /><Lens x={49} y={48} r={15} body={c} /><Lens x={49} y={102} r={15} body={c} /><Flash x={92} y={40} r={5.5} /></>);
      break;
    case 'diag':
      module = (<><rect x="22" y="22" width="86" height="86" rx="24" fill={dk} /><Lens x={46} y={46} r={15} body={c} /><Lens x={84} y={84} r={15} body={c} /><Flash x={86} y={43} r={5.5} /></>);
      break;
    default: // tri
      module = (<><rect x="20" y="20" width="104" height="104" rx="28" fill={dk} /><Lens x={48} y={48} r={16} body={c} /><Lens x={48} y={96} r={16} body={c} /><Lens x={95} y={72} r={16} body={c} /><Flash x={96} y={38} r={5.5} /><Dot x={96} y={106} r={6} /></>);
  }
  return (
    <svg viewBox="0 0 200 400" aria-hidden="true">
      <Shine id={id} />
      <rect x="6" y="6" width="188" height="388" rx="38" fill={shade(color, 0.24)} />
      <rect x="10" y="10" width="180" height="380" rx="34" fill={color} />
      <rect x="10" y="10" width="180" height="380" rx="34" fill={`url(#${id})`} />
      {module}
    </svg>
  );
}

function Tablet({ cam, color, id }) {
  const dk = shade(color, 0.16);
  return (
    <svg viewBox="0 0 280 390" aria-hidden="true">
      <Shine id={id} />
      <rect x="4" y="4" width="272" height="382" rx="28" fill={shade(color, 0.22)} />
      <rect x="8" y="8" width="264" height="374" rx="25" fill={color} />
      <rect x="8" y="8" width="264" height="374" rx="25" fill={`url(#${id})`} />
      {cam === 'pro' ? (
        <><rect x="22" y="22" width="62" height="62" rx="18" fill={dk} /><Lens x={42} y={42} r={10} body={color} /><Lens x={42} y={66} r={9} body={color} /><Dot x={66} y={42} r={5} /><Flash x={66} y={66} r={4.5} /></>
      ) : (
        <Lens x={38} y={38} r={10} body={color} />
      )}
    </svg>
  );
}

export default function DeviceArt({ product, priority = false }) {
  if (product.image) {
    return (
      <img
        src={encodeURI(product.image)}
        alt={product.name}
        className="device-img"
        loading={priority ? 'eager' : 'lazy'}
      />
    );
  }
  const id = 'sh-' + product.slug;
  const { cam, color } = product.art;
  return product.category === 'ipad'
    ? <Tablet cam={cam} color={color} id={id} />
    : <Phone cam={cam} color={color} id={id} />;
}

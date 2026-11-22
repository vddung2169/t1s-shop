import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap sec" style={{ textAlign: 'center' }}>
      <h1 className="page-title">Không tìm thấy trang</h1>
      <p className="page-lede" style={{ margin: '10px auto 20px' }}>Máy này có thể đã bán hoặc đường dẫn bị sai.</p>
      <Link href="/" className="btn btn-red">Về trang chủ</Link>
    </div>
  );
}

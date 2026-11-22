import Link from 'next/link';
import ArticleCard from '@/components/ArticleCard';
import { ARTICLES, ARTICLE_CATS } from '@/data/articles';

export const metadata = { title: 'Cẩm nang, mẹo & tin tức' };

export default function GuidesPage({ searchParams }) {
  const cat = ARTICLE_CATS[searchParams?.muc] ? searchParams.muc : 'all';
  const list = ARTICLES.filter((a) => cat === 'all' || a.cat === cat);
  return (
    <div className="wrap">
      <div className="crumbs"><Link href="/">Trang chủ</Link> › <span>Cẩm nang</span></div>
      <h1 className="page-title">Cẩm nang, mẹo &amp; tin tức</h1>
      <p className="page-lede">Kinh nghiệm chọn máy, kiểm máy và dùng máy bền từ kỹ thuật viên của shop.</p>
      <div className="sec" style={{ paddingTop: 20 }}>
        <div className="tabs">
          {[['all', 'Tất cả'], ...Object.entries(ARTICLE_CATS)].map(([k, l]) => (
            <Link key={k} href={k === 'all' ? '/cam-nang' : `/cam-nang?muc=${k}`} className={cat === k ? 'on' : ''}>{l}</Link>
          ))}
        </div>
        <div className="agrid">{list.map((a) => <ArticleCard key={a.slug} a={a} />)}</div>
      </div>
    </div>
  );
}

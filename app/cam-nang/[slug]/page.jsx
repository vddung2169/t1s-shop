import Link from 'next/link';
import { notFound } from 'next/navigation';
import Icon from '@/components/Icon';
import ArticleCard from '@/components/ArticleCard';
import { ARTICLES, ARTICLE_CATS, getArticle } from '@/data/articles';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }) {
  const a = getArticle(params.slug);
  return a ? { title: a.title, description: a.excerpt } : {};
}

export default function ArticlePage({ params }) {
  const a = getArticle(params.slug);
  if (!a) notFound();
  const more = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);
  return (
    <div className="wrap">
      <div className="crumbs"><Link href="/">Trang chủ</Link> › <Link href="/cam-nang">Cẩm nang</Link> › <span>{ARTICLE_CATS[a.cat]}</span></div>
      <article className="article">
        <span className="eyebrow">{ARTICLE_CATS[a.cat]}</span>
        <h1>{a.title}</h1>
        <p className="meta">{a.date} · {a.read} phút đọc</p>
        <div className={`article-cover cv-${a.cat}`}>{a.cover ? <img src={a.cover} alt={a.title} /> : <><Icon name={a.icon} size={72} /><span className="mark">{a.mark}</span></>}</div>
        <div className="prose" dangerouslySetInnerHTML={{ __html: a.body }} />
      </article>
      <section className="sec">
        <div className="sec-head"><div><h2>Bài khác</h2></div></div>
        <div className="agrid">{more.map((x) => <ArticleCard key={x.slug} a={x} />)}</div>
      </section>
    </div>
  );
}

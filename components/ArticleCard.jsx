import Link from 'next/link';
import Icon from './Icon';
import { ARTICLE_CATS } from '@/data/articles';

export default function ArticleCard({ a }) {
  return (
    <Link href={`/cam-nang/${a.slug}`} className="acard">
      <div className={`acard-cover cv-${a.cat}`}>
        {a.cover ? <img src={a.cover} alt="" loading="lazy" /> : <><Icon name={a.icon} size={44} /><span className="mark">{a.mark}</span></>}
      </div>
      <div className="acard-body">
        <span className="eyebrow">{ARTICLE_CATS[a.cat]}</span>
        <h3>{a.title}</h3>
        <p>{a.excerpt}</p>
        <span className="meta">{a.date} · {a.read} phút đọc</span>
      </div>
    </Link>
  );
}

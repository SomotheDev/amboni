import { Link } from "wouter";
import { Article } from "../../../drizzle/schema";
import { formatDistanceToNow } from "date-fns";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
  categoryName?: string;
}

export default function ArticleCard({ article, featured = false, categoryName }: ArticleCardProps) {
  const timeAgo = formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true });

  if (featured) {
    return (
      <Link href={`/article/${article.slug}`}>
        <a className="group block">
          <article className="space-y-4">
            {article.imageUrl && (
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <div className="space-y-2">
              {categoryName && (
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {categoryName}
                </span>
              )}
              <h2 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-muted-foreground transition-colors text-balance">
                {article.title}
              </h2>
              <p className="text-lg text-muted-foreground line-clamp-3">
                {article.excerpt}
              </p>
              <p className="text-sm text-muted-foreground">
                {timeAgo}
              </p>
            </div>
          </article>
        </a>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.slug}`}>
      <a className="group block">
        <article className="space-y-3">
          {article.imageUrl && (
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="space-y-2">
            {categoryName && (
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {categoryName}
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-muted-foreground transition-colors text-balance">
              {article.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {article.excerpt}
            </p>
            <p className="text-xs text-muted-foreground">
              {timeAgo}
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
}

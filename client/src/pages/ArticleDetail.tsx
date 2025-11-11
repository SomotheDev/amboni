import { useRoute } from "wouter";
import { trpc } from "@/lib/trpc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2, Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { Link } from "wouter";

export default function ArticleDetail() {
  const [, params] = useRoute("/article/:slug");
  const slug = params?.slug || "";

  const { data, isLoading, error } = trpc.articles.getBySlug.useQuery({ slug });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist or has been removed.
          </p>
          <Link href="/">
            <a className="text-primary hover:underline">Return to Homepage</a>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const { article, category, author } = data;
  const publishedDate = format(new Date(article.publishedAt), "MMMM d, yyyy");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <article className="container py-8 max-w-4xl">
          {/* Category */}
          {category && (
            <Link href={`/category/${category.slug}`}>
              <a className="text-sm font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                {category.name}
              </a>
            </Link>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-balance">
            {article.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {article.excerpt}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
            {author && (
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>By {author.name || "Anonymous"}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={article.publishedAt.toString()}>{publishedDate}</time>
            </div>
          </div>

          {/* Featured Image */}
          {article.imageUrl && (
            <div className="mb-8">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Article Content */}
          <div className="article-content prose prose-lg max-w-none">
            {article.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="divider-thick mt-12" />
        </article>
      </main>

      <Footer />
    </div>
  );
}

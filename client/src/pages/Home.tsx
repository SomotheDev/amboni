import { trpc } from "@/lib/trpc";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data: featuredArticles, isLoading: featuredLoading } = trpc.articles.featured.useQuery({ limit: 1 });
  const { data: recentArticles, isLoading: recentLoading } = trpc.articles.list.useQuery({ limit: 12, offset: 0 });
  const { data: categories } = trpc.categories.list.useQuery();

  // Create a map of category IDs to names
  const categoryMap = categories?.reduce((acc, cat) => {
    acc[cat.id] = cat.name;
    return acc;
  }, {} as Record<number, string>) || {};

  if (featuredLoading || recentLoading) {
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

  const featuredArticle = featuredArticles?.[0];
  const otherArticles = recentArticles?.filter(a => a.id !== featuredArticle?.id) || [];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container py-8">
          {/* Featured Article */}
          {featuredArticle && (
            <section className="mb-12 pb-12 border-b-2 border-foreground">
              <ArticleCard
                article={featuredArticle}
                featured={true}
                categoryName={categoryMap[featuredArticle.categoryId]}
              />
            </section>
          )}

          {/* Recent Articles Grid */}
          <section>
            <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  categoryName={categoryMap[article.categoryId]}
                />
              ))}
            </div>
          </section>

          {/* Empty State */}
          {!featuredArticle && otherArticles.length === 0 && (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold mb-4">No Articles Yet</h2>
              <p className="text-muted-foreground">
                Check back soon for the latest news from Tanzania and East Africa.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

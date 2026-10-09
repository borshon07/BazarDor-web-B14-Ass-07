import { notFound } from "next/navigation";
import { getCategory, getProducts } from "@/lib/api";
import { toBn } from "@/lib/format";
import ProductGrid from "@/app/Components/product/ProductGrid";
import EmptyState from "@/app/Components/ui/EmptyState";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [category, all] = await Promise.all([
    getCategory(slug),
    getProducts(slug),
  ]);

  // invalid slug -> 404 page
  if (!category || !category.slug) notFound();

  const products = all.filter((p) => p.category === slug);

  return (
    <div className="mx-auto flex max-w-[1152px] flex-col gap-6 px-4 pb-12 pt-6">
      <header className="flex items-center gap-3 rounded-2xl border border-base-300 bg-base-100 p-[21px] text-base-content">
        <span className="text-4xl leading-10">{category.icon}</span>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold leading-8">{category.nameBn}</h1>
          <p className="text-sm leading-5">
            {toBn(products.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </header>

      {products.length === 0 ? (
        <EmptyState
          icon={category.icon}
          title="এই ক্যাটাগরিতে কোনো পণ্য নেই"
          description="এখনো এই ক্যাটাগরিতে কোনো পণ্যের দাম যোগ করা হয়নি।"
        />
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}
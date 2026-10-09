export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <div className="mx-auto max-w-md p-8">Category {slug}</div>;
}
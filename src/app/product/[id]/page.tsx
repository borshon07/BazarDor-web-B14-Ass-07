export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div className="mx-auto max-w-md p-8">Product {id}</div>;
}
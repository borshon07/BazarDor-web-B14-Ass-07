import type { Category, Product } from "@/types/product";

const BASE = process.env.BAZARDOR_API_URL ?? "https://api.abcz.workers.dev/api/bazardor";

// API direct array dile ba { data: [...] } dile duto-i kaj korbe
function toArray<T>(json: unknown): T[] {
  if (Array.isArray(json)) return json as T[];
  if (json && typeof json === "object" && "data" in json) {
    const data = (json as { data: unknown }).data;
    if (Array.isArray(data)) return data as T[];
  }
  return [];
}

export async function getProducts(category?: string): Promise<Product[]> {
  const url = category
    ? `${BASE}/products?category=${encodeURIComponent(category)}`
    : `${BASE}/products`;

  const res = await fetch(url, { next: { revalidate: 300 } });
  if (!res.ok) throw new Error("Products load kora gelo na");
  return toArray<Product>(await res.json());
}

export async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`${BASE}/products/${id}`, {
    next: { revalidate: 300 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Product load kora gelo na");
  return res.json();
}

export async function getCategories(): Promise<Category[]> {
  const res = await fetch(`${BASE}/categories`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error("Categories load kora gelo na");
  return toArray<Category>(await res.json());
}

export async function getCategory(slug: string): Promise<Category | null> {
  const res = await fetch(`${BASE}/categories/${slug}`, {
    next: { revalidate: 3600 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Category load kora gelo na");
  return res.json();
}
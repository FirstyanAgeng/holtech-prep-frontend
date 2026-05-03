import { useCategories } from "./useCategories";

export default function CategoryList() {
  const { data, isLoading, error } = useCategories();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading categories</div>;

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {data?.map((c: any) => (
          <li key={c.id}>{c.name}</li>
        ))}
      </ul>
    </div>
  );
}

import { useProducts, useDeleteProduct } from "./useProducts";

export default function ProductList() {
  const {isLoading, isError, data} = useProducts();
  const del = useDeleteProduct();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;

  return (
    <div>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((p: any, i: number) => (
            <tr key={i}>
              <td>{p.name}</td>
              <td>{p.category?.name ?? "-"}</td>
              <td>{p.price}</td>
              <td>{p.stock}</td>
              <td>
                <button onClick={() => del.mutate(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

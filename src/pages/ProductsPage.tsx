import ProductList from "../features/products/ProductList";
import ProductForm from "../features/products/ProductForm";

export default function ProductsPage() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Products</h1>
      <div style={{ display: "flex", gap: 24 }}>
        <div style={{ flex: 1 }}>
          <ProductList />
        </div>
        <div style={{ width: 360 }}>
          <ProductForm />
        </div>
      </div>
    </div>
  );
}

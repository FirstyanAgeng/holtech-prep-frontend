import { useState } from "react";
import type { FormEvent } from "react";
import { useCreateProduct } from "./useProducts";
import { useCategories } from "../categories/useCategories";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [categoryId, setCategoryId] = useState<number | undefined>(undefined);
  const create = useCreateProduct();
  const { data: categories } = useCategories();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const payload: any = { name, price, stock };
    if (categoryId) payload.categoryId = categoryId;
    create.mutate(payload);
  };

  return (
    <form onSubmit={submit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Category</label>
        <select
          value={categoryId ?? ""}
          onChange={(e) =>
            setCategoryId(e.target.value ? Number(e.target.value) : undefined)
          }
        >
          <option value="">-- none --</option>
          {categories?.map((c: any) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Stock</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(Number(e.target.value))}
        />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

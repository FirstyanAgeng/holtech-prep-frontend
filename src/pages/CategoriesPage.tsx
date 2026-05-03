import React from "react";
import CategoryList from "../features/categories/CategoryList";

export default function CategoriesPage() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Categories</h1>
      <CategoryList />
    </div>
  );
}

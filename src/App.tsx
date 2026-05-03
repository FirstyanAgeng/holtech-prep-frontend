import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./features/products/ProductList";
import ProductForm from "./features/products/ProductForm";

const qc = new QueryClient();

function App() {
  return (
    <>
      <div style={{ padding: 16 }}>
         <h1>Mini ERP — Inventory</h1>
         <ProductList />
    </div>
    </>
  );
}

// Backup
// function App() {
//   return (
//     <QueryClientProvider client={qc}>
//       <div style={{ padding: 16 }}>
//         <h1>Mini ERP — Inventory</h1>
//         <section style={{ display: "flex", gap: 24 }}>
//           <div style={{ flex: 1 }}>
//             <ProductList />
//           </div>
//           <div style={{ width: 360 }}>
//             <ProductForm />
//           </div>
//         </section>
//       </div>
//     </QueryClientProvider>
//   );
// }

export default App;

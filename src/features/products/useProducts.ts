import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api";

export function useProducts(params?: Record<string, any>) {
  return useQuery(["products", params], async () => {
    const res = await api.get("/products", { params });
    return res.data;
  });
}

export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation((payload: any) => api.post("/products", payload), {
    onSuccess: () => qc.invalidateQueries(["products"]),
  });
}

export function useUpdateProduct() {
  const qc = useQueryClient();
  return useMutation(
    ({ id, payload }: any) => api.put(`/products/${id}`, payload),
    {
      onSuccess: () => qc.invalidateQueries(["products"]),
    },
  );
}

export function useDeleteProduct() {
  const qc = useQueryClient();
  return useMutation((id: number) => api.delete(`/products/${id}`), {
    onSuccess: () => qc.invalidateQueries(["products"]),
  });
}

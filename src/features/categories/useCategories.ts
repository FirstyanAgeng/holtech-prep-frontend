import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../api";

export function useCategories() {
  return useQuery(["categories"], async () => {
    const res = await api.get("/categories");
    return res.data;
  });
}

export function useCreateCategory() {
  const qc = useQueryClient();
  return useMutation((payload: any) => api.post("/categories", payload), {
    onSuccess: () => qc.invalidateQueries(["categories"]),
  });
}

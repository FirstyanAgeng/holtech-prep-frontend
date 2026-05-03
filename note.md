NOTES:

Tadi pas benerin bug. saya coba benerin yang ini

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

awal nya kan "key" nya itu pake id dari data nya. karena id itu sifat nya unik/ga sama
tapi karna saya kebiasaan "key" nya berpatokan sama index nya yang "i" itu. jadi nya saya ganti wkwk
tapi ternyata masalah nya bukan disitu

terus akhir nya saya cek hook nya tuh. saya buka file nya. dan ngecek kode tanstack nya
nah saya mikir "kok kaya ada yang aneh tapi apa ya... eee..." karna saya udah lama ga koding frontend jadi nya rada lupa kode tanstack query. akhir nya saya tanya AI "ini syntax nya gini bukan?" si AI bilang "pake mutationFn" nahh akhir nya saya inget lagi deng

penjelasan singkat nya gini

export function useCreateProduct() {
  const qc = useQueryClient();
  return useMutation({
    
    kode nya gajauh beda sama yg awal. cuma penempatan nya saja salah
    kita tetep bisa taro parameter di function mutationFn nya kaya yg dibawah

    mutationFn: (payload: any) => api.post("/products", payload),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

lalu cara manggil nya tetep sama
const {mutate: create} = useCreateProduct()

create({data: 'data nya'})
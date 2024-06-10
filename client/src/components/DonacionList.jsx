import { useEffect, useState } from "react";
import { getAllDonacion } from "../api/tasks.api";
import { DonacionCard } from "../components/DonacionCard";
import { toast } from "react-hot-toast";

export function DonacionList() {
  const [donaciones, setDonacion] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDonacion() {
      try {
        const res = await getAllDonacion();
        setDonacion(res.data);
      } catch (error) {
        toast.error("Error al cargar las Donaciones", {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff",
          },
        });
      } finally {
        setLoading(false);
      }
    }
    loadDonacion();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h2 className="font-bold text-2xl mb-6 text-purple-900 font-sans rounded-lg bg-white p-3 shadow-md border border-black">
        Lista de Donaciones
      </h2>
      <div className="relative flex flex-col gap-4 w-1/2 max-h-screen overflow-y-auto border border-black rounded-lg p-6 bg-white shadow-lg">
        {loading ? (
          <p className="text-gray-500">Cargando...</p>
        ) : (
          donaciones.map((donacion) => (
            <DonacionCard key={donacion.id} donacion={donacion} />
          ))
        )}
      </div>
    </div>
  );
}

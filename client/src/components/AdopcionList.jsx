// AdopcionList.jsx
import { useEffect, useState } from "react";
import { getAllAdopcion } from "../api/tasks.api";
import { AdopcionCard } from "../components/AdopcionCard";
import { toast } from "react-hot-toast";

export function AdopcionList() {
  const [adopciones, setAdopciones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAdopciones() {
      try {
        const response = await getAllAdopcion();
        setAdopciones(response.data);
      } catch (error) {
        toast.error("Error al cargar las adopciones", {
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
    loadAdopciones();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h2 className="font-bold text-2xl mb-6 text-purple-900 font-sans rounded-lg bg-white p-3 shadow-md border border-black">
        Lista de Adopciones
      </h2>
      <div className="relative flex flex-col gap-4 w-1/2 max-h-screen overflow-y-auto border border-black rounded-lg p-6 bg-white shadow-lg">
        {loading ? (
          <p className="text-gray-500">Cargando...</p>
        ) : (
          adopciones.map((adopcion) => (
            <AdopcionCard key={adopcion.id} adopcion={adopcion} />
          ))
        )}
      </div>
    </div>
  );
}

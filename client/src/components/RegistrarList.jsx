import { useEffect, useState } from "react";
import { getAllRegistrar } from "../api/tasks.api";
import { RegistrarCard } from "../components/RegistrarCard";
import { toast } from "react-hot-toast";

export function RegistrarList() {
  const [registros, setRegistro] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRegistro() {
      try {
        const res = await getAllRegistrar();
        setRegistro(res.data);
      } catch (error) {
        toast.error("Error al cargar los registros", {
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
    loadRegistro();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h2 className="font-bold text-2xl mb-6 text-purple-900 font-sans rounded-lg bg-white p-3 shadow-md border border-black">
        Lista de Registros
      </h2>
      <div className="relative flex flex-col gap-4 w-1/2 max-h-screen overflow-y-auto border border-black rounded-lg p-6 bg-white shadow-lg">
        {loading ? (
          <p className="text-gray-500">Cargando...</p>
        ) : (
          registros.map((registro) => (
            <RegistrarCard key={registro.id} registro={registro} />
          ))
        )}
      </div>
    </div>
  );
}

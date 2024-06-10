import { useEffect, useState } from "react";
import { getAllVisita } from "../api/tasks.api"
import { VisitaCard } from "../components/VisitaCard"


export function VisitaList() {
  const [visitas, setVisitas] = useState([]);

  useEffect(() => {
    async function loadVisitas() {
      const res = await getAllVisita();
      setVisitas(res.data);
    }
    loadVisitas();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h2 className="font-bold text-2xl mb-6 text-purple-900 font-sans rounded-lg bg-white p-3 shadow-md border border-black">
        Reportes de Visitas
      </h2>
      <div className="relative flex flex-col gap-4 w-1/2 max-h-screen overflow-y-auto border border-black rounded-lg p-6 bg-white shadow-lg">
        {visitas.map((visita) => (
          <VisitaCard key={visita.id} visita={visita} />
        ))}
      </div>
    </div>
  );
}

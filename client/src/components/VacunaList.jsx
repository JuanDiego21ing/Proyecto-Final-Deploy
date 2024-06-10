import { useEffect, useState } from "react";
import { getAllVacuna } from "../api/tasks.api";
import { VacunaCard } from "../components/VacunaCard";

export function VacunaList() {
  const [vacunas, setVacunas] = useState([]);

  useEffect(() => {
    async function loadVacunas() {
      const res = await getAllVacuna();
      setVacunas(res.data);
    }
    loadVacunas();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h2 className="font-bold text-2xl mb-6 text-purple-900 font-sans rounded-lg bg-white p-3 shadow-md border border-black">
        Reportes de Vacunación
      </h2>
      <div className="relative flex flex-col gap-4 w-1/2 max-h-screen overflow-y-auto border border-black rounded-lg p-6 bg-white shadow-lg">
        {vacunas.map((vacuna) => (
          <VacunaCard key={vacuna.id} vacuna={vacuna} />
        ))}
      </div>
    </div>
  );
}

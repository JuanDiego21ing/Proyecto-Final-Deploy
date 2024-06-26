import { useEffect, useState } from "react";
import { getAllMaltrato } from "../api/tasks.api";
import { MaltratoCard } from "../components/MaltratoCard";

export function MaltratoList() {
  const [maltratos, setMaltrato] = useState([]);

  useEffect(() => {
    async function loadMaltrato() {
      const res = await getAllMaltrato();
      setMaltrato(res.data);
    }
    loadMaltrato();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h2 className="font-bold text-2xl mb-6 text-purple-900 font-sans rounded-lg bg-white p-3 shadow-md border border-black">
        Reportes de Maltrato
      </h2>
      <div className="relative flex flex-col gap-4 w-1/2 max-h-screen overflow-y-auto border border-black rounded-lg p-6 bg-white shadow-lg">
        {maltratos.map((maltrato) => (
          <MaltratoCard key={maltrato.id} maltrato={maltrato} />
        ))}
      </div>
    </div>
  );
}

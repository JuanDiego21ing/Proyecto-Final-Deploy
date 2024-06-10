import { useEffect, useState } from "react";
import { getAllUsuario } from "../api/tasks.api"
import { UsuarioCard} from "../components/UsuarioCard"


export function UsuarioList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    async function loadUsuarios() {
      const res = await getAllUsuario();
      setUsuarios(res.data);
    }
    loadUsuarios();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h2 className="font-bold text-2xl mb-6 text-purple-900 font-sans rounded-lg bg-white p-3 shadow-md border border-black">
        Registros de Usuarios
      </h2>
      <div className="relative flex flex-col gap-4 w-1/2 max-h-screen overflow-y-auto border border-black rounded-lg p-6 bg-white shadow-lg">
        {usuarios.map((usuario) => (
          <UsuarioCard key={usuario.id} usuario={usuario} />
        ))}
      </div>
    </div>
  );
}

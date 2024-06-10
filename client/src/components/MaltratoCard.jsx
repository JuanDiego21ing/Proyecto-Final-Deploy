import { useNavigate } from "react-router-dom";

export function MaltratoCard({ maltrato }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white border border-purple-500 rounded-lg p-4 shadow-md hover:bg-purple-100 hover:cursor-pointer transition duration-300 transform hover:scale-105"
      onClick={() => {
        navigate(`/maltrato/${maltrato.id}`);
      }}
    >
      <h1 className="text-purple-900 font-bold uppercase text-lg mb-2 truncate">{maltrato.nombre}</h1>
      <p className="text-gray-700 text-sm line-clamp-3">Condicion: {maltrato.estado}</p>
      <div className="text-right mt-2">
        <span className="text-sm text-purple-500 font-semibold">Modificar</span>
      </div>
    </div>
  );
}

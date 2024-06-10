import { useNavigate } from "react-router-dom";

export function VisitaCard({ visita }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white border border-purple-500 rounded-lg p-4 shadow-md hover:bg-purple-100 hover:cursor-pointer transition duration-300 transform hover:scale-105"
      onClick={() => {
        navigate(`/visita/${visita.id}`);
      }}
    >
      <h1 className="text-purple-900 font-bold uppercase text-lg mb-2 truncate">{visita.nombre}</h1>
      <p className="text-gray-700 text-sm mb-1">Fecha de Visita: {visita.fecha}</p>
      <p className="text-gray-700 text-sm mb-1">Motivo de Visita: {visita.motivo}</p>
      <p className="text-gray-700 text-sm mb-1">Hora de visita: {visita.hora}</p>
      <div className="text-right mt-2">
        <span className="text-sm text-purple-500 font-semibold">Modificar</span>
      </div>
    </div>
  );
}

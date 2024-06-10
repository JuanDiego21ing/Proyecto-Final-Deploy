// AdopcionCard.jsx
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function AdopcionCard({ adopcion }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/adopcion/" + adopcion.id);
    toast.success(`Navegando a los detalles de ${adopcion.adoptante}`, {
      position: "bottom-right",
      style: {
        background: "#101010",
        color: "#fff",
      },
    });
  };

  return (
    <div
      className="bg-white border border-purple-500 rounded-lg p-4 shadow-md hover:bg-purple-100 hover:cursor-pointer transition duration-300 transform hover:scale-105"
      onClick={handleCardClick}
      role="button"
      aria-label={`Ver detalles de la adopción ${adopcion.adoptante}`}
    >
      <h1 className="text-purple-900 font-bold uppercase text-lg mb-2 truncate">
        {adopcion.nombre}
      </h1>
      <h1 className="text-purple-900 font-bold uppercase text-lg mb-2 truncate">{adopcion.adoptante}</h1>
      <p className="text-gray-700 text-sm">Fecha de adopcion: {adopcion.fecha}</p>
      <p className="text-gray-700 text-sm">Mascota: {adopcion.mascota}</p>
      <div className="text-right mt-2">
        <span className="text-sm text-purple-500 font-semibold">Ver Detalles</span>
      </div>
    </div>
  );
}

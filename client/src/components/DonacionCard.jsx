import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function DonacionCard({ donacion }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/donacion/" + donacion.id);
    toast.success(`Navegando a los detalles de ${donacion.nombre}`, {
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
      aria-label={`Ver detalles del registro ${donacion.nombre}`}
    >
      <h1 className="text-purple-900 font-bold uppercase text-lg mb-2 truncate">
        {donacion.nombre}
      </h1>
      <p className="text-gray-700 text-sm">Apellido: {donacion.apellido}</p>
      <p className="text-gray-700 text-sm">Fecha: {donacion.fecha}</p>
      <p className="text-gray-700 text-sm">Monto $: {donacion.monto}</p>
      <p className="text-gray-700 text-sm line-clamp-3">Descripción: {donacion.descripcion}</p>
      <div className="text-right mt-2">
        <span className="text-sm text-purple-500 font-semibold">Modificar</span>
      </div>
    </div>
  );
}

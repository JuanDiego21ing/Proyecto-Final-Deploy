import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Navigation() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative">
      <div className="mx-auto flex items-center justify-between mb-2">
        <Link to="/tasks" className="flex items-center">
          <h1 className="font-pacifico text-2xl mr-2">
            Cuidado de Michis y Lomitos
          </h1>
          <img
            src="/images/descarga.png"
            alt="Michis y Lomitos"
            className="w-20 h-20"
          />
        </Link>
      </div>

      <div className="absolute left-0 mt-4">
        <Link to="/tasks-create">
          <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-indigo-400 transition-all duration-300">
            Reportar Perdida
          </button>
        </Link>

        <div className="flex flex-col mt-2">
          <Link to="/maltratos-create">
            <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-indigo-400 transition-all duration-300">
              Reportar Maltrato
            </button>
          </Link>
          <Link to="/vacuna-create">
            <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-indigo-400 transition-all duration-300">
              Control de Vacunas
            </button>
          </Link>

          <Link to="/adopcion-create">
            <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-indigo-400 transition-all duration-300">
              Adopciones
            </button>
          </Link>

          <button
            onClick={toggleDropdown}
            className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-indigo-400 transition-all duration-300"
          >
            Seguimientos
          </button>
          {isDropdownVisible && (
            <div className="ml-4 mt-2 flex flex-col">
              <Link to="/tasks">
                <button className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-gray-300 transition-all duration-300">
                  Perdidas
                </button>
              </Link>

              <Link to="/maltrato">
                <button className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-gray-300 transition-all duration-300">
                  Maltratos
                </button>
              </Link>

              <Link to="/usuario">
                <button className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-gray-300 transition-all duration-300">
                  Usuarios
                </button>
              </Link>

              <Link to="/vacuna">
                <button className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-gray-300 transition-all duration-300">
                  Vacunas
                </button>
              </Link>

              <Link to="/adopcion">
                <button className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-gray-300 transition-all duration-300">
                  Adopciones
                </button>
              </Link>

              <Link to="/registrar">
                <button className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-gray-300 transition-all duration-300">
                  Mascotas
                </button>
              </Link>

              <Link to="/donacion">
                <button className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-gray-300 transition-all duration-300">
                  Donaciones
                </button>
              </Link>
              <Link to="/visita">
                <button className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-gray-300 transition-all duration-300">
                  Visitas
                </button>
              </Link>
            </div>
          )}
          <Link to="/registrar-create">
            <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-indigo-400 transition-all duration-300">
              Registrar Mascota
            </button>
          </Link>

          <Link to="/usuario-create">
            <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-indigo-400 transition-all duration-300">
              Registrar Usuario
            </button>
          </Link>

          <Link to="/donacion-create">
            <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-indigo-400 transition-all duration-300">
              Registrar Donacion
            </button>
          </Link>

          <Link to="/visita-create">
            <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg mb-2 border-2 border-black shadow-md hover:bg-indigo-400 transition-all duration-300">
              Registrar Visita
            </button>
          </Link>
        </div>

        {/* Imagen añadida debajo de los botones */}
        <div className="mt-16 flex justify-center">
          <img
            src="/images/gatito.png"
            alt="Otra Imagen"
            className="w-40 h-40 opacity-50"
          />
        </div>
      </div>
    </div>
  );
}

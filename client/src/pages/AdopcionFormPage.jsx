import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  createAdopcion,
  deleteAdopcion,
  getAdopcion,
  getAllRegistrar,
  updateAdopcion,
} from "../api/tasks.api";
import { toast } from "react-hot-toast";

export function AdopcionFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const [mascotas, setMascotas] = useState([]);
  const params = useParams();
  const isEditing = !!params.id;

  // FUNCION PARA CARGAR MASCOTAS DISPONIBLES DESDE REGISTROS
  useEffect(() => {
    async function fetchMascotasDisponibles() {
      try {
        const response = await getAllRegistrar();
        setMascotas(response.data);
      } catch (error) {
        console.error(error);
        toast.error("Error al cargar las mascotas disponibles", {
          position: "bottom-right",
          style: {
            background: "#101010",
            color: "#fff",
          },
        });
      }
    }
    fetchMascotasDisponibles();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    if (isEditing) {
      await updateAdopcion(params.id, data);
      toast.success("Adopcion Actualizado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createAdopcion(data);
      toast.success("Nuevo Adopcion Registrada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/adopcion");
  });

  // FUNCION PARA CARGAR LOS DATOS AL FORMULARIO
  useEffect(() => {
    async function loadAdopcion() {
      if (isEditing) {
        const res = await getAdopcion(params.id);
        setValue("adoptante", res.data.adoptante);
        setValue("fecha", res.data.fecha);
        setValue("mascota", res.data.mascota);
      }
    }
    loadAdopcion();
  }, [isEditing, params.id, setValue]);

  // FORMULARIO
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="font-bold text-2xl mb-6 text-center text-gray-800">
        {isEditing ? "Editar Adopción" : "Registrar Adopción"}
      </h2>
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-lg shadow-md border border-black"
      >
        <div className="mb-4">
          <label
            htmlFor="adoptante"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Adoptante
          </label>
          <input
            type="text"
            id="adoptante"
            placeholder="Nombre del adoptante"
            {...register("adoptante", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
            disabled={isEditing}
          />
          {errors.adoptante && (
            <span className="text-red-500 text-sm mt-1">
              Este campo es obligatorio
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="fecha"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Fecha
          </label>
          <input
            type="text"
            id="fecha"
            placeholder="Fecha de adopcion"
            {...register("fecha", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
            disabled={isEditing}
          />
          {errors.fecha && (
            <span className="text-red-500 text-sm mt-1">
              Este campo es obligatorio
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="mascota"
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Mascota
          </label>
          <select
            id="mascota"
            {...register("mascota", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
            disabled={isEditing}
          >
            <option value="">Seleccionar mascota</option>
            {mascotas.map((mascota) => (
              <option key={mascota.nombre} value={mascota.nombre}>
                {mascota.nombre}
              </option>
            ))}
          </select>
          {errors.mascota && (
            <span className="text-red-500 text-sm mt-1">
              Por favor seleccione una mascota
            </span>
          )}
        </div>
        {!isEditing && (
          <button
            type="submit"
            className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300 hover:bg-indigo-600"
          >
            Adoptar
          </button>
        )}
      </form>

      {isEditing && (
        <div className="flex justify-end mt-4">
          <button
            onClick={async () => {
              const accepted = window.confirm("¿Estás segur@?");
              if (accepted) {
                await deleteAdopcion(params.id);
                toast.success("Adopcion Eliminado", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/adopcion");
              }
            }}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-red-600"
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}

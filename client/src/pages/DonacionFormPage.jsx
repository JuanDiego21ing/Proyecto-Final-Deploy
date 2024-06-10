import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  createDonacion,
  deleteDonacion,
  updateDonacion,
  getDonacion,
} from "../api/tasks.api";
import { toast } from "react-hot-toast";

export function DonacionFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateDonacion(params.id, data);
      toast.success("Registro Actualizado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createDonacion(data);
      toast.success("Nuevo Registro añadido", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/donacion");
  });

  useEffect(() => {
    async function loadDonacion() {
      if (params.id) {
        const res = await getDonacion(params.id);
        setValue("nombre", res.data.nombre);
        setValue("apellido", res.data.apellido);
        setValue("fecha", res.data.fecha);
        setValue("monto", res.data.monto);
        setValue("descripcion", res.data.descripcion);
      }
    }
    loadDonacion();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="font-bold text-2xl mb-6 text-center text-gray-800">Registrar Donacion</h2>
      <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-md border border-black">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            {...register("nombre", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.nombre && <span className="text-red-500 text-sm mt-1">Este campo es obligatorio</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="apellido">
            Apellido
          </label>
          <input
            type="text"
            id="apellido"
            placeholder="Apellido"
            {...register("apellido", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.apellido && <span className="text-red-500 text-sm mt-1">Este campo es obligatorio</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="fecha">
            Fecha
          </label>
          <input
            type="text"
            id="fecha"
            placeholder="Fecha"
            {...register("fecha", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.fecha && <span className="text-red-500 text-sm mt-1">Este campo es obligatorio</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="monto">
            Monto
          </label>
          <input
            type="text"
            id="monto"
            placeholder="Monto"
            {...register("monto", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.monto && <span className="text-red-500 text-sm mt-1">Este campo es obligatorio</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="descripcion">
            Descripción
          </label>
          <textarea
            id="descripcion"
            placeholder="Descripción"
            {...register("descripcion", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.descripcion && <span className="text-red-500 text-sm mt-1">Este campo es obligatorio</span>}
        </div>

        <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300 hover:bg-indigo-600">
          Guardar
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end mt-4">
          <button
            onClick={async () => {
              const accept = window.confirm("¿Estás segur@?");
              if (accept) {
                await deleteDonacion(params.id);
                toast.success("Registro Eliminado", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/donacion");
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
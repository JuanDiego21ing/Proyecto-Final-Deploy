import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  createMaltrato,
  deleteMaltrato,
  updateMaltrato,
  getMaltrato,
} from "../api/tasks.api";
import { toast } from "react-hot-toast";

export function MaltratoFormPage() {
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
      await updateMaltrato(params.id, data);
      toast.success("Maltrato Actualizado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createMaltrato(data);
      toast.success("Nuevo Maltrato añadido", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/maltrato");
  });

  useEffect(() => {
    async function loadMaltrato() {
      if (params.id) {
        const res = await getMaltrato(params.id);
        setValue("nombre", res.data.nombre);
        setValue("fecha", res.data.fecha);
        setValue("estado", res.data.estado);
        setValue("descripcion", res.data.descripcion);
      }
    }
    loadMaltrato();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="font-bold text-2xl mb-6 text-center text-gray-800">Reportar Maltrato</h2>
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
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="estado">
            Estado
          </label>
          <input
            type="text"
            id="estado"
            placeholder="Estado"
            {...register("estado", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.estado && <span className="text-red-500 text-sm mt-1">Este campo es obligatorio</span>}
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
              const accepted = window.confirm("¿Estás segur@?");
              if (accepted) {
                await deleteMaltrato(params.id);
                toast.success("Maltrato Eliminado", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/maltrato");
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

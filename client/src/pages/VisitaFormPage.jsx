import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createVisita,
  deleteVisita,
  updateVisita,
  getVisita,
} from "../api/tasks.api";
import { toast } from "react-hot-toast";

export function VisitaFormPage() {
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
      await updateVisita(params.id, data);
      toast.success("Visita Actualizada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createVisita(data);
      toast.success("Nueva Visita añadida", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/visita");
  });

  useEffect(() => {
    async function loadVisita() {
      if (params.id) {
        const res = await getVisita(params.id);
        setValue("nombre", res.data.nombre);
        setValue("fecha", res.data.fecha);
        setValue("motivo", res.data.motivo);
        setValue("hora", res.data.hora);
      }
    }
    loadVisita();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="font-bold text-2xl mb-6 text-center text-gray-800">
        Registrar Visita
      </h2>
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-lg shadow-md border border-black"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            placeholder="Nombre"
            {...register("nombre", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.nombre && (
            <span className="text-red-500 text-sm mt-1">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="fecha"
          >
            Fecha 
          </label>
          <input
            type="text"
            id="fecha"
            placeholder="Fecha de Visita"
            {...register("fecha", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.fecha && (
            <span className="text-red-500 text-sm mt-1">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="motivo"
          >
            Motivo
          </label>
          <input
            type="text"
            id="motivo"
            placeholder="Motivo de Visita"
            {...register("motivo", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.motivo && (
            <span className="text-red-500 text-sm mt-1">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="hora"
          >
            Hora
          </label>
          <input
            type="text"
            id="hora"
            placeholder="hora de visita"
            {...register("hora", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.hora && (
            <span className="text-red-500 text-sm mt-1">
              Este campo es obligatorio
            </span>
          )}
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
                await deleteVisita(params.id);
                toast.success("Visita Cancelada", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/visita");
              }
            }}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-red-600"
          >
            Cancelar Visita
          </button>
        </div>
      )}
    </div>
  );
}

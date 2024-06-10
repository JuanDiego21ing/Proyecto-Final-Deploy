import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  createVacuna,
  deleteVacuna,
  updateVacuna,
  getVacuna,
} from "../api/tasks.api";
import { toast } from "react-hot-toast";

export function VacunaFormPage() {
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
      await updateVacuna(params.id, data);
      toast.success("Vacuna Actualizada", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createVacuna(data);
      toast.success("Nueva Vacuna añadida", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/vacuna");
  });

  useEffect(() => {
    async function loadVacuna() {
      if (params.id) {
        const res = await getVacuna(params.id);
        setValue("nombre", res.data.nombre);
        setValue("fechaVacuna", res.data.fechaVacuna);
        setValue("tipoVacuna", res.data.tipoVacuna);
        setValue("proximaVacuna", res.data.proximaVacuna);
      }
    }
    loadVacuna();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="font-bold text-2xl mb-6 text-center text-gray-800">
        Reportar Vacuna
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
            htmlFor="fechaVacuna"
          >
            Fecha de Vacunación
          </label>
          <input
            type="text"
            id="fechaVacuna"
            placeholder="Fecha de Vacunación"
            {...register("fechaVacuna", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.fechaVacuna && (
            <span className="text-red-500 text-sm mt-1">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="tipoVacuna"
          >
            Tipo de Vacuna
          </label>
          <input
            type="text"
            id="tipoVacuna"
            placeholder="Tipo de Vacuna"
            {...register("tipoVacuna", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.tipoVacuna && (
            <span className="text-red-500 text-sm mt-1">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="proximaVacuna"
          >
            Próxima Vacuna
          </label>
          <input
            type="text"
            id="proximaVacuna"
            placeholder="Próxima Vacuna"
            {...register("proximaVacuna", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.proximaVacuna && (
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
                await deleteVacuna(params.id);
                toast.success("Vacuna Eliminada", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/vacuna");
              }
            }}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-red-600"
          >
            Eliminar Reporte
          </button>
        </div>
      )}
    </div>
  );
}

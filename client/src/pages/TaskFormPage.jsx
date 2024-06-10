import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, deleteTask, getTask, updateTask } from "../api/tasks.api";
import { toast } from "react-hot-toast";

export function TaskFormPage() {
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
      await updateTask(params.id, data);
      toast.success("Reporte Actualizado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createTask(data);
      toast.success("Nuevo reporte añadido", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }

    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data } = await getTask(params.id);
        setValue("title", data.title);
        setValue("description", data.description);
      }
    }
    loadTask();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="font-bold text-2xl mb-6 text-center text-gray-800">Reportar Pérdida</h2>
      <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-md border border-black">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="title">
            Nombre
          </label>
          <input
            type="text"
            id="title"
            placeholder="nombre de la mascota"
            {...register("title", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
            autoFocus
          />
          {errors.title && <span className="text-red-500 text-sm mt-1">Este campo es obligatorio</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="description">
            Descripción
          </label>
          <textarea
            id="description"
            placeholder="descripcion de la perdida"
            {...register("description", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.description && <span className="text-red-500 text-sm mt-1">Este campo es obligatorio</span>}
        </div>

        <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300 hover:bg-indigo-600">
          Guardar
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end mt-4">
          <button
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-red-600"
            onClick={async () => {
              const accepted = window.confirm("¿Estás segur@?");
              if (accepted) {
                await deleteTask(params.id);
                toast.success("Reporte Eliminado", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/tasks");
              }
            }}
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}

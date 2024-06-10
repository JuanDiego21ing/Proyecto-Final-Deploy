import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  createRegistrar,
  deleteRegistrar,
  updateRegistrar,
  getRegistrar,
} from "../api/tasks.api";
import { toast } from "react-hot-toast";

export function RegistrarFormPage() {
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
      await updateRegistrar(params.id, data);
      toast.success("Registro Actualizado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createRegistrar(data);
      toast.success("Nuevo Registro añadido", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/registrar");
  });

  useEffect(() => {
    async function loadRegistrar() {
      if (params.id) {
        const res = await getRegistrar(params.id);
        setValue("nombre", res.data.nombre);
        setValue("raza", res.data.raza);
        setValue("edad", res.data.edad);
        setValue("genero", res.data.genero);
        setValue("descripcion", res.data.descripcion);
      }
    }
    loadRegistrar();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="font-bold text-2xl mb-6 text-center text-gray-800">Registrar Mascota</h2>
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
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="raza">
            Raza
          </label>
          <input
            type="text"
            id="raza"
            placeholder="Raza"
            {...register("raza", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.raza && <span className="text-red-500 text-sm mt-1">Este campo es obligatorio</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="edad">
            Edad
          </label>
          <input
            type="text"
            id="edad"
            placeholder="Edad"
            {...register("edad", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.edad && <span className="text-red-500 text-sm mt-1">Este campo es obligatorio</span>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="genero">
            Género
          </label>
          <input
            type="text"
            id="genero"
            placeholder="Género"
            {...register("genero", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.genero && <span className="text-red-500 text-sm mt-1">Este campo es obligatorio</span>}
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
                await deleteRegistrar(params.id);
                toast.success("Registro Eliminado", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/registrar");
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

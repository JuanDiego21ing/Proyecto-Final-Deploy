import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  updateUsuario,
  createUsuario,
  getUsuario,
  deleteUsuario,
} from "../api/tasks.api";
import { toast } from "react-hot-toast";

export function UsuarioFormPage() {
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
      await updateUsuario(params.id, data);
      toast.success("Usuario Actualizado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createUsuario(data);
      toast.success("Nueva Usuario añadido", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/usuario");
  });

  useEffect(() => {
    async function loadUsuario() {
      if (params.id) {
        const res = await getUsuario(params.id);
        setValue("nombre", res.data.nombre);
        setValue("apellidos", res.data.apellidos);
        setValue("correo", res.data.correo);
        setValue("telefono", res.data.telefono);
      }
    }
    loadUsuario();
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h2 className="font-bold text-2xl mb-6 text-center text-gray-800">
        Registrar Usuario
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
            htmlFor="apellidos"
          >
            Apellidos
          </label>
          <input
            type="text"
            id="apellidos"
            placeholder="Apellidos"
            {...register("apellidos", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.apellidos && (
            <span className="text-red-500 text-sm mt-1">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="correo"
          >
            Correo
          </label>
          <input
            type="text"
            id="correo"
            placeholder="Correo electronico"
            {...register("correo", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.correo && (
            <span className="text-red-500 text-sm mt-1">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="telefono"
          >
            Telefono
          </label>
          <input
            type="text"
            id="telefono"
            placeholder="Telefono celular"
            {...register("telefono", { required: true })}
            className="bg-gray-100 p-3 rounded-lg w-full border border-gray-300 text-gray-700 focus:outline-none focus:border-indigo-500"
          />
          {errors.telefono && (
            <span className="text-red-500 text-sm mt-1">
              Este campo es obligatorio
            </span>
          )}
        </div>

        <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-300 hover:bg-indigo-600">
          Registrar
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end mt-4">
          <button
            onClick={async () => {
              const accept = window.confirm("¿Estás segur@?");
              if (accept) {
                await deleteUsuario(params.id);
                toast.success("Usuario eliminado", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/usuario");
              }
            }}
            className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-red-600"
          >
            Eliminar Usuario
          </button>
        </div>
      )}
    </div>
  );
}

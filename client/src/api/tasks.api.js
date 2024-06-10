import axios from "axios";

const URL =
  process.env.NODE_ENV === "production"
    ? import.meta.env.VITE_BACKEND_URL
    : "http://localhost:8000";

console.log(URL);
const tasksApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/tasks`,
});

console.log(URL);
const maltratoApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/maltrato`,
});

console.log(URL);
const vacunaApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/vacuna`,
});

console.log(URL);
const registrarApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/registrar`,
});

console.log(URL);
const donacionApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/donacion`,
});

console.log(URL);
const visitaApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/visita`,
});

console.log(URL);
const adopcionApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/adopcion`,
});

console.log(URL);
const usuarioApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/usuario`,
});

// PETICIONES DE PERDIDAS

export const getAllTasks = () => tasksApi.get("/");

export const getTask = (id) => tasksApi.get(`/${id}`);

export const createTask = (task) => tasksApi.post("/", task);

export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`);

// PETICIONES DE MALTRATO

export const getAllMaltrato = () => maltratoApi.get("/");

export const createMaltrato = (maltrato) => maltratoApi.post("/", maltrato);

export const deleteMaltrato = (id) => maltratoApi.delete(`/${id}`);

export const updateMaltrato = (id, maltrato) => maltratoApi.put(`/${id}/`, maltrato);

export const getMaltrato = (id) => maltratoApi.get(`/${id}`);

// PETICIONES DE VACUNA

export const getAllVacuna = () => vacunaApi.get("/");

export const createVacuna = (vacuna) => vacunaApi.post("/", vacuna);

export const deleteVacuna = (id) => vacunaApi.delete(`/${id}`);

export const updateVacuna = (id, vacuna) => vacunaApi.put(`/${id}/`, vacuna);

export const getVacuna = (id) => vacunaApi.get(`/${id}`);

// PETICIONES DE REGISTRO 

export const getAllRegistrar = () => registrarApi.get("/");

export const createRegistrar = (registrar) => registrarApi.post("/", registrar);

export const deleteRegistrar = (id) => registrarApi.delete(`/${id}`);

export const updateRegistrar = (id, registrar) => registrarApi.put(`/${id}/`, registrar);

export const getRegistrar = (id) => registrarApi.get(`/${id}`);


// PETICIONES DE DONACION

export const getAllDonacion = () => donacionApi.get("/");

export const createDonacion = (donacion) => donacionApi.post("/", donacion);

export const deleteDonacion = (id) => donacionApi.delete(`/${id}`);

export const updateDonacion = (id, donacion) => donacionApi.put(`/${id}/`, donacion);

export const getDonacion = (id) => donacionApi.get(`/${id}`);


// PETICIONES VISITA

export const getAllVisita = () => visitaApi.get("/");

export const createVisita = (visita) => visitaApi.post("/", visita);

export const deleteVisita = (id) => visitaApi.delete(`/${id}`);

export const updateVisita = (id, visita) => visitaApi.put(`/${id}/`, visita);

export const getVisita = (id) => visitaApi.get(`/${id}`);


// PETICIONES PARA ADOPCION

export const getAllAdopcion = () => adopcionApi.get("/");

export const createAdopcion = (adopcion) => adopcionApi.post("/", adopcion);

export const deleteAdopcion = (id) => adopcionApi.delete(`/${id}`);

export const updateAdopcion = (id, adopcion) => adopcionApi.put(`/${id}/`, adopcion);

export const getAdopcion = (id) => adopcionApi.get(`/${id}`);


// PETICIONES PARA USUARIOS

export const getAllUsuario = () => usuarioApi.get("/");

export const createUsuario = (usuario) => usuarioApi.post("/", usuario);

export const deleteUsuario = (id) => usuarioApi.delete(`/${id}`);

export const updateUsuario = (id, usuario) => usuarioApi.put(`/${id}/`, usuario);

export const getUsuario = (id) => usuarioApi.get(`/${id}`);


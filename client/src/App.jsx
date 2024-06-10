import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { TaskFormPage } from "./pages/TaskFormPage";
import { TasksPage } from "./pages/TasksPage";
import { MaltratoPage } from "./pages/MaltratoPage";
import { MaltratoFormPage } from "./pages/MaltratoFormPage";
import { VacunaPage } from "./pages/VacunaPage";
import { VacunaFormPage } from "./pages/VacunaFormPage";
import { RegistrarPage } from "./pages/RegistrarPage";
import { RegistrarFormPage } from "./pages/RegistrarFormPage";
import { DonacionPage } from "./pages/DonacionPage"
import { DonacionFormPage } from "./pages/DonacionFormPage"
import { VisitaPage } from "./pages/VisitaPage"
import { VisitaFormPage } from "./pages/VisitaFormPage"
import { AdopcionFormPage} from "./pages/AdopcionFormPage"
import { AdopcionPage} from "./pages/AdopcionPage"
import { UsuarioFormPage} from "./pages/UsuarioFormPage"
import { UsuarioPage } from "./pages/UsuarioPage"
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          {/* redirect to tasks */}
          <Route path="/" element={<Navigate to="/tasks" />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
          <Route path="/maltrato" element={<MaltratoPage />} />
          <Route path="/maltratos-create" element={<MaltratoFormPage />} />
          <Route path="/maltrato/:id" element={<MaltratoFormPage />} />
          <Route path="/vacuna" element={<VacunaPage />} />
          <Route path="/vacuna-create" element={<VacunaFormPage />} />
          <Route path="/vacuna/:id" element={<VacunaFormPage />} />
          <Route path="/registrar" element={<RegistrarPage />} />
          <Route path="/registrar-create" element={<RegistrarFormPage />} />
          <Route path="/registrar/:id" element={<RegistrarFormPage />} />
          <Route path="/donacion" element={<DonacionPage />} />
          <Route path="/donacion-create" element={<DonacionFormPage />} />
          <Route path="/donacion/:id" element={<DonacionFormPage />} />
          <Route path="/visita" element={<VisitaPage />} />
          <Route path="/visita-create" element={<VisitaFormPage />} />
          <Route path="/visita/:id" element={<VisitaFormPage />} />
          <Route path="/adopcion" element={<AdopcionPage />} />
          <Route path="/adopcion-create" element={<AdopcionFormPage />} />
          <Route path="/adopcion/:id" element={<AdopcionFormPage />} />
          <Route path="/usuario" element={<UsuarioPage />} />
          <Route path="/usuario-create" element={<UsuarioFormPage />} />
          <Route path="/usuario/:id" element={<UsuarioFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;

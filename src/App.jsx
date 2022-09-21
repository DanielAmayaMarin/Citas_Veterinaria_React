import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
  const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(pacientesLS);
  const [paciente, setPaciente] = useState({});


  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.Id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <section className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </section>
    </div>
  );
}

export default App;

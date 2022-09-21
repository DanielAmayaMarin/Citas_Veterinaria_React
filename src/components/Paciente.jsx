const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas, Id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("Deseas eliminar este paciente");
    if (respuesta) {
      eliminarPaciente(Id);
    }
  };
  return (
    <section className="mx-5 mb-7 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <section className="flex justify-between mt.10">
        <button
          type="button"
          onClick={() => {
            setPaciente(paciente);
          }}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-bold uppercase"
        >
          Editar
        </button>
        <button
          type="button"
          onClick={handleEliminar}
          className="py-2 px-10 bg-red-600 hover:bg-red-700 rounded-md text-white font-bold uppercase"
        >
          Eliminar
        </button>
      </section>
    </section>
  );
};

export default Paciente;

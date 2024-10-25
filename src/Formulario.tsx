import React, { useState } from "react";

interface Usuario {
  nombre: string;
  edad: number;
  esEstudiante: boolean;
  direccion: string;
}

const Formulario: React.FC = () => {
  const [usuario, setUsuario] = useState<Usuario>({
    nombre: "",
    edad: 0,
    esEstudiante: false,
    direccion: ""
  });

  const [usuariosMostrados, setUsuariosMostrados] = useState<Usuario[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setUsuario({
      ...usuario,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsuariosMostrados([...usuariosMostrados, usuario]);
    limpiarCampos();
  };

  const limpiarCampos = () => {
    setUsuario({
      nombre: "",
      edad: 0,
      esEstudiante: false,
      direccion: ""
    });
  };

  return (
    <div>
    <div className=" flex p-10">
      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-lime-600 p-6 rounded-lg w-96 h-4/5 mx-auto mt-20 shadow-lg hover:bg-emerald-600 transition duration-300"
      >
        <h2 className="text-2xl text-white font-bold text-center mb-4">
          Registro de Usuario
        </h2>
        <div className="flex flex-col">
          <label className="text-lg text-white">Nombre:</label>
          <input
            className="p-2 rounded bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Jose"
            type="text"
            name="nombre"
            value={usuario.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-white">Edad:</label>
          <input
            className="p-2 rounded bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="number"
            name="edad"
            value={usuario.edad}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center">
          <label className="text-lg text-white mr-4">Es Estudiante:</label>
          <input
            className="w-6 h-6"
            type="checkbox"
            name="esEstudiante"
            checked={usuario.esEstudiante}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-lg text-white">Dirección:</label>
          <input
            className="p-2 rounded bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="text"
            name="direccion"
            value={usuario.direccion}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition duration-300"
        >
          Agregar Usuario
        </button>
        <button
          type="button"
          onClick={limpiarCampos}
          className="bg-red-800 text-white py-2 rounded-lg hover:bg-red-700 transition duration-300 mt-2"
        >
          Clean
        </button>
      </form>

      {usuariosMostrados.length > 0 && (
        <div className="mt-10 w-46 flex flex-col m-10 p-10 mx-20">
          {usuariosMostrados.map((usuario, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 bg-lime-600 p-6 rounded-lg w-96 mx-auto mt-4 shadow-lg  hover:bg-emerald-800"
            >
              <h2 className="text-2xl text-white font-bold text-center mb-4">
                Usuario {index + 1}
              </h2>
              <p className="text-lg text-white">
                <strong>Nombre:</strong> {usuario.nombre}
              </p>
              <p className="text-lg text-white">
                <strong>Edad:</strong> {usuario.edad}
              </p>
              <p className="text-lg text-white">
                <strong>Es Estudiante:</strong>{" "}
                {usuario.esEstudiante ? "Sí" : "No"}
              </p>
              <p className="text-lg text-white">
                <strong>Dirección:</strong> {usuario.direccion}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  );
};

export default Formulario;

import React, { useEffect, useState } from 'react';

interface Estudiante {
  id: number;
  nombre: string;
  edad: number;
  correo: string;
}

const Consumo: React.FC = () => {
  const [estudiantes, setEstudiantes] = useState<Estudiante[]>([]);
  const [nuevoEstudiante, setNuevoEstudiante] = useState<Estudiante>({
    id: 0,
    nombre: '',
    edad: 0,
    correo: ''
  });

  // Función para obtener la lista de estudiantes
  const fetchEstudiantes = async () => {
    try {
      const response = await fetch('https://localhost:7183/api/estudiantes/getEstudiantes');
      const data = await response.json();
      
      if (data && data.data) {
        setEstudiantes(data.data); // Asegúrate de acceder a los estudiantes correctamente
      } else {
        console.error("La respuesta no contiene la lista de estudiantes", data);
      }
    } catch (error) {
      console.error('Error al obtener estudiantes', error);
    }
  };

  // Función para eliminar un estudiante
  const handleDelete = async (id: number) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este estudiante?')) {
      try {
        const response = await fetch(`https://localhost:7183/api/estudiantes/deleteEstudiante/${id}`, {
          method: 'DELETE', // Asegúrate de que el método sea DELETE
        });

        if (response.ok) {
          console.log('Estudiante eliminado');
          // Actualizar la lista de estudiantes después de eliminar
          setEstudiantes(estudiantes.filter(estudiante => estudiante.id !== id));
        } else {
          console.error('Error al eliminar estudiante', response.status, await response.text());
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  // Función para agregar un nuevo estudiante
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault(); // Evitar el envío del formulario

    try {
      const response = await fetch('https://localhost:7183/api/estudiantes/createEstudiantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoEstudiante),
      });

      if (response.ok) {
        const data = await response.json();
        setEstudiantes([...estudiantes, { ...nuevoEstudiante, id: data.data }]); // Agregar el nuevo estudiante a la lista
        setNuevoEstudiante({ id: 0, nombre: '', edad: 0, correo: '' }); // Limpiar el formulario
      } else {
        console.error('Error al agregar estudiante', response.status, await response.text());
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchEstudiantes(); // Cargar estudiantes al montar el componente
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Estudiantes</h1>
      
      {/* Formulario para agregar estudiantes */}
      <form onSubmit={handleAdd} className="mb-4">
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoEstudiante.nombre}
          onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, nombre: e.target.value })}
          required
          className="border p-2 mr-2 rounded"
        />
        <input
          type="number"
          placeholder="Edad"
          value={nuevoEstudiante.edad}
          onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, edad: Number(e.target.value) })}
          required
          className="border p-2 mr-2 rounded"
        />
        <input
          type="email"
          placeholder="Correo"
          value={nuevoEstudiante.correo}
          onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, correo: e.target.value })}
          required
          className="border p-2 mr-2 rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Añadir Estudiante
        </button>
      </form>

      <ul>
        {estudiantes.map(estudiante => (
          <li key={estudiante.id} className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded">
            <span>
              {estudiante.nombre} - {estudiante.edad} años - {estudiante.correo}
            </span>
            <button 
              onClick={() => handleDelete(estudiante.id)} 
              className="ml-4 bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Consumo;

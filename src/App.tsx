import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Formulario from './Formulario';
import Counter from './Counter';
import ToDoList from './ToDoList';
import Examen from './examen';
import Consumo from './consumodeNet';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-teal-600 p-4 flex justify-around">
          <Link to="/counter" className="text-white text-lg hover:text-gray-300">
            Contador
          </Link>
          <Link to="/formulario" className="text-white text-lg hover:text-gray-300">
            Formulario
          </Link>
          <Link to="/todolist" className="text-white text-lg hover:text-gray-300">
            To Do List
          </Link>
          <Link to="/examen" className="text-white text-lg hover:text-gray-300">
            Examen
          </Link>
          <Link to="/consumo" className="text-white text-lg hover:text-gray-300">
            Consumo
          </Link> {/* Agrega el enlace para el componente Consumo */}
        </nav>

        <div className="container mx-auto text-center py-8">
          <h1 className="text-3xl font-bold text-teal-700 mb-4">
            Bienvenido a mis programas de prácticas de séptimo cuatrimestre<br />
            Balcazar Chuc Luis Antonio 73
          </h1>

          <div className="flex justify-center my-6">
            <img
              className="rounded-full w-40 h-40 border-4 border-teal-600 shadow-lg"
              src="/Fotomia.png"
              alt="Mi Foto"
            />
          </div>

          <Routes>
            <Route path="/counter" element={<Counter />} />
            <Route path="/formulario" element={<Formulario />} />
            <Route path="/todolist" element={<ToDoList />} />
            <Route path="/examen" element={<Examen />} />
            <Route path="/consumo" element={<Consumo />} /> {/* Añade la ruta para Consumo */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

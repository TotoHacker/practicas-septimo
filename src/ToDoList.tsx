  import React, { useReducer, useCallback, useMemo, useState } from 'react';
  import { taskReducer, initialTaskState } from './types';

  const ToDoList: React.FC = () => {
    const [state, dispatch] = useReducer(taskReducer, initialTaskState);
    const [taskText, setTaskText] = useState('');

    const handleAddTask = useCallback(() => {
      if (taskText.trim() !== '') {
        dispatch({ type: 'ADD_TASK', payload: taskText });
        setTaskText('');
      }
    }, [taskText]);

    const handleToggleTask = useCallback((id: number) => {
      dispatch({ type: 'TOGGLE_TASK', payload: id });
    }, []);

    const completedTaskCount = useMemo(() => {
      return state.tasks.filter(task => task.completed).length;
    }, [state.tasks]);

    return (
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-8">
        <h2 className="text-3xl font-bold text-teal-600 mb-6">Lista de Tareas</h2>

        {/* Formulario para agregar nueva tarea */}
        <div className="flex items-center mb-4">
          <input
            className="border border-gray-300 rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            type="text"
            value={taskText}
            onChange={e => setTaskText(e.target.value)}
            placeholder="Escribe una nueva tarea"
          />
          <button
            className="bg-teal-600 text-white px-4 py-2 rounded-r hover:bg-teal-700 transition duration-300"
            onClick={handleAddTask}
          >
            Agregar
          </button>
        </div>

        {/* Lista de tareas */}
        <ul className="space-y-2">
          {state.tasks.map(task => (
            <li
              key={task.id}
              className={`cursor-pointer p-2 rounded-lg transition-colors duration-300 ${
                task.completed
                  ? 'bg-gray-200 line-through text-gray-500'
                  : 'bg-teal-100 text-teal-800 hover:bg-teal-200'
              }`}
              onClick={() => handleToggleTask(task.id)}
            >
              {task.text}
            </li>
          ))}
        </ul>

        {/* Contador de tareas completadas */}
        <div className="mt-6 text-teal-700">
          <p className="text-lg font-medium">
            Tareas completadas: <span className="font-bold">{completedTaskCount}</span> / {state.tasks.length}
          </p>
        </div>
      </div>
    );
  };

  export default ToDoList;

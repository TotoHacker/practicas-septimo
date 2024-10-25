import React, { useState, useEffect, useMemo } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const [incrementCount, setIncrementCount] = useState(0);

  // Memoriza el total de incrementos
  const totalIncrements = useMemo(() => {
    console.log("Calculando total de incrementos...");
    return incrementCount;
  }, [incrementCount]);

  // Efecto secundario que se ejecuta cada vez que 'count' cambia
  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
    setIncrementCount(incrementCount + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
    setIncrementCount(0); // Resetea también el total de incrementos
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto mt-8">
      <h2 className="text-2xl font-bold text-teal-600 mb-4">Contador</h2>
      <p className="text-4xl font-semibold mb-4">{count}</p>
      <div className="flex space-x-4">
        <button
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-300"
          onClick={handleIncrement}
        >
          Incrementar
        </button>
        <button
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-300"
          onClick={handleDecrement}
        >
          Decrementar
        </button>
        <button
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition duration-300"
          onClick={handleReset}
        >
          Reiniciar
        </button>
      </div>
      <p className="mt-4 text-lg text-teal-700">
        Total de Incrementos: <span className="font-bold">{totalIncrements}</span>
      </p>
    </div>
  );
};

export default Counter;

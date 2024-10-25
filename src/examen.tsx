import React, { useEffect, useState } from "react";

function Examen() {
  const [backgroundColor, setBackgroundColor] = useState("bg-orange-400"); 
  
  useEffect(() => {
    const changeColor = () => {
      setBackgroundColor("bg-blue-400"); 
    };

    const timer = setTimeout(changeColor, 5000);

    return () => clearTimeout(timer);
  }, []); 
  return (
    <div className="flex flex-col items-center">
      <div className={`${backgroundColor} w-32 h-32 text-center items-center text-2xl text-red-950`}>
        Cambia de color
      </div>
    </div>
  );
}

export default Examen;

import React, { useState } from "react";
interface Tarea {
  name: string;
  descripcion: string;
  isDone: boolean;
}
const [tareas, setTareas] = useState<Tarea[]>([]);
export const TaskList = () => {
  return (
    <div>
      {tareas.map((value, index) => {
        return <li key={index}>{value.name}</li>;
      })}
    </div>
  );
};

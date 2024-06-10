import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      <h2 className="font-bold text-2xl mb-6 text-purple-900 font-sans rounded-lg bg-white p-3 shadow-md border border-black">
        Reportes de pérdida
      </h2>
      <div className="relative flex flex-col gap-4 w-1/2 max-h-screen overflow-y-auto border border-black rounded-lg p-6 bg-white shadow-lg">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Input from "./components/Input/Input";
import List from "./components/list/List";
import type { DataObj } from "./utils/Interface";

const App: React.FC = () => {
  const [todos, setTodos] = useState<DataObj[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("todo");
    if (stored) {
      setTodos(JSON.parse(stored));
    }
  }, []);

  const updateTodos = (newTodo: DataObj) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    localStorage.setItem("todo", JSON.stringify(newTodos));
  };

  return (
    <div className="mb-8">
      <header className="mt-5 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">
          <span className="text-green-500">জীবন</span>-
          <span className="text-red-500">তীর</span>
        </h1>
        <p>ছোট ছোট ধাপ থেকে অর্জিত হক বড় কিছু</p>
      </header>
      <section className="mt-6">
        <Input onAdd={updateTodos} />
      </section>
      <section className="mt-6 px-5">
        {/* <Navbar /> */}
      <List data={todos} setData={setTodos} />
      </section>
    </div>
  );
};

export default App;

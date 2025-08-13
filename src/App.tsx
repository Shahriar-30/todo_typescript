import React from "react";
import Input from "./components/Input/Input";
import Navbar from "./components/navbar/Navbar";

const App: React.FC = () => {
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
        <Input />
      </section>
      <section className="mt-6">
        <Navbar />
      </section>
    </div>
  );
};

export default App;

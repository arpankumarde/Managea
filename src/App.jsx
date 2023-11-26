import React from "react";
import { EventEntry, EventList, Navbar } from "./components";
import { useLocalStorage } from "./hooks";
import { Home, Register } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  return (
    <div className="min-h-screen bg-[url('/src/assets/bg.jpg')]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home {...{ tasks, setTasks }} />} />
          <Route
            path="/manage"
            element={<EventList {...{ tasks, setTasks }} />}
          />
          <Route
            path="/add"
            element={<EventEntry {...{ tasks, setTasks }} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

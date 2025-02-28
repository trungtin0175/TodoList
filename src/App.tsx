import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./pages/TodoList";
import About from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;

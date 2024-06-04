import About from "./views/About/About.jsx";
import MyAppointments from "./views/MyAppointments/MyAppointments.jsx";
import Home from "./views/Home/Home.jsx";
import Login from "./views/Login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Register from "./views/Register/Register.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FormAppointments from "./views/FormAppointments/FormAppointments.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/form-appointments" element={<FormAppointments />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

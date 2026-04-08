import { Route, Routes } from "react-router-dom";
import DefaultPageLogin from "./components/layout/defaultPageLogin";
import Login from "./pages/login";
import Register from "./pages/register";
import DefaultPageRegister from "./components/layout/defaultPageRegister";
import Sidebar from "./components/layout/sidebar";
import DefalultPageAdmin from "./components/layout/defaultPageAdmin";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPageLogin />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/register" element={<DefaultPageRegister />}>
        <Route index element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<DefalultPageAdmin />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;

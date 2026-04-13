import { Route, Routes } from "react-router-dom";
import DefaultPageLogin from "./components/layout/defaultPageLogin";
import Login from "./pages/login";
import Register from "./pages/register";
import DefaultPageRegister from "./components/layout/defaultPageRegister";
import Sidebar from "./components/layout/sidebar";
import DefalultPageAdmin from "./components/layout/defaultPageAdmin";
import Dashboard from "./pages/dashboard";
import Appointments from "./pages/appointments";
import Customers from "./pages/customers";
import Payments from "./pages/payments";
import Settings from "./pages/settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPageLogin />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/register" element={<DefaultPageRegister />}>
        <Route index element={<Register />} />
      </Route>
      <Route path="/" element={<DefalultPageAdmin />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;

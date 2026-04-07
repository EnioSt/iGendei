import { Route, Routes } from "react-router-dom";
import DefaultPageLogin from "./components/layout/defaultPageLogin";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultPageLogin />}>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;

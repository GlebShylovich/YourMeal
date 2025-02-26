import { Routes, Route } from "react-router-dom";
import Page from "./pages/Page/Page";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Register />} />
    </Routes>
  );
}

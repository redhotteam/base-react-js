import "./i18n";
import { Routes, Route, Navigate } from "react-router";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/uk" replace />} />

      <Route path="/:lng">
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;

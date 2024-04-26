import { Route, Routes } from "react-router-dom";
import NeswPage from "./pages/NeswPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NeswPage />} />
      <Route path="/:category" element={<NeswPage />} />
    </Routes>
  );
}

export default App;

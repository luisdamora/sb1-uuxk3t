import PageGracias from "@/PageGracias.tsx";
import PageHome from "@/PageHome.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/gracias" element={<PageGracias />} />
      </Routes>
    </Router>
  );
}

export default App;

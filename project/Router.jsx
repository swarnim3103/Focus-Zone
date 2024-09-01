import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  App,
  Dashboard,
  Game,
  Notebook
} from "./src/pages/index.js";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/game" element={<Game />} />
        <Route path="/notebook" element={<Notebook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
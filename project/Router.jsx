import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  App,
} from "./src/pages/index.js";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
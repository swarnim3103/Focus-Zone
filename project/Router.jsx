import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  App
} from "./src/App";

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
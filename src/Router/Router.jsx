import { Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth";
import { AUTH_PAGE } from "./const";

function Router() {
  return (
    <Routes>
      <Route path={AUTH_PAGE} element={<Auth />} />
    </Routes>
  );
}

export default Router;

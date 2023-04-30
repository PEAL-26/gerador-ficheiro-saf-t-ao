import {
  // BrowserRouter,
  Routes as RoutesDom,
  Route,
  HashRouter,
} from "react-router-dom";

// Paginas
import Home from "../pages/home";
import { BASE_URL } from "../config/app";
import DocumentacaoApi from "../pages/documentacao-api";
import DocumentacaoAgt from "../pages/documentacao-agt";

export default function Routes() {
  return (
    // <BrowserRouter>
    <HashRouter>
      <RoutesDom>
        <Route path={`/gerador-ficheiro-saf-t-ao/`} element={<Home />} />
        <Route path={`/documentacao-api`} element={<DocumentacaoApi />} />
        <Route path={`/documentacao-agt`} element={<DocumentacaoAgt />} />
        <Route path="*" element={<Home />} />
      </RoutesDom>
    </HashRouter>
    // </BrowserRouter>
  );
}

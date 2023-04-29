import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";

// Paginas
import Home from "../pages/home";
import DocumentacaoApi from "../pages/documentacao-api";
import DocumentacaoAgt from "../pages/documentacao-agt";

export default function Routes() {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route path="/" element={<Home />} />
        <Route path="documentacao-api" element={<DocumentacaoApi />} />
        <Route path="documentacao-agt" element={<DocumentacaoAgt />} />
        <Route path="*" element={<Home />} />
      </RoutesDom>
    </BrowserRouter>
  );
}

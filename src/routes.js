import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import NaoEncontrado from "paginas/NaoEncontrado";
import Post from "paginas/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />


      {/* Estrutura para criar as rotas de links */}
      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id" element={<Post />} />

        {/* 
        Na rota "/", a estrutura a ser renderizada é:

        <PaginaPadrao>
          <Inicio/>
        </PaginaPadrao>
         
        Na rota "/sobreMim", a estrutura a ser renderizada é:

        <PaginaPadrao>
          <SobreMim/>
        </PaginaPadrao>

        */}

        <Route path="*" element={<NaoEncontrado />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;

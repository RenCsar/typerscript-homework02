import PaginaPadrao from "./components/PaginaPadrao";
import Rodape from "./components/Rodape";
import Opiniao from "./pages/Opiniao";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/Inicio";
import Resenha from "./pages/Resenha";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>    
        <Menu />
        <Routes>          
        <Route  path="/" element ={<PaginaPadrao />}>  
          <Route path="/" element={<Inicio />} />
          <Route path="/Resenha" element={<Resenha />} />  
          <Route path="/Opiniao" element={<Opiniao />} />         
        </Route>

          <Route path="*" element={<div>Erro 404 - Página não encontrada</div>}/>
        </Routes>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Headernav from "./components/Headernav/Headernav";
import Catalogo from "./components/body/Catalogo/Catalogo";
import Card from "./components/body/Card/Card";
import Adote from "./components/body/Adote/Adote";
import Contato from "./components/Contato/contato";

export default function AplicationRoutes() {
    return (
        <BrowserRouter>
        <Headernav />
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalogo/>} />
                <Route path="/card" element={<Card/>} />
                <Route path="/adote" element={<Adote/>} />
                <Route path="/contato" element={<Contato/>} />
            </Routes>
        </BrowserRouter>

    )

}
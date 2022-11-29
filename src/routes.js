import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Headernav from "./components/Headernav/Headernav";

export default function AplicationRoutes() {
    return (
        <BrowserRouter>
        <Headernav />
            <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/post" element={<h1>Post</h1>} />
            </Routes>
        </BrowserRouter>

    )

}
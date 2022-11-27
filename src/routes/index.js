import {Route, BrowserRouter,Routes} from "react-router-dom"

export default function AplicationRoutes(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="./produtos" element= {<h1>Produtos</h1>}/>
        <Route path="./catologo" element= {<h1>Catologo</h1>}/>
        <Route path="./adote" element= {<h1>Adote</h1>}/>
        <Route path="./contato" element= {<h1>Contato</h1>}/>
        </Routes>
        </BrowserRouter>

    )

}
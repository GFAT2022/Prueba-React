import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Page/Home";
import {Galeria} from"./Page/Galeria";
import { CarritoCompra } from "./Page/CarritoCompra";

import Foto from "./Components/Arrays/Foto"



function App() {


    return(
      <>

        <BrowserRouter>
            <Routes>

                <Route path="/"element={<Home/>}/>
                <Route path="/galeri" element={<Galeria/>}/>
                <Route path="/carrite" element={<CarritoCompra/>}/>
                <Route path="productoFot/:ProdId" element={<Foto/>}/>
             
            </Routes>
        </BrowserRouter>

      </>
    )

}

export default App;
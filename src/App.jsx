import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Page/Home";
import {Galeria} from"./Page/Galeria";
import { CartWidget } from "./Components/components/CartWidget";






function App() {


    return(
      <>
      
      {/* <ItemLisContainer/> */}
      {/* <NavBar/> */}

      {/* <BrowserRouter>
          <Routes>
              <Route path="/" element={<div>Pagina home</div>}/>
              <Route path="galeria" element={<div>Pagina galeria</div>}/>
              <Route path="productos" element={<div>Pagina productos</div>}/>
              <Route path="*" element={<div>Error</div>}/>
          </Routes>
      </BrowserRouter>
       */}

        <BrowserRouter>
            <Routes>
                <Route path="/"element={<Home/>}/>
                <Route path="/galeri" element={<Galeria/>}/>
                <Route path="/carrite" element={<CartWidget/>}/>
            </Routes>
        </BrowserRouter>

      </>
    )

}

export default App;
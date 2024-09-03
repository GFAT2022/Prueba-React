import { ItemLisContainer } from "../Components/ItemListContainer/ItemListContainer";
import { NavBar } from "../Components/NavBar/NavBar";

export const Home = () => {
    return(
        <>
            <NavBar/>
            <h1>Home pagina</h1>
            <ItemLisContainer/>
        </>
    )
}
import { useEffect } from "react";
import CardList from "../components/CardList";
import { useItemStore } from "../store/useItemStore";

const Home = () => {
    const items = useItemStore((state) => state.items);
    const getItems = useItemStore((state) => state.getItems);

    useEffect (() => {
        getItems("character"); 
    }, []);

    return (
        <section className="container py-4">
            <h2 className="mb-4">Personajes de Rick and Morty</h2>
            <CardList data ={items}/>
        </section>
    )
}

export default Home;
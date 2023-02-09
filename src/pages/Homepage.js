import GalleryCard from "../components/GalleryCard/GalleryCard";
import itemsFromData from "../data/items";
import FilterBar from "../components/FilterBar/FilterBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const HomePage = (props) => {

    const [items, setItems] = useState([]);
    const [defaultItems, setDefaultItems] = useState([]);

    const onGalleryCardClicked = (collection) => {
        props.onGalleryCardClicked(collection); 
    }

    useEffect(() => {
        let i = 0;
        let types = ["cocktail", "wine", "cheese"]

        const galleryCardToBeRendered = itemsFromData.map(collection => {
            let temp =
                <Link key={types[i]} type={types[i]} onClick={() => onGalleryCardClicked(collection)} to={`/product/${types[i]}`}>
                    <GalleryCard items={collection} />
                </Link>
            i = i + 1;
            return temp;
        });
        setItems([galleryCardToBeRendered]);
        setDefaultItems(galleryCardToBeRendered);

    }, []);

    const onFilter = (typeToBeFiltered) => {
        const copy = [...defaultItems];
        const cardsToBeRendered = copy.filter(card => {
            if (card.props.type === typeToBeFiltered) {
                return card;
            }
        });

        setItems([cardsToBeRendered]);
    }

    return (
        <>
            <FilterBar onFilter={onFilter}></FilterBar>
            {items}
        </>
    );
}

export default HomePage;
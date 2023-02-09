import { Routes, Route} from "react-router-dom";
import HomePage from "../pages/Homepage";
import ProductPage from "../pages/Productpage";
import "../App/App.css";
import { useState } from "react";


const App = () => {

    const [collectionForProductPage, setCollectionForProductPage] = useState([]);

    const onGalleryCardClicked = (collection) => {
        setCollectionForProductPage(collection);
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage onGalleryCardClicked={onGalleryCardClicked}/>} />
                <Route path="/product/:type" element={<ProductPage collection={collectionForProductPage} />} />

            </Routes>
        </>
    );
}


export default App;
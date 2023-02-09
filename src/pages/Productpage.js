import { useEffect } from "react";
import { useState } from "react";
import "../pages/Productpage.css";

const ProductPage = (props) => {

    const [aantal, setAantal] = useState(0);

    const addedToCart = () => {
        setAantal(aantal + 1)
    }
    const removeFromCart = () => {
        if(aantal > 0){
            setAantal(aantal - 1)
        }
    }


    useEffect(() => {
        window.scrollTo(0, 0);
    })

    const ToBeRendered = props.collection.map(item => {
        return (
            <li key={item.name} className="productpage__listItem">
                <img src={item.img} alt={item.alt} />
                <p>{item.name}</p>
                <p>{item.description}</p>
                <div className="button__wrapper">
                    <button onClick={addedToCart} className="buttons">Add to Cart</button>
                    <button onClick={removeFromCart} className="buttons1">Remove from Cart</button>
                </div>
            </li>
        )
    })
    return (
        <article className="productpage">
            <figure className="count">{aantal}</figure>
            <ul className="productpage__list">
                {ToBeRendered}
            </ul>
        </article>
    );
}

export default ProductPage;

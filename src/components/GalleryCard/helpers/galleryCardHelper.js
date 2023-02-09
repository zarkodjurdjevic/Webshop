/*helper that loads images from data object and set them in figs*/

let iterator = 1;
let classToBeAdded = "";
function getToBerenderedFigures(drinks) {
    let drinksToBeRendered = drinks.map(drink => {
        switch (iterator) {
            case 1:
                classToBeAdded = "gallerycard__figure gallerycard__figure--big";
                break;
            case 2:
                classToBeAdded += "gallerycard__figure gallerycard__figure--middle";
                break;
            case 3:
                classToBeAdded += "gallerycard__figure gallerycard__figure--middle";
                break;
            default:
                classToBeAdded = "gallerycard__figure gallerycard__figure--small"
                break;
        }
        iterator += 1;

        return (
            <figure key={drink.image} className={classToBeAdded}>
                <img className="gallerycard__img" src={drink.img} alt={drink.alt}></img>
            </figure>
        );
    })
    iterator = 1;
    return drinksToBeRendered;
}

export default getToBerenderedFigures
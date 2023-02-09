import "../GalleryCard/GalleryCard.css";
import getToBerenderedFigures from "../GalleryCard/helpers/galleryCardHelper";


const GalleryCard = (props) => {

    return (
        <article className="gallerycard">
            {getToBerenderedFigures(props.items)}
        </article>
    );
}

export default GalleryCard;
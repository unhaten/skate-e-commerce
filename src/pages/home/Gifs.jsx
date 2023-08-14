import gif1 from "../../assets/skate-gif-1.gif";
import gif2 from "../../assets/skate-gif-2.gif";
import gif3 from "../../assets/skate-gif-3.gif";

const Gifs = () => {
    return (
        <div className="home__gifs">
            <ul className="gifs__list">
                <li className="gifs__item">
                    <img src={gif1} alt="gif1" className="gifs__image" />
                </li>
                <li className="gifs__item">
                    <img src={gif2} alt="gif1" className="gifs__image" />
                </li>
                <li className="gifs__item">
                    <img src={gif3} alt="gif1" className="gifs__image" />
                </li>
            </ul>
        </div>
    );
};

export default Gifs;

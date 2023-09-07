import { Link } from "react-router-dom";
import gif from "../../assets/skate-gif-1.gif";

const WaitingFor = () => {
    return (
        <div className="home__waiting">
            <h2 className="waiting__header">What are you waiting for?</h2>
            <div className="waiting__background">
                <Link to="skates" className="waiting__button">
                    Order Now!
                </Link>
            </div>
        </div>
    );
};

export default WaitingFor;

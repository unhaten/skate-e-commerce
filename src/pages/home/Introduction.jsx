
const Introduction = () => {
    return (
        <div className="home__introduction dark-bg">
            <p className="introduction__text">
                We gladly represent you our the most reliable and proficient
                skateboards. The coolest part: you can simple afford such board
                to yourself!
            </p>
            <h3 className="introduction__benefits-text">Why us?</h3>
            <ul className="introduction__benefits">
                <li className="benefits__item">
                    <p className="benefits__text">Premium Quality and Safety</p>
                    <div className="benefits__icon"></div>
                </li>
                {/* Emphasize that your skateboards are made from high-quality materials, ensuring durability and safety for riders. This advantage appeals to both parents (for their teen children) and adults who prioritize safety while skateboarding. */}
                <li className="benefits__item">
                    <p className="benefits__text">Customization Options</p>
                    <div className="benefits__icon reversed"></div>
                </li>
                {/* Offer customization services, allowing customers to design their own skateboards with unique graphics, colors, and accessories. Personalization fosters a deeper connection between customers and their boards. */}
                <li className="benefits__item">
                    <p className="benefits__text">
                        Convenience and Accessibility
                    </p>
                    <div className="benefits__icon"></div>
                </li>
                {/* If you have both physical stores and an online presence, emphasize the convenience of shopping either in-store or online. Offer fast and reliable shipping options for online orders. */}
                <li className="benefits__item">
                    <p className="benefits__text">Environmentally Conscious</p>
                    <div className="benefits__icon reversed"></div>
                </li>
                {/* If your skateboards are made from eco-friendly materials or your store participates in sustainability initiatives, promote your commitment to environmental responsibility. */}
                <li className="benefits__item">
                    <p className="benefits__text">Exclusivity</p>
                    <div className="benefits__icon"></div>
                </li>
                {/* Position your store as inclusive and welcoming to people of all backgrounds, genders, and abilities. Emphasize that skateboarding is for everyone. */}
            </ul>
        </div>
    );
};

export default Introduction;

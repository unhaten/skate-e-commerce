const Reviews = () => {
    return (
        <div className="home__reviews">
            <h2 className="reviews__header">Reviews of out happy customers:</h2>
            <ul className="reviews__list">
                <li className="reviews__item">
                    <div className="reviews__top">
                        <div className="reviews__icon"></div>
                        <h3 className="reviews__name">Steven Jobs</h3>
                    </div>
                    <div className="reviews__bottom">
                        <p className="reviews__text">
                            I did not even know that skateboards can be such
                            convenient and stylish at the same tame! I highly
                            recommend this store to everyone who wants to get a
                            skateboard.
                        </p>
                    </div>
                </li>
                <li className="reviews__item">
                    <div className="reviews__top">
                        <div className="reviews__icon"></div>
                        <h3 className="reviews__name">Bob Shmoe</h3>
                    </div>
                    <div className="reviews__bottom">
                        <p className="reviews__text">
                            I think that this is the best store that provides
                            best prices and reliable skates for everyone. Adults
                            and teens are welcome here!
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Reviews;

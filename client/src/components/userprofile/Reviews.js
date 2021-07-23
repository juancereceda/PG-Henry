import React, {useState} from 'react';
import { Revs } from './ReviewsStyles';
import { useSelector } from 'react-redux';

export default function Reviews () {
    const [review, setReview] = useState({review: null});

    let bookings = useSelector(state => state.bookings);

    const flag = bookings.filter(booking => booking.status === "approved");

    function handleChange(e) {
        e.preventDefault();

        setReview(rev => ({
            ...rev,
            review: e.target.value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Your review: ${review.review} was sent.`);
        setReview({review: null})
    }

    return (
        <Revs>
            <h3 className="tit">Write us a review!</h3>
            {flag.length > 0 ? 
            <form onSubmit={(e) => handleSubmit(e)}>
                <textarea id="esc" value={review.review} onChange={(e) => handleChange(e)} />
                <button id="send" type="submit">Enviar</button>
            </form>
             : null}
        </Revs>
    )
}
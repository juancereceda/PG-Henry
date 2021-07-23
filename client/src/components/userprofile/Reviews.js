import React, {useState} from 'react';
import { Revs } from './ReviewsStyles';

export default function Reviews () {
    const [review, setReview] = useState({review: null});


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
            {/* {flag === true ?  */}
            <form onSubmit={(e) => handleSubmit(e)}>
                <textarea id="esc" value={review.review} onChange={(e) => handleChange(e)} />
                <button id="send" type="submit">Enviar</button>
            </form>
            {/* : null*/}
        </Revs>
    )
}
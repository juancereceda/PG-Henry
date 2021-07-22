import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getBook } from '../../actions/users';
import { useParams } from 'react-router-dom';

export default function DetailedBooking() {
    const dispatch = useDispatch();

    const selectedBook = useSelector(state => state.selBook);
    let { id } = useParams();

    useEffect(() => {
        dispatch(getBook(id));
    }, [dispatch, id]);

    return (
        <div>
            <h1>Your booking:</h1>
            <table>
                <tr>
                    <th>Movie</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Field</th>
                    <th>Slot</th>
                    <th>Extras</th>
                    <th>Status</th>
                </tr>
                {selectedBook ? <tr><td>{selectedBook.title}</td><td>{selectedBook.date}</td><td>{selectedBook.time}</td><td>Field Here</td><td>{selectedBook.slot}</td><td>{selectedBook.extras}</td><td>{selectedBook.status}</td></tr> : null}
            </table>
        </div>
    )
};
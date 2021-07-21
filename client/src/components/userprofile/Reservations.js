import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UserRes } from './ReservationsStyles';
import { userBookings } from '../../actions/users';
import ResRow from './ResRow';

export default function Reservations () {
    const dispatch = useDispatch();

    const bookings = useSelector(state => state.bookings);

    useEffect(() => {
        dispatch(userBookings());
    }, [dispatch]);

    return (
        <UserRes>
            <h3 className="tit">Your Reservations</h3>
            {bookings.length > 0 ?
                <table>
                    <tr>
                        <th>Movie</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                    {bookings.map(buy => <ResRow title={buy.movie_title} date={buy.date} status={buy.status} id={buy.id} key={buy.id} />)}
                </table>
            : <h4>Sorry, no bookings found!</h4>}
        </UserRes>
    )
}
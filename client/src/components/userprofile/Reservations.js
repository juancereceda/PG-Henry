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
                    <th>Schedule</th>
                    <th>Field</th>
                    <th>Slot</th>
                    <th>Status</th>
                </tr>
                {bookings.map( buy => <ResRow title={buy.movie_title} date={buy.date} time={buy.time} lot={buy.parking_lot} status={buy.status} />)}
                {/* <tr>
                    <td>{bookings[0].movie_title}</td>
                    <td>Pending</td>
                    <td>Pending</td>
                    <td>{bookings[0].parking_lot}</td>
                    <td>{bookings[0].status}</td>
                </tr> */}
            </table>
            : <h4>Sorry, no bookings found!</h4>}
        </UserRes>
    )
}
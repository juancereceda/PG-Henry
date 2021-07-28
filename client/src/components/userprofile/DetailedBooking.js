import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBook } from "../../actions/users";
import { useParams } from "react-router-dom";
import { Booking } from "./DetailedBookingStyles";

export default function DetailedBooking() {
  const dispatch = useDispatch();

  const selectedBook = useSelector((state) => state.selBook);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getBook(id));
  }, [dispatch, id]);

  return (
    <Booking>
      {selectedBook ? (
        <div>
          <h2 className="tit">Your Purchase</h2>
          <div className="row">
            <div className="col">
              <h3 className="tit">Function</h3>
              <p>{selectedBook.movie_title}</p>
            </div>
            <div className="col">
              <h3 className="tit">Schedule</h3>
              <p>
                {selectedBook.date} at {selectedBook.time}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="tit">Site</h3>
              <p>Position {selectedBook.parking_lot} at FIELD</p>
            </div>
            <div className="col">
              <h3 className="tit">Extras</h3>
              <ul>
                {selectedBook.extras && selectedBook.extras.length > 0 ? (
                  selectedBook.extras.map((ele) => <li>{ele}</li>)
                ) : (
                  <li>No extras</li>
                )}
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="tit">Thanks for you buy!</h3>
              <ul className="ctc">
                <li>{selectedBook.username}</li>
                <li>{selectedBook.email}</li>
              </ul>
            </div>
            <div className="col">
              <h3 className="tit">Ticket</h3>
              <p className="war">
                This works as a <i>receipt</i>. Show it in the entrance.
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </Booking>
  );
}

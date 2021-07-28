import React, { useState } from "react";
import { Revs } from "./ReviewsStyles";
import { useSelector } from "react-redux";
import axios from "axios";
import swal from "sweetalert";

export default function Reviews() {
  const [review, setReview] = useState({ review: null });

  let bookings = useSelector((state) => state.bookings);
  const user = JSON.parse(window.localStorage.getItem("userdata")) || "";

  const flag = bookings.filter((booking) => booking.status === "approved");

  function handleChange(e) {
    e.preventDefault();
    console.log(user);
    setReview((rev) => ({
      ...rev,
      review: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const feedback = { author: user.username, text: review.review };

    await axios.post("http://localhost:3001/feedbacks", feedback);
    await swal(`${user.username} thank you very much for your feedback!`, {
      icon: "success",
      buttons: false,
      timer: 1500,
    });
    window.location.reload();
  }

  return (
    <Revs>
      <h3 className="tit">Write us a review!</h3>
      {flag.length > 0 ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <textarea
            id="esc"
            value={review.review}
            onChange={(e) => handleChange(e)}
          />
          <button id="send" type="submit">
            Send
          </button>
        </form>
      ) : null}
    </Revs>
  );
}

import React from "react";
import styled from "styled-components";

export default function ResRow({
  title,
  date,
  time,
  lot,
  extras,
  status,
  url,
}) {
  function handleClick(e) {
    e.preventDefault();

    window.open(url);
  }

  const But = styled.button`
    margin-top: 5px;
    border-radius: 5px;
    background-color: #e8e8e8;
    border: none;
    box-shadow: inset 2px 3px 5px rgba(0, 0, 0, 0.3),
      inset -2px -3px 5px rgba(0, 0, 0, 0.5);
    &:focus {
      box-shadow: inset -2px -3px 5px rgba(0, 0, 0, 0.3),
        inset 2px 3px 5px rgba(0, 0, 0, 0.5);
    }
  `;

  const colours = {
    processing: "#F4D03F",
    approved: "#58D68D",
    rejected: "#F05454",
  };

  let col = colours[status];

  const Stat = styled.td`
    color: ${col};
  `;

  return (
    <tr>
      <td>{title}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>Field Here</td>
      <td>{lot}</td>
      <td>{extras.join(", ")}</td>
      <Stat>{status}</Stat>
      {status === "processing" ? (
        <But onClick={(e) => handleClick(e)}>Pay</But>
      ) : null}
    </tr>
  );
}

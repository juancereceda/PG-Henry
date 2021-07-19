import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPayments } from "../../../actions/orders";
import { isAdmin } from "../../../actions/users";
import StyledDiv from "./OrderStyles";
import Pagination from "./paginateOrders.js";
import NotFound from "../../404/NotFound";
function AdminOrders() {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payments);
  let [admin, setAdmin] = useState(null);
  let [statusFilter, setStatusFilter] = useState(null);
  let [orderEmailAsc, setOrderEmailAsc] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [paymentsPerPage] = useState(20);
  const indexOfLastPayment = currentPage * paymentsPerPage;
  const indexOfFirstPayment = indexOfLastPayment - paymentsPerPage;
  const currentPayments =
    payments.length > 0
      ? payments
          .filter((el) => el.movie_title)
          .filter((el) => (statusFilter ? el.status === statusFilter : el))
          .sort(function (a, b) {
            if (a.email > b.email) {
              return orderEmailAsc ? 1 : orderEmailAsc === false ? -1 : 0;
            }
            if (a.email < b.email) {
              return orderEmailAsc ? -1 : orderEmailAsc === false ? 1 : 0;
            }
            return 0;
          })
          .slice(indexOfFirstPayment, indexOfLastPayment)
      : [];

  useEffect(() => {
    let verifyAdmin = async () => {
      const authorized = await isAdmin();
      setAdmin(authorized);
    };
    verifyAdmin();
    dispatch(getPayments());
  }, [dispatch]);

  function handleFilterStatus(e) {
    setStatusFilter(e.target.value === "All" ? null : e.target.value);
  }
  function handleOrderEmail(e) {
    setOrderEmailAsc(
      e.target.value === "--" ? null : e.target.value === "A-Z" ? true : false
    );
  }
  function renderPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let odd = "odd";

  return (
    <StyledDiv>
      {admin ? (
        <div className="listContainer boxContainer">
          <div className="listItem">
            <h3 className="userId orderTitle">Id</h3>
            <h3 className="movieTitle orderTitle">Movie</h3>
            <div className="userEmail">
              <h3 className="orderTitle">Client e-mail</h3>
              <select onChange={(e) => handleOrderEmail(e)}>
                <option>--</option>
                <option>A-Z</option>
                <option>Z-A</option>
              </select>
            </div>
            <div className="paymentStatus">
              <h3 className="orderTitle">Status</h3>
              <select onChange={(e) => handleFilterStatus(e)}>
                <option>All</option>
                <option>approved</option>
                <option>in_process</option>
                <option>rejected</option>
              </select>
            </div>
          </div>
          <div className="listContainer scrollbar">
            {currentPayments &&
              currentPayments.map((el) => {
                return (
                  <>
                    {currentPayments.indexOf(el) % 2 === 0 ? (
                      <div className="listItem">
                        <h4 className="userId">{el.id}</h4>
                        <h4 className="movieTitle">{el.movie_title || "--"}</h4>
                        <h4 className="userEmail">{el.email || "--"}</h4>
                        <h4 className={`paymentStatus ${el.status}`}>
                          {el.status}
                        </h4>
                      </div>
                    ) : (
                      <div className={`listItem ${odd}`}>
                        <h4 className="userId">{el.id}</h4>
                        <h4 className="movieTitle">{el.movie_title || "--"}</h4>
                        <h4 className="userEmail">{el.email || "--"}</h4>
                        <h4 className={`paymentStatus ${el.status}`}>
                          {el.status}
                        </h4>
                      </div>
                    )}
                  </>
                );
              })}
          </div>
          <div className="foot">
            <h4 className="totalNumber">
              {payments &&
                payments
                  .filter((el) => el.movie_title)
                  .filter((el) =>
                    statusFilter ? el.status === statusFilter : el
                  ).length}{" "}
              Orders |
            </h4>
            <h4>
              Page 1 of{" "}
              {Math.ceil(
                payments
                  .filter((el) => el.movie_title)
                  .filter((el) =>
                    statusFilter ? el.status === statusFilter : el
                  ).length / paymentsPerPage
              )}{" "}
              |{" "}
            </h4>
            <Pagination
              paymentsPerPage={paymentsPerPage}
              totalPayments={
                payments
                  .filter((el) => el.movie_title)
                  .filter((el) =>
                    statusFilter ? el.status === statusFilter : el
                  ).length
              }
              paginate={renderPage}
            />
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </StyledDiv>
  );
}

export default AdminOrders;

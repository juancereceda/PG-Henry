import React, { useEffect, useState } from "react";
import {
  getPurchaseLocalStorage,
  setPurchaseLocalStorage,
} from "../../reducer/reducer";
import swal from "sweetalert";
import { validateCoupon } from "../../actions/coupons";
import { getProducts } from "../../actions/products";
import { useDispatch } from "react-redux";

function Coupons() {
  const dispatch = useDispatch();
  const purchaseStore = getPurchaseLocalStorage();
  const [coupon, setCoupon] = useState("");
  const couponLocalSorage = window.localStorage.getItem("coupon");

  const handleValidate = async () => {
    if (couponLocalSorage) {
      return swal({
        title: "You have already used a coupon",
        icon: "warning",
        dangerMode: true,
      });
    }
    if (!coupon) {
      return swal({
        title: "You must insert a coupon to validate",
        icon: "warning",
        dangerMode: true,
      });
    }
    let result = await validateCoupon(coupon, purchaseStore.date?.slice(0, 10));
    if (typeof result === "number") {
      await swal("Coupon used succesfully", {
        icon: "success",
        buttons: false,
        timer: 1500,
      });
      window.localStorage.setItem(
        "coupon",
        JSON.stringify({ couponCode: coupon, discount: result })
      );
      setPurchaseLocalStorage({
        ...purchaseStore,
        price: purchaseStore.price * result,
      });
      dispatch(getProducts());
    } else {
      await swal({
        title: result,
        icon: "warning",
        dangerMode: true,
      });
    }
  };

  return (
    <div className="couponCnt">
      <input
        type="text"
        placeholder="Insert your coupon here!"
        onChange={(e) => setCoupon(e.target.value)}
      />
      <button type="button" onClick={() => handleValidate()}>
        Validate
      </button>
    </div>
  );
}

export default Coupons;

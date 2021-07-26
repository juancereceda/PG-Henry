import React, { useState } from "react";
import {
  getPurchaseLocalStorage,
  setPurchaseLocalStorage,
} from "../../reducer/reducer";
import swal from "sweetalert";
import { validateCoupon } from "../../actions/coupons";

function Coupons() {
  const purchaseStore = getPurchaseLocalStorage();
  const [coupon, setCoupon] = useState("");

  const handleValidate = async () => {
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
      setPurchaseLocalStorage({
        ...purchaseStore,
        price: purchaseStore.price * result,
      });
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

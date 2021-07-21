import React from "react";
import StyledSkeketon from "./StyledSkeleton";

function BillboardSkeletons() {
  return (
    <StyledSkeketon>
      <div id="square" class="shimmer"></div>
      <div id="content">
        <div id="title" class="shimmer"></div>
        <div id="desc">
          <div class="line shimmer"></div>
          <div class="line shimmer"></div>
          <div class="line shimmer"></div>
          <div class="line shimmer"></div>
          <div class="line shimmer"></div>
          <div class="line shimmer"></div>
          <div class="line shimmer"></div>
        </div>
      </div>
    </StyledSkeketon>
  );
}

export default BillboardSkeletons;

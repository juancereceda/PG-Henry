import React from "react";
import StyledSkeketon from "./StyledSkeleton";

function DetailSkeleton() {
  return (
    <StyledSkeketon>
      <div id="square" class="shimmer"></div>
      <div id="content">
        <div id="title" class="shimmer"></div>
      </div>
    </StyledSkeketon>
  );
}

export default DetailSkeleton;

import React from "react";
import "./NotFound.css";
import { FormattedMessage } from "react-intl";
function NotFound() {
  return (
    <div class="main-container">
    <div class="spider"><i class="fas fa-sad-cry"></i></div>
    <div class="container">
        <h1>
            <span class="num">4 </span>
            <i class="fas fa-cog"></i>
            <span class="num"> 4</span>
        </h1>
        <p>Oops , Page not found</p>
    </div>
</div>
  );
}

export default NotFound;

import * as React from "react";

export default function () {
  return (
    <header>
      <div className="mobile-nav">
        <input type="checkbox" />
        <label>
          <span className="mobile-nav__toggle"></span>
        </label>
        <div></div>
      </div>
    </header>
  );
}

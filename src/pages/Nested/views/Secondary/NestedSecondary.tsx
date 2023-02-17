import React, { useState } from "react";

import "./NestedSecondary.css";

function NestedSecondary() {
  const [firstPage, setPage] = useState(true);

  return (
    <div className="Nested Secondary content-wrap">
      {firstPage ? (
        <div className="Nested Secondary content first">
          <div>
            <div className="paragrahCount">01</div>
            <div className="textContent">
              Integer sodales augue quis nulla cursus, eu pharetra purus lacinia.
            </div>
          </div>
          <div>
            <div className="paragrahCount">02</div>
            <div className="textContent">Vestibulum at nulla in mauris viverra tempus.</div>
          </div>
          <div>
            <div className="paragrahCount">03</div>
            <div className="textContent">Vestibulum at nulla in mauris viverra tempus.</div>
          </div>
        </div>
      ) : (
        <div className="Nested Secondary content second">
          <div>
            <div className="paragrahCount">04</div>
            <div className="textContent">Nullam in ligula eu nisi commodo egestas nec ut dui.</div>
          </div>
          <div>
            <div className="paragrahCount">05</div>
            <div className="textContent">Quisque vel tincidunt lectus.</div>
          </div>
          <div>
            <div className="paragrahCount">06</div>
            <div className="textContent">Quisque vel tincidunt lectus.</div>
          </div>
        </div>
      )}
      <div className="Nested Secondary controls">
        <div
          className="Nested Secondary controls-prev"
          onClick={() => setPage(!firstPage)}
        >
          &#10094;
        </div>
        <div
          className={`Nested Secondary controls-dot ${firstPage ? "active" : ""}`}
          onClick={() => setPage(true)}
        ></div>
        <div
          className={`Nested Secondary controls-dot ${!firstPage ? "active" : ""}`}
          onClick={() => setPage(false)}
        ></div>
        <div
          className="Nested Secondary controls-next"
          onClick={() => setPage(!firstPage)}
        >
          &#10095;
        </div>
      </div>
    </div>
  );
}

export default NestedSecondary;

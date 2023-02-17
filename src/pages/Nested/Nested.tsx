import React, { useState } from "react";

import NestedMain from "./views/Main/NestedMain";
import NestedSecondary from "./views/Secondary/NestedSecondary";

import crossSign from "../../assets/svg/crossSign.svg";

import "./Nested.css";

type NestedProps = {
  className: string;
};

function Nested(props: NestedProps) {
  const [defaultScene, setScene] = useState<boolean>(true);

  return (
    <div className={`Nested ${props.className}`}>
      <div className="Nested title">
        <div className="Nested title-header">{defaultScene ? "КЛЮЧЕВОЕ СООБЩЕНИЕ" : "ПРЕИМУЩЕСТВА"}</div>
        <div className="Nested title-main">
          BREND<b>XY</b>
        </div>
        {!defaultScene && (
          <div className="Nested title-close">
            <img
              src={crossSign}
              onClick={() => setScene(!defaultScene)}
            />
          </div>
        )}
      </div>
      <div className="Nested view">
        {defaultScene ? <NestedMain switchScene={() => setScene(!defaultScene)} /> : <NestedSecondary />}
      </div>
    </div>
  );
}

export default Nested;

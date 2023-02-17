import React from "react";

import "./NestedMain.css";

type NestedMainProps = {
  switchScene: () => void;
};

function NestedMain(props: NestedMainProps) {
  return (
    <div className="NestedMain-view">
      <div>
        <div>
          In vestibulum sem et urna malesuada, nec viverra dui eleifend. Vestibulum non molestie dui. Nunc
          diam qua.
        </div>
      </div>
      <div>
        <div>Curabitur porttitor porta neque</div>
      </div>
      <button onClick={props.switchScene}>Подробнее</button>
    </div>
  );
}

export default NestedMain;

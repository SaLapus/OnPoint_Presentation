import React, { useState } from "react";
import logo from "./assets/svg/logo.svg";
import "./App.css";
import Title from "./pages/Title/Title";
import Text from "./pages/Text/Text";
import Nested from "./pages/Nested/Nested";

function App() {
  function moveBackGround() {
    const firstPage = document.querySelector(".Page");
    if (!firstPage) return;

    const offset = firstPage.getClientRects()[0].left;

    setBOffset(offset);
  }

  const [backGroundOffset, setBOffset] = useState(0);

  return (
    <div className="App">
      <div
        className="App background"
        style={{ left: `${backGroundOffset}px` }}
      ></div>
      <div className="App view">
        <div className="App-header">
          <div onClick={goHome}>
            <img
              src={logo}
              className="App-logo"
              alt="logo"
            />
          </div>

          {" | PROJECT"}
        </div>

        <div
          className="Carousel"
          onScroll={moveBackGround}
        >
          <Title className="Page" />
          <Text className="Page" />
          <Nested className="Page" />
        </div>
      </div>
    </div>
  );
}

function goHome() {
  const carousel = document.querySelector(".Carousel");
  carousel?.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

export default App;

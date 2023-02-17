import React from "react";

import rightArrow from "../../assets/svg/rightArrow.svg";
import "./Title.css";

type TitleProps = {
  className: string;
};

function Title(props: TitleProps) {
  function scrollOnClick() {
    const firstPage = document.querySelector(".Page");
    const carousel = document.querySelector(".Carousel");

    if (!(firstPage && carousel)) return;

    const fPageWidth = firstPage.getClientRects()[0].width;

    carousel.scrollTo({
      top: 0,
      left: fPageWidth,
      behavior: "smooth",
    });
  }
  return (
    <div className={`Title ${props.className}`}>
      <div className="Title-content">
        <div className="Title-header">ПРИВЕТ,</div>
        <div>
          ЭТО <b>НЕ</b>
        </div>
        <div>КОММЕРЧЕСКОЕ</div>
        <div className="Title-inline">
          <div>ЗАДАНИЕ</div>
          <button
            className="Title-inline-button"
            onClick={scrollOnClick}
          >
            <div className="Title-inline-wrap">
              <div className="Title-inline-icon">
                <img
                  src={rightArrow}
                  alt="right-arrow"
                ></img>
              </div>
            </div>

            <div>Что дальше?</div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Title;

import React from "react";
import "./MainItem.scss";

const MainItem = ({ url, title, descf, descs, buttons, top, cl }) => {
  return (
    <div className="main__item">
      <div
        style={{
          background: `url(${url}) no-repeat center/cover`,
          color: cl,
          padding: top ? "" : "370px 50px 0",
        }}
        className="main__item__block"
      >
        <h2>{title}</h2>
        <p>{descf}</p>
        <p>{descs}</p>
        <div className="main__buttons">
          {buttons.map((btn, inx) => (
            <button
              key={inx}
              className="main__btn"
              style={{
                background:
                  buttons.length == 1
                    ? "#0171E1"
                    : btn == "Learn more"
                    ? "#0171E2"
                    : "transparent",

                color:
                  buttons.length == 1
                    ? "white"
                    : btn == "Learn more"
                    ? "white"
                    : "#0171E2",

                border:
                  buttons.length == 1
                    ? "none"
                    : btn == "Learn more"
                    ? "1px solid #0171E2"
                    : `1px solid #0171E2`,
              }}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainItem;

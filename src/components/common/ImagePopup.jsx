"use client";

import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const ImagePopup = ({ src, alt = "", className = "", popupSrc }) => {
  const triggerClass = ["td_image_popup", className].filter(Boolean).join(" ");
  const fullSrc = popupSrc || src;

  return (
    <Popup
      trigger={<img src={src} alt={alt} className={triggerClass} />}
      modal
      lockScroll
      closeOnDocumentClick
      contentStyle={{
        background: "transparent",
        border: 0,
        padding: 0,
        width: "auto",
      }}
      overlayStyle={{ background: "rgba(0, 0, 0, 0.85)" }}
    >
      {(close) => (
        <div className="td_image_popup_modal">
          <button
            type="button"
            className="td_image_popup_close"
            onClick={close}
            aria-label="Close"
          >
            &times;
          </button>
          <img src={fullSrc} alt={alt} />
        </div>
      )}
    </Popup>
  );
};

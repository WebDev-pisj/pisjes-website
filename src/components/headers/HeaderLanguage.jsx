"use client";

import React, { useState } from "react";

const WorldIcon = "/icons/world.svg";

export const HeaderLanguage = () => {
  const [showLang, setShowLang] = useState(false);
  const [currentLang, setCurrentLang] = useState("English");

  const changeLanguage = (langCode, langLabel) => {
    document.cookie = `googtrans=/en/${langCode}; path=/`;
    setCurrentLang(langLabel);
    setShowLang(false);
    window.location.reload();
  };

  return (
    <>
      <button
        onClick={() => setShowLang((v) => !v)}
        className={`td_header_dropdown_btn td_medium td_heading_color ${
          showLang && "active"
        }`}
      >
        <span>{currentLang}</span>
        <img src={WorldIcon} alt="" className="td_header_dropdown_btn_icon" />
      </button>
      <ul className="td_header_dropdown_list td_mp_0 lang_button ">
        <li>
          <button type="button" onClick={() => changeLanguage("en", "English")}>
            English
          </button>
        </li>
        <li>
          <button type="button" onClick={() => changeLanguage("ar", "Arabic")}>
            Arabic
          </button>
        </li>
      </ul>
    </>
  );
};
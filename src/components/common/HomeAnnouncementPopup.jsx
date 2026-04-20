"use client";

import React, { useEffect, useState } from "react";

export const HomeAnnouncementPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const announcements = [
    {
      badge: "RFQ",
      title: "Request for Quotation (RFQ)  – Pakistan International School Jeddah",
      text: "PISJ-ES invites registered vendors to submit quotations for AMC, facility management, transportation, IT supplies, procurement, and asset disposal.Experienced companies meeting institutional standards are encouraged to apply.Details and submission guidelines are available at the link below.",
      ctaLabel: "Click Here",
      ctaLink: "https://portal.pisjes.edu.sa/procurement",
    },
    
  ];

  const totalSlides = announcements.length;

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen || totalSlides < 2) return undefined;
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [isOpen, totalSlides]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSlides);
  };

  if (!isOpen) return null;

  const currentItem = announcements[activeIndex];

  return (
    <div
      className="td_announcement_popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="announcement-title"
    >
      <div
        className="td_announcement_popup_overlay"
        onClick={() => setIsOpen(false)}
      />
      <div className="td_announcement_popup_content">
        <button
          type="button"
          className="td_announcement_popup_close"
          onClick={() => setIsOpen(false)}
          aria-label="Close announcement"
        >
          &times;
        </button>
        <div className="td_announcement_popup_glow" />
        <p className="td_announcement_popup_badge">{currentItem.badge}</p>
        <h3 id="announcement-title" className="td_announcement_popup_title">
          {currentItem.title}
        </h3>
        <p className="td_announcement_popup_text">{currentItem.text}</p>

        <div className="td_announcement_popup_actions">
          <button
            type="button"
            className="td_announcement_nav_btn"
            onClick={goToPrev}
            aria-label="Previous announcement"
          >
            &#8249;
          </button>
          <a href={currentItem.ctaLink} className="td_btn td_style_1">
            <span className="td_btn_in td_white_color td_accent_bg">
              <span>{currentItem.ctaLabel}</span>
            </span>
          </a>
          <button
            type="button"
            className="td_announcement_nav_btn"
            onClick={goToNext}
            aria-label="Next announcement"
          >
            &#8250;
          </button>
        </div>

        <div
          className="td_announcement_dots"
          role="tablist"
          aria-label="Slides"
        >
          {announcements.map((item, idx) => (
            <button
              key={item.title}
              type="button"
              className={`td_announcement_dot ${
                idx === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to announcement ${idx + 1}`}
              aria-selected={idx === activeIndex}
              role="tab"
            />
          ))}
        </div>

        <div className="td_announcement_counter">
          {activeIndex + 1} / {totalSlides}
        </div>
      </div>
    </div>
  );
};

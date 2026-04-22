"use client";

import React, { useEffect, useState } from "react";

export const HomeAnnouncementPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rollNumber, setRollNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const isResultSlideEnabled =
    process.env.NEXT_PUBLIC_ENABLE_RESULT_POPUP === "true";

  const announcements = [
    {
      type: "announcement",
      badge: "RFQ",
      title: "Request for Quotation (RFQ)  – Pakistan International School Jeddah",
      text: "PISJ-ES invites registered vendors to submit quotations for AMC, facility management, transportation, IT supplies, procurement, and asset disposal. Experienced companies meeting institutional standards are encouraged to apply. Details and submission guidelines are available at the link below.",
      ctaLabel: "Click Here",
      ctaLink: "https://portal.pisjes.edu.sa/procurement",
    },
    {
      type: "image",
      badge: "Spotlight",
      title: "Campus Highlight",
      text: "Sample announcement visual slide.",
      imageSrc: "/home_1/campus_life_1.JPG",
      imageAlt: "Campus highlight",
    },
  ];

  const totalSlides = announcements.length;
  const slides = isResultSlideEnabled
    ? [
        {
          type: "result",
          badge: "Result Day",
          title: "Check Your Result",
          text: "Enter your registration number to view result status and appointment details.",
        },
        ...announcements,
      ]
    : announcements;
  const totalVisibleSlides = slides.length;

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    const currentSlide = slides[activeIndex];
    const shouldPauseAutoSlide =
      currentSlide?.type === "result" || loading || Boolean(result);

    if (!isOpen || totalVisibleSlides < 2 || shouldPauseAutoSlide) return undefined;
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalVisibleSlides);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [isOpen, totalVisibleSlides, slides, activeIndex, loading, result]);

  useEffect(() => {
    if (!loading) {
      setLoadingDots("");
      return undefined;
    }

    const dotsTimer = setInterval(() => {
      setLoadingDots((prev) => (prev.length >= 3 ? "" : `${prev}.`));
    }, 350);

    return () => clearInterval(dotsTimer);
  }, [loading]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalVisibleSlides) % totalVisibleSlides);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalVisibleSlides);
  };

  const handleResultSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setResult(null);

    const normalized = rollNumber.trim().toUpperCase();
    if (!normalized) {
      setError("Please enter your roll number.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/result-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rollNumber: normalized }),
      });

      const payload = await response.json();
      if (!response.ok) {
        setError(payload.error || "Unable to check result.");
        return;
      }

      setResult(payload);
    } catch (requestError) {
      console.error("Result lookup failed:", requestError);
      setError("Network issue. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;
  const currentItem = slides[activeIndex];

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

        {currentItem.type === "result" ? (
          <>
            <form onSubmit={handleResultSubmit} className="td_result_form">
              <input
                type="text"
                className="td_result_input"
                placeholder="Registration Number"
                value={rollNumber}
                onChange={(event) => setRollNumber(event.target.value.toUpperCase())}
                maxLength={20}
                autoComplete="off"
              />
              <button type="submit" className="td_btn td_style_1" disabled={loading}>
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>{loading ? `Searching${loadingDots}` : "Check Result"}</span>
                </span>
              </button>
            </form>

            {loading && (
              <p className="td_result_searching_text">
                Searching for your roll number{loadingDots}
              </p>
            )}

            {error && (
              <p className="td_result_feedback td_result_feedback_error">{error}</p>
            )}

            {result && (
              <div
                className={`td_result_feedback ${
                  String(result.status || "").trim().toLowerCase() === "passed"
                    ? "td_result_feedback_success"
                    : "td_result_feedback_error"
                }`}
              >
                <p className="mb-1">
                  <strong>Roll Number:</strong> {result.rollNumber}
                </p>
                <p className="mb-1">
                  <strong>Status:</strong>{" "}
                  {result.status}
                </p>
                <p className="mb-1">{result.message}</p>
                {result.appointmentDate && (
                  <p className="mb-0">
                    <strong>Appointment Date:</strong> {result.appointmentDate}
                  </p>
                )}
                {result.appointmentTime && (
                  <p className="mb-0">
                    <strong>Appointment Time:</strong> {result.appointmentTime}
                  </p>
                )}
              </div>
            )}
          </>
        ) : currentItem.type === "image" ? (
          <div className="td_popup_image_wrap">
            <img
              src={currentItem.imageSrc}
              alt={currentItem.imageAlt}
              className="td_popup_image"
            />
          </div>
        ) : (
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
        )}

        <div
          className="td_announcement_dots"
          role="tablist"
          aria-label="Slides"
        >
          {slides.map((item, idx) => (
            <button
              key={`${item.type}-${item.title}`}
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
          {activeIndex + 1} / {totalVisibleSlides}
        </div>
      </div>
    </div>
  );
};

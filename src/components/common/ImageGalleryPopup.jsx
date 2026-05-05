"use client";

import React, { useCallback, useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export const ImageGalleryPopup = ({
  images,
  open,
  onClose,
  initialIndex = 0,
}) => {
  const [index, setIndex] = useState(initialIndex);
  const total = images?.length || 0;
  const safeIndex = total > 0 ? Math.min(Math.max(index, 0), total - 1) : 0;

  useEffect(() => {
    if (open) setIndex(Math.min(Math.max(initialIndex, 0), Math.max(total - 1, 0)));
  }, [open, initialIndex, total]);

  const next = useCallback(() => {
    if (total > 0) setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    if (total > 0) setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, next, prev]);

  if (total === 0) return null;
  const current = images[safeIndex];
  if (!current) return null;

  return (
    <Popup
      open={open}
      onClose={onClose}
      modal
      lockScroll
      closeOnDocumentClick
      contentStyle={{
        background: "transparent",
        border: 0,
        padding: 0,
        width: "100vw",
        maxWidth: "100vw",
      }}
      overlayStyle={{ background: "rgba(0, 0, 0, 0.85)" }}
    >
      <div className="td_gallery_popup">
        <button
          type="button"
          className="td_gallery_popup_close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {total > 1 && (
          <button
            type="button"
            className="td_gallery_popup_nav td_gallery_popup_nav_prev"
            onClick={prev}
            aria-label="Previous image"
          >
            &#10094;
          </button>
        )}

        <div className="td_gallery_popup_main">
          <img src={current.src} alt={current.alt || ""} />
          {current.label && (
            <div className="td_gallery_popup_caption">{current.label}</div>
          )}
        </div>

        {total > 1 && (
          <button
            type="button"
            className="td_gallery_popup_nav td_gallery_popup_nav_next"
            onClick={next}
            aria-label="Next image"
          >
            &#10095;
          </button>
        )}

        {total > 1 && (
          <div className="td_gallery_popup_thumbs">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                className={
                  "td_gallery_popup_thumb" +
                  (i === safeIndex ? " td_active" : "")
                }
                onClick={() => setIndex(i)}
                aria-label={img.label || `Image ${i + 1}`}
              >
                <img src={img.src} alt={img.alt || ""} />
              </button>
            ))}
          </div>
        )}
      </div>
    </Popup>
  );
};

"use client";

import React, { useState } from "react";

const contactBg = "/home_6/contact_bg.svg";

export const ContactPisjes = () => {
  const departments = [
    { label: "Administration", email: "principal@pisjes.edu.sa" },
    { label: "IT Coordinator", email: "it.coordinator@pisjes.edu.sa" },
    { label: "Admin Coordinator", email: "admin.coordinator@pisjes.edu.sa" },
    { label: "Event Coordinator", email: "event.coordinator@pisjes.edu.sa" },
    { label: "CIE Coordinator", email: "cie.coordinator@pisjes.edu.sa" },
    { label: "Admissions", email: "admissions@pisjes.edu.sa" },
    { label: "Student Affairs", email: "student.affairs@pisjes.edu.sa" },
    { label: "Accounts", email: "accounts@pisjes.edu.sa" },
    {
      label: "Student Career Counsellor",
      email: "career.counsellor@pisjes.edu.sa",
    },
    { label: "SMC", email: "smc@pisjes.edu.sa" },
  ];

  const initialForm = {
    fullName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result?.error || "Failed to send message.");
      }

      setFeedback({
        type: "success",
        message:
          "Message sent successfully. Our team will get back to you shortly.",
      });
      setFormData(initialForm);
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error?.message ||
          "Unable to send your message right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="td_bg_filed td_heading_bg"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row align-items-center td_gap_y_30">
          <div
            className="col-lg-7 wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_contact_box td_style_1 td_radius_10">
              <p className="mb-0 td_fs_20 td_white_color">
                {departments.map((item) => (
                  <React.Fragment key={item.email}>
                    <b>{item.label}:</b>{" "}
                    <a href={`mailto:${item.email}`} className="td_white_color">
                      {item.email}
                    </a>
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
          <div
            className="col-lg-5 wow fadeInRight"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
          >
            <div className="td_contact_box td_style_2 td_accent_bg td_radius_10">
              <h3 className="td_white_color td_fs_24 td_semibold td_mb_10">
                Send us a message
              </h3>
              <p className="td_white_color td_opacity_8 td_mb_30">
                Fill in your details and your message will be sent to IT
                Coordinator.
              </p>

              <form onSubmit={handleSubmit} className="td_contact_form">
                <div className="td_form_field_3 td_mb_20">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="td_white_color"
                    placeholder="Full Name"
                    required
                  />
                  <label className="td_fs_20 td_semibold td_accent_bg td_white_color">
                    Full Name
                  </label>
                </div>

                <div className="td_form_field_3 td_mb_20">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="td_white_color"
                    placeholder="Email"
                    required
                  />
                  <label className="td_fs_20 td_semibold td_accent_bg td_white_color">
                    Email
                  </label>
                </div>

                <div className="td_form_field_3 td_mb_20">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="td_white_color"
                    placeholder="Phone"
                    required
                  />
                  <label className="td_fs_20 td_semibold td_accent_bg td_white_color">
                    Phone
                  </label>
                </div>

                <div className="td_form_field_3 td_mb_20">
                  <input
                    type="text"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="td_white_color"
                    placeholder="Your Message"
                    required
                  />
                  <label className="td_fs_20 td_semibold td_accent_bg td_white_color">
                    Your Message
                  </label>
                </div>

                {feedback.message ? (
                  <p
                    className={`td_contact_feedback ${
                      feedback.type === "success"
                        ? "td_contact_feedback_success"
                        : "td_contact_feedback_error"
                    }`}
                  >
                    {feedback.message}
                  </p>
                ) : null}

                <button
                  type="submit"
                  className="td_btn td_style_1 td_radius_10 td_medium w-100 td_contact_submit_btn"
                  disabled={isSubmitting}
                >
                  <span className="td_btn_in td_accent_color td_white_bg">
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                    <svg
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.1575 4.34302L3.84375 15.6567"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};

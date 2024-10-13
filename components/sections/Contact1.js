"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact1() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_oph2z9c",
        "template_ys4l01b",
        form.current,
        "IUlLms7VhTVDu5cOQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setemailsub(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [emailsub, setemailsub] = useState(false);
  return (
    <>
      <section
        id="section-contact"
        className="section-contact bg-1 pt-130 pb-130"
      >
        <div className="tf-container">
          <div className="row">
            <div className="col-md-6">
              <div className="content">
                <div className="heading-title mb-40">
                  <span
                    className="sub-title texts-blue font-man wow fadeInUpSmall"
                    data-wow-delay=".2s"
                  >
                    Work Inquiry
                  </span>
                  <h2
                    className="title text-white wow fadeInUpSmall"
                    data-wow-delay=".3s"
                  >
                    Let’s Work For your Next Projects ?
                  </h2>
                  <p
                    className="des font-man text-white wow fadeInUpSmall"
                    data-wow-delay=".4s"
                  >
                    Have questions about our services? Whether you need
                    assistance with product design, IT management, data
                    security, infrastructure planning, firewall advancements,
                    desktop computing, market research, or web and mobile
                    development, our team is here to help. Reach out to us to
                    discuss your project requirements, and we'll provide
                    tailored solutions to meet your business needs. Contact us
                    today to get expert guidance and start turning your ideas
                    into reality.
                  </p>
                </div>

                <div
                  className="contact-wrap flex-three wow fadeInUpSmall"
                  data-wow-delay=".5s"
                >
                  <div className="icon">
                    <i className="icon-envelopes" />
                  </div>
                  <div className="contact-content">
                    <span className="font-man">Send Us Email</span>
                    <p>admin@mntlabs.io</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-contact-home1">
                <div className="inner-title-form center mb-30">
                  <h3 className="title-form">Need Help For Project!</h3>
                  <p>
                    We are ready to help your next projects, let’s work together
                  </p>
                </div>
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="form-contact-home"
                >
                  <div className="input-group flex-one">
                    <fieldset className="relative mb-20">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Name"
                        name="name"
                        required
                      />
                      <i className="icon-user" />
                    </fieldset>
                    <fieldset className="relative mb-20">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Email"
                        name="email"
                        required
                      />
                      <i className="icon-envelopes" />
                    </fieldset>
                  </div>
                  <fieldset className="mb-20">
                    <select
                      className="nice-select"
                      name="services"
                      id="services"
                      required
                    >
                      <option value="" disabled selected>
                        Choose Service
                      </option>

                      <option value="productDesign">Product Design</option>
                      <option value="itManagement">IT Management</option>
                      <option value="dataSecurity">Data Security</option>
                      <option value="infrastructurePlanning">
                        Infrastructure Planning
                      </option>
                      <option value="firewallAdvancement">
                        Firewall Advancement
                      </option>
                      <option value="desktopComputing">
                        Desktop Computing
                      </option>
                      <option value="marketResearch">Market Research</option>
                      <option value="webDevelopment">Web Development</option>
                      <option value="Other">Other</option>
                    </select>
                  </fieldset>
                  <fieldset className="mb-15">
                    <textarea
                      rows={4}
                      cols={50}
                      placeholder="Message"
                      name="message"
                      id="message"
                      required
                    />
                  </fieldset>
                  <fieldset className="center">
                    <button className="btn-submit" type="submit">
                      Send Message Us <i className="icon-right-icon" />
                    </button>
                  </fieldset>
                  {emailsub && (
                    <p className="text-green-500 text-sm mt-2">
                      email sent successfully!
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE,
        process.env.NEXT_PUBLIC_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
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
      <Layout breadcrumbTitle="Contact">
        <div>
          <section className="contact-us-page pt-130 pb-130">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="contact-us-page-content">
                    <div className="heading-title">
                      <span className="sub-title texts-blue font-man">
                        Get In Touch
                      </span>
                      <h2 className="title">
                        Don’t Hesitate To <br />
                        Contact Us
                      </h2>
                      <p className="des">
                        {" "}
                        Have questions about our services? Whether you need
                        assistance with product design, IT management, data
                        security, infrastructure planning, firewall
                        advancements, desktop computing, market research, or web
                        and mobile development, our team is here to help. Reach
                        out to us to discuss your project requirements, and
                        we'll provide tailored solutions to meet your business
                        needs. Contact us today to get expert guidance and start
                        turning your ideas into reality.
                      </p>
                    </div>
                    <div className="contact-item-wrap">
                      <div className="contact-item">
                        <div className="flex item-contact">
                          <div className="icon">
                            <i className="icon-envelopes" />
                          </div>
                          <div className="content">
                            <h3>admin@mntlabs.io</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-us-page-form bg-2">
                    <h3 className="title">Send Us Message</h3>
                    <form
                      className="form-contact-home"
                      id="contactform"
                      ref={form}
                      onSubmit={sendEmail}
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
                            Choose Services
                          </option>
                          <option value="" disabled selected>
                            Choose Services
                          </option>
                          <option value="Product_Design">Product Design</option>
                          <option value="It_Management">IT Management</option>
                          <option value="Data_Security">Data Security</option>
                          <option value="Infrastructure_Planning">
                            Infrastructure Planning
                          </option>
                          <option value="Firewall_Advancement">
                            Firewall Advancement
                          </option>
                          <option value="Desktop_Computing">
                            Desktop Computing
                          </option>
                          <option value="Market_Research">
                            Market Research
                          </option>
                          <option value="Web_Development">
                            Web Development
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </fieldset>
                      <fieldset className=" mb-15">
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
                        <p className="text-green-500 text-md mb-5">
                          Email sent successfully!
                        </p>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

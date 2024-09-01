import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function ContactUs() {
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
                        Don’t Heisted To <br />
                        Contact Us
                      </h2>
                      <p className="des">
                        {" "}
                        Our expert team excels in website development, graphic
                        design, digital marketing, and content creation to
                        elevate and grow your business.
                      </p>
                    </div>
                    <div className="contact-item-wrap">
                      <div className="contact-item">
                        <div className="flex item-contact">
                          <div className="icon">
                            <i className="icon-envelopes" />
                          </div>
                          <div className="content">
                            <p>wiatechinfo@gmail.com</p>
                            <p>www.wiatech.com</p>
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
                      className="contact-us-form"
                      id="contactform"
                      method="post"
                      action="./contact/contact-process.php"
                    >
                      <fieldset className="mb-18">
                        <label>Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your email"
                          name="name"
                          id="name"
                          required
                        />
                      </fieldset>
                      <fieldset className="mb-18">
                        <label>Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your name"
                          name="email"
                          id="email"
                          required
                        />
                      </fieldset>
                      <fieldset className="mb-18">
                        <label>Website</label>
                        <input
                          type="url"
                          className="form-control"
                          id="url"
                          name="url"
                          placeholder="Enter your website"
                          required
                        />
                      </fieldset>
                      <fieldset className=" mb-18">
                        <label>Message</label>
                        <textarea
                          rows={5}
                          cols={50}
                          placeholder="Write message"
                          name="message"
                          id="message"
                        />
                      </fieldset>
                      <fieldset>
                        <button className="btn-submit" type="submit">
                          Send Message <i className="icon-right-icon" />
                        </button>
                      </fieldset>
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

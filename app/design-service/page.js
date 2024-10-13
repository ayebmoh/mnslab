"use client";
import Layout from "@/components/layout/Layout";
import Service4 from "@/components/sections/Service4";
import Link from "next/link";
import { useState } from "react";

export default function ServiceDetails() {
  const [isTab, setIsTab] = useState(1);
  const [isVisible, setIsVisible] = useState(true);

  const handleTab = (i) => {
    setIsTab(i);
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  };

  return (
    <>
      <Layout breadcrumbTitle="Web Design Services">
        <div>
          <section className="section-benefit pt-122">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="benefit-content">
                    <div className="heading-title mb-40">
                      <span className="sub-title texts-blue font-man">
                        Best Features of Our Web Design
                      </span>
                      <h2 className="title">
                        Benefits of Choosing Our Web Design Services
                      </h2>
                      <p className="des">
                        Our web design services focus on creating visually
                        appealing and functional websites that offer a seamless
                        user experience. By choosing us, you get cutting-edge
                        design, responsive layouts, and optimized performance.
                        We work closely with you to ensure that your website not
                        only looks amazing but also meets the unique needs of
                        your business, whether it's building brand identity or
                        driving conversions.
                      </p>
                    </div>
                    <img
                      src="/assets/images/service/web-mobile-design.svg"
                      alt="Web Design Image"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-list">
                    <ul className="benefit-list-item">
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Custom Design</h4>
                        </div>
                        <p>
                          Tailor-made designs that reflect your brand identity
                          and business goals.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Responsive Layouts</h4>
                        </div>
                        <p>
                          Ensure your website looks perfect on all devices, from
                          desktops to mobile phones.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>User-Centric Approach</h4>
                        </div>
                        <p>
                          Focused on enhancing the user experience to boost
                          engagement and conversion rates.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>SEO-Friendly Design</h4>
                        </div>
                        <p>
                          Our designs are optimized for search engines to
                          improve your website's visibility.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section-it-manager pt-130 pb-130">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-7">
                  <div className="it-manager-content">
                    <div className="heading-title mb-20">
                      <span className="sub-title texts-blue font-man">
                        How We Work
                      </span>
                      <h2 className="title">
                        Our Web Design Process Helps You Focus on What Matters
                      </h2>
                    </div>
                    <ul
                      className="nav nav-tabs-pricing nav-tabs-pricing-service"
                      id="myTab"
                      role="tablist"
                    >
                      <li className="nav-item" onClick={() => handleTab(1)}>
                        <button
                          className={
                            isTab == 1 ? "nav-link active" : "nav-link"
                          }
                          id="approach-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#approach-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="approach-tab-pane"
                          aria-selected="true"
                        >
                          Our Approach
                        </button>
                      </li>
                      <li className="nav-item" onClick={() => handleTab(2)}>
                        <button
                          className={
                            isTab == 2 ? "nav-link active" : "nav-link"
                          }
                          id="goals-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#goals-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="goals-tab-pane"
                          aria-selected="false"
                        >
                          Project Goals
                        </button>
                      </li>
                      <li className="nav-item" onClick={() => handleTab(3)}>
                        <button
                          className={
                            isTab == 3 ? "nav-link active" : "nav-link"
                          }
                          id="advisory-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#advisory-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="advisory-tab-pane"
                          aria-selected="false"
                        >
                          Advisory
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className={
                          isTab == 1
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="approach-tab-pane"
                        role="tabpanel"
                        aria-labelledby="approach-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab-service-details">
                          <p className="des">
                            Our approach focuses on user research, wireframing,
                            and prototyping to deliver designs that engage users
                            effectively. We follow an agile design process to
                            ensure efficient and collaborative delivery.
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                User Research & Wireframes
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Prototype Testing</p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Visual Design & Branding
                              </p>
                            </li>
                          </ul>
                          <Link href="/contact-us" className="button-src">
                            Learn More <i className="icon-angle-right" />
                          </Link>
                        </div>
                      </div>
                      <div
                        className={
                          isTab == 2
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="goals-tab-pane"
                        role="tabpanel"
                        aria-labelledby="goals-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab-service-details">
                          <p className="des">
                            Our web design projects aim to enhance your online
                            presence, increase user engagement, and achieve
                            higher conversions. We align the design with your
                            business goals.
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Increased Engagement</p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Optimized Conversion Rates
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Enhanced Brand Identity
                              </p>
                            </li>
                          </ul>
                          <Link href="/contact-us" className="button-src">
                            Learn More <i className="icon-angle-right" />
                          </Link>
                        </div>
                      </div>
                      <div
                        className={
                          isTab == 3
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="advisory-tab-pane"
                        role="tabpanel"
                        aria-labelledby="advisory-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab-service-details">
                          <p className="des">
                            We provide ongoing advisory services to ensure your
                            website stays updated with the latest trends and
                            technologies. Our team is here to support you at
                            every step.
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Expert Design Advice</p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Continuous Improvement</p>
                            </li>
                          </ul>
                          <Link href="/contact-us" className="button-src">
                            Learn More <i className="icon-angle-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="it-manager-img">
                    <img
                      style={{ height: "600px", width: "650px" }}
                      className={isVisible ? "fade-in visible" : "fade-in"}
                      src={`/assets/images/service/web-mobile-design2.png`}
                      alt="Web Design Process"
                    />
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

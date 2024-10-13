"use client";
import Layout from "@/components/layout/Layout";
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
      <Layout breadcrumbTitle="Digital Marketing Strategy">
        <div>
          <section className="section-benefit pt-122">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="benefit-content">
                    <div className="heading-title mb-40">
                      <span className="sub-title texts-blue font-man">
                        Best Features of Our Strategy
                      </span>
                      <h2 className="title">
                        Benefits of Choosing Our Digital Marketing Strategy
                      </h2>
                      <p className="des">
                        Our digital marketing strategy is built around helping
                        you reach the right audience at the right time. We use
                        data-driven methods and the latest trends to enhance
                        your online presence, boost brand awareness, and drive
                        measurable results. Whether you're looking for SEO,
                        social media management, or paid advertising campaigns,
                        we've got you covered.
                      </p>
                    </div>
                    <img
                      style={{ height: "330px" }}
                      src="/assets/images/service/digital-marketing.jpg"
                      alt="Digital Marketing Strategy Image"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-list">
                    <ul className="benefit-list-item">
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Data-Driven Insights</h4>
                        </div>
                        <p>
                          We use in-depth analytics to craft strategies tailored
                          to your business needs and target audience.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Multi-Channel Approach</h4>
                        </div>
                        <p>
                          Combining SEO, social media, email marketing, and paid
                          ads for maximum impact.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>SEO Optimization</h4>
                        </div>
                        <p>
                          Optimizing your website and content to rank higher on
                          search engines and drive organic traffic.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Audience Engagement</h4>
                        </div>
                        <p>
                          Enhancing audience engagement through targeted
                          campaigns and high-quality content.
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
                        Our Process for Building a Winning Digital Marketing
                        Strategy
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
                            Our approach revolves around in-depth market
                            research, competitor analysis, and understanding
                            your unique business needs. We ensure that every
                            aspect of your strategy is backed by data and
                            optimized for maximum results.
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Market Research & Audience Segmentation
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Content Strategy & Creation
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Performance Optimization
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
                            Our goal is to help you increase brand awareness,
                            generate qualified leads, and drive conversions
                            through well-executed digital marketing strategies
                            tailored to your business.
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Higher Brand Visibility
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Lead Generation & Nurturing
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Conversion Rate Optimization
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
                            Our advisory services are designed to keep your
                            digital marketing strategy aligned with industry
                            changes. We provide ongoing optimization and
                            strategic advice to help you stay ahead of your
                            competitors.
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Strategic Guidance</p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Industry Best Practices
                              </p>
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
                      className={isVisible ? "fade-in visible" : "fade-in"}
                      src={`/assets/images/service/marketing-service2.png`}
                      alt="Digital Marketing Process"
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

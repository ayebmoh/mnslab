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
      <Layout breadcrumbTitle="Content Writing & Email Marketing">
        <div>
          <section className="section-benefit pt-122">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="benefit-content">
                    <div className="heading-title mb-40">
                      <span className="sub-title texts-blue font-man">
                        What Makes Us Stand Out
                      </span>
                      <h2 className="title">
                        Benefits of Our Content Writing & Email Marketing
                        Services
                      </h2>
                      <p className="des">
                        Our content writing and email marketing services are
                        designed to enhance your brand's visibility, engage your
                        audience, and drive conversions. From compelling blog
                        posts to personalized email campaigns, we help you
                        communicate effectively and consistently with your
                        target audience.
                      </p>
                    </div>
                    <img
                      src="/assets/images/service/writing-service.webp"
                      alt="Content Writing and Email Marketing"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-list">
                    <ul className="benefit-list-item">
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Engaging Content</h4>
                        </div>
                        <p>
                          Our content writing services focus on creating
                          compelling, SEO-optimized content that resonates with
                          your audience.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Targeted Email Campaigns</h4>
                        </div>
                        <p>
                          We create personalized email marketing strategies that
                          effectively engage and convert your subscribers.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>SEO Optimization</h4>
                        </div>
                        <p>
                          All content is optimized to improve search engine
                          rankings, helping you reach a broader audience.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Analytics-Driven Insights</h4>
                        </div>
                        <p>
                          We track and analyze the performance of content and
                          email campaigns to refine and improve future
                          strategies.
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
                        How We Create
                      </span>
                      <h2 className="title">
                        Our Process for Content Writing & Email Marketing
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
                          id="planning-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#planning-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="planning-tab-pane"
                          aria-selected="true"
                        >
                          Planning
                        </button>
                      </li>
                      <li className="nav-item" onClick={() => handleTab(2)}>
                        <button
                          className={
                            isTab == 2 ? "nav-link active" : "nav-link"
                          }
                          id="creation-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#creation-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="creation-tab-pane"
                          aria-selected="false"
                        >
                          Content Creation
                        </button>
                      </li>
                      <li className="nav-item" onClick={() => handleTab(3)}>
                        <button
                          className={
                            isTab == 3 ? "nav-link active" : "nav-link"
                          }
                          id="launch-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#launch-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="launch-tab-pane"
                          aria-selected="false"
                        >
                          Launch
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
                        id="planning-tab-pane"
                        role="tabpanel"
                        aria-labelledby="planning-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab-service-details">
                          <p className="des">
                            Our team begins by understanding your brand's goals
                            and audience. We create a strategic plan for both
                            content and email marketing that aligns with your
                            objectives, ensuring every message is meaningful and
                            impactful.
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Audience Research & Segmentation
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Content & Campaign Strategy
                              </p>
                            </li>
                          </ul>
                          <Link href="/#" className="button-src">
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
                        id="creation-tab-pane"
                        role="tabpanel"
                        aria-labelledby="creation-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab-service-details">
                          <p className="des">
                            With the strategy in place, our content writers and
                            email marketers get to work. We create tailored blog
                            posts, newsletters, promotional emails, and other
                            content that speaks directly to your audience,
                            focusing on engagement and value.
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Content Drafting & Editing
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Email Copywriting & Design
                              </p>
                            </li>
                          </ul>
                          <Link href="/#" className="button-src">
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
                        id="launch-tab-pane"
                        role="tabpanel"
                        aria-labelledby="launch-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab-service-details">
                          <p className="des">
                            Once content is created, we launch email campaigns
                            and publish content based on the strategy. We
                            monitor the performance and continuously optimize
                            campaigns to maximize engagement and conversions.
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Campaign Scheduling & Delivery
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Performance Tracking & Optimization
                              </p>
                            </li>
                          </ul>
                          <Link href="/#" className="button-src">
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
                      src={`/assets/images/service/writing-service2.webp`}
                      alt="Content Writing & Email Marketing Process"
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

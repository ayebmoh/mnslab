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
      <Layout breadcrumbTitle="Web & Mobile Development">
        <div>
          <section className="section-benefit pt-122">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-6">
                  <div className="benefit-content">
                    <div className="heading-title mb-40">
                      <span className="sub-title texts-blue font-man">
                        Best Features Development
                      </span>
                      <h2 className="title">
                        Benefits of Managed IT Services Provided
                      </h2>
                      <p className="des">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantiue doloremue laudantium totam rem
                        aperiam eaque ipsa quae abillo inventore veritatis
                      </p>
                    </div>
                    <img
                      src="/assets/images/page/dvl-deatils.jpg"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-list">
                    <ul className="benefit-list-item">
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>IT Manage Service</h4>
                        </div>
                        <p>
                          Sed ut perspiciatis unde omnis natus voluptatem
                          accusantium doloremque laudantium, totam rem aperiam
                          inventore
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Keeping Team Productive</h4>
                        </div>
                        <p>
                          To take a trivial example, which of us ever undertakes
                          laborious physical exercise, except to obtain some
                          advantage
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Predictable Costs 24/7</h4>
                        </div>
                        <p>
                          Quis autem vel eum iure reprehenderit qui in ea
                          voluptate velit esse quam nihil molestiae consequatur,
                          vellum dolorem
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Team is Ready to Help</h4>
                        </div>
                        <p>
                          Must explain to you how all this mistaken idea of
                          denouncing pleasure and praising pain was born and I
                          will give
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
                        How to Manage
                      </span>
                      <h2 className="title">
                        Our Managed IT Services let you Concentrate on What
                        Matters
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
                            At veroeos accusamus dignissimos ducimus blanditiis
                            volupta delenite atque corrupti quos dolores et quas
                            molestias excepturi sint occaecatie
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Efficient Sprint Planning
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Iterative Delivery Approach
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Standups and Demos</p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Problem-solving</p>
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
                        id="goals-tab-pane"
                        role="tabpanel"
                        aria-labelledby="goals-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab-service-details">
                          <p className="des">
                            At veroeos accusamus dignissimos ducimus blanditiis
                            volupta delenite atque corrupti quos dolores et quas
                            molestias excepturi sint occaecatie
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Efficient Sprint Planning
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Iterative Delivery Approach
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Standups and Demos</p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Problem-solving</p>
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
                        id="advisory-tab-pane"
                        role="tabpanel"
                        aria-labelledby="advisory-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab-service-details">
                          <p className="des">
                            At veroeos accusamus dignissimos ducimus blanditiis
                            volupta delenite atque corrupti quos dolores et quas
                            molestias excepturi sint occaecatie
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Efficient Sprint Planning
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Iterative Delivery Approach
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Standups and Demos</p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Problem-solving</p>
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
                  <div className="it-manager-image">
                    <img
                      src="/assets/images/page/dvl-deatils2.jpg"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Service4 />
        </div>
      </Layout>
    </>
  );
}

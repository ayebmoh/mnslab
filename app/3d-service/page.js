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
      <Layout breadcrumbTitle="3D Design, Motions & Animations">
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
                        Benefits of Our 3D Design, Motion & Animation Services
                      </h2>
                      <p className="des">
                        Our 3D design and animation services are designed to
                        bring your creative ideas to life. Whether it's
                        architectural visualization, product animation, or
                        motion graphics, we offer a blend of creativity,
                        technical expertise, and the latest technology. Elevate
                        your brand with immersive visuals that captivate your
                        audience.
                      </p>
                    </div>
                    <img
                      src="/assets/images/service/3d-service.png"
                      alt="3D Design and Motion Graphics Image"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="benefit-list">
                    <ul className="benefit-list-item">
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Creative Visuals</h4>
                        </div>
                        <p>
                          We craft visually stunning designs and animations that
                          effectively communicate your message.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Cutting-Edge Technology</h4>
                        </div>
                        <p>
                          Using the latest tools and software to deliver
                          high-quality 3D renders, animations, and motion
                          graphics.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Tailored Solutions</h4>
                        </div>
                        <p>
                          Every project is customized to meet the unique needs
                          of your brand and audience.
                        </p>
                      </li>
                      <li>
                        <div className="flex-three">
                          <i className="icon-Check" />
                          <h4>Engaging Storytelling</h4>
                        </div>
                        <p>
                          We create narratives that engage and inspire through
                          well-thought-out animations and designs.
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
                        Our Process for 3D Design, Motions & Animations
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
                          id="concept-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#concept-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="concept-tab-pane"
                          aria-selected="true"
                        >
                          Concept Creation
                        </button>
                      </li>
                      <li className="nav-item" onClick={() => handleTab(2)}>
                        <button
                          className={
                            isTab == 2 ? "nav-link active" : "nav-link"
                          }
                          id="design-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#design-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="design-tab-pane"
                          aria-selected="false"
                        >
                          Animation
                        </button>
                      </li>
                      <li className="nav-item" onClick={() => handleTab(3)}>
                        <button
                          className={
                            isTab == 3 ? "nav-link active" : "nav-link"
                          }
                          id="delivery-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#delivery-tab-pane"
                          type="button"
                          role="tab"
                          aria-controls="delivery-tab-pane"
                          aria-selected="false"
                        >
                          Delivery
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
                        id="concept-tab-pane"
                        role="tabpanel"
                        aria-labelledby="concept-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab-service-details">
                          <p className="des">
                            We start by understanding your vision and
                            conceptualizing how we can turn that idea into a
                            visually stunning 3D design or animation. This
                            involves storyboarding, sketching, and creating
                            initial drafts to ensure your project is heading in
                            the right direction.
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Storyboarding & Planning
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Creative Brainstorming</p>
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
                        id="design-tab-pane"
                        role="tabpanel"
                        aria-labelledby="design-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab-service-details">
                          <p className="des">
                            Once the concept is approved, we begin the design
                            and animation process. Our team works with
                            cutting-edge software to create 3D models, textures,
                            lighting, and motion graphics that meet your exact
                            specifications.
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                3D Modeling & Texturing
                              </p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">
                                Motion Graphics & Animation
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
                        id="delivery-tab-pane"
                        role="tabpanel"
                        aria-labelledby="delivery-tab"
                        tabIndex={0}
                      >
                        <div className="content-tab-service-details">
                          <p className="des">
                            After the design and animation process, we deliver
                            the final product, ensuring it aligns with your
                            expectations. Our team remains available for any
                            revisions, and we provide the final files in high
                            resolution, ready for use in your marketing,
                            branding, or entertainment projects.
                          </p>
                          <ul className="icon-listing">
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">High-Quality Rendering</p>
                            </li>
                            <li className="flex-three">
                              <i className="icon-Check" />
                              <p className="font-man">Final Product Delivery</p>
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
                      src={`/assets/images/service/3d-service2.png`}
                      alt="3D Design & Animation Process"
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

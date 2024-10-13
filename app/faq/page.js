"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Faq() {
  const [isTab, setIsTab] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const handleTab = (i) => {
    setIsTab(i);
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 2000);
  };

  const [isAccordion, setIsAccordion] = useState(1);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };

  return (
    <>
      <Layout breadcrumbTitle="FAQ">
        <div>
          <section className="faq-section pt-130 pb-130">
            <div className="tf-container">
              <div className="row">
                <div className="col-md-5">
                  <div className="heading-title">
                    <span className="sub-title texts-blue font-man">FAQ</span>
                    <h2 className="title">Frequently Asked Questions</h2>
                    <p className="des mb-40">
                      Welcome to our Frequently Asked Questions section! Here,
                      we’ve compiled answers to some of the most common
                      questions we receive. Whether you're looking for
                      information about our services, policies, or how to get
                      started, this is the place to find quick and helpful
                      responses. If you don't find the answer you're looking
                      for, feel free to reach out to us directly!
                    </p>
                    <Link href="/#" className="button-src">
                      Read More <i className="icon-angle-right" />
                    </Link>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="tab-faq-content">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className={
                          isTab == 1
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="general"
                        role="tabpanel"
                        aria-labelledby="general-tab"
                        tabIndex={0}
                      >
                        <div
                          className="accordion accordion-h4"
                          id="accordionExample"
                        >
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(16)}
                            >
                              <span
                                className={
                                  isAccordion == 16
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                How much does it cost to build an app?
                              </span>
                            </h3>
                            <div
                              id="collapseOne"
                              className={
                                isAccordion == 16
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  The cost of building an app can vary greatly
                                  depending on the app's complexity, features,
                                  platforms, and design. Here's a rough
                                  breakdown:
                                </p>

                                <h6>Basic App :</h6>
                                <p>Basic functionality, few screens.</p>

                                <h6>Medium Complexity App:</h6>
                                <p>
                                  Custom UI, third-party integrations, backend
                                  development.
                                </p>

                                <h6>Complex App:</h6>
                                <p>
                                  Advanced features, multi-platform support,
                                  custom animations, large databases.
                                </p>

                                <p>
                                  Factors like app design, the number of
                                  platforms (iOS, Android, Web), and post-launch
                                  maintenance also affect the overall cost. We
                                  offer custom quotes after discussing your
                                  specific requirements.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(17)}
                            >
                              <span
                                className={
                                  isAccordion == 17
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                How do you create an app without any coding?
                              </span>
                            </h3>
                            <div
                              id="collapseTwo"
                              className={
                                isAccordion == 17
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                You can create an app without coding by using
                                no-code platforms like Bubble, Adalo, or Glide.
                                These tools provide drag-and-drop interfaces and
                                templates, allowing you to design and build apps
                                easily. Just choose a platform, define your
                                app’s features, drag-and-drop elements to
                                customize it, and publish it to app stores. It's
                                a simple way to create apps without writing
                                code, though advanced features may require more
                                technical expertise and we are happy to help
                                with that.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(18)}
                            >
                              <span
                                className={
                                  isAccordion == 18
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Can you create an app for free?
                              </span>
                            </h3>
                            <div
                              id="collapseThree"
                              className={
                                isAccordion == 18
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                Creating an app for free is not feasible for
                                most professional-grade apps. While there are
                                platforms like no-code app builders (e.g.,
                                AppGyver, Bubble), these have limited
                                functionality and scalability. Custom
                                development requires expertise, which incurs
                                costs for developers, designers, and project
                                managers. However, we do provide consultations
                                to help you understand the potential costs and
                                timelines based on your vision.
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(19)}
                            >
                              <span
                                className={
                                  isAccordion == 19
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefore"
                                aria-expanded="false"
                                aria-controls="collapsefore"
                              >
                                How can I create my own app?
                              </span>
                            </h3>
                            <div
                              id="collapsefore"
                              className={
                                isAccordion == 19
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <p>
                                  You can create your own app by following these
                                  steps:
                                </p>

                                <h6>1. Idea Development</h6>
                                <p>
                                  Define the app’s purpose, target audience, and
                                  features.
                                </p>

                                <h6>2. Design & Planning</h6>
                                <p>
                                  Sketch wireframes or mockups and plan out the
                                  user experience (UX).
                                </p>

                                <h6>3. Choose a Development Approach</h6>
                                <ul>
                                  <li>
                                    No-code platforms (for simple apps) like
                                    Adalo or Glide.
                                  </li>
                                  <li>
                                    Hiring a development team if you need a
                                    custom, scalable app.
                                  </li>
                                </ul>

                                <h6>4. Development</h6>
                                <p>
                                  Code the app or use a drag-and-drop platform.
                                </p>

                                <h6>5. Testing</h6>
                                <p>
                                  Thoroughly test the app for bugs and
                                  usability.
                                </p>

                                <h6>6. Launch</h6>
                                <p>
                                  Publish on platforms like Google Play and the
                                  App Store.
                                </p>

                                <p>
                                  If you're not experienced in development,
                                  working with a professional app development
                                  company is the best route to ensure quality
                                  and performance.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(20)}
                            >
                              <span
                                className={
                                  isAccordion == 20
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefire"
                                aria-expanded="false"
                                aria-controls="collapsefire"
                              >
                                How do I start an app business?
                              </span>
                            </h3>
                            <div
                              id="collapsefire"
                              className={
                                isAccordion == 20
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <h6>1. Research the Market</h6>
                                <p>
                                  Identify a problem that your app can solve or
                                  a niche that is underserved.
                                </p>

                                <h6>2. Develop a Business Plan</h6>
                                <p>
                                  Outline your business model, target market,
                                  and monetization strategy (e.g., in-app
                                  purchases, subscriptions).
                                </p>

                                <h6>3. Build the App</h6>
                                <p>
                                  Partner with a development company or hire
                                  developers to bring your vision to life.
                                </p>

                                <h6>4. Launch the App</h6>
                                <p>
                                  Create marketing strategies to promote the app
                                  on various platforms.
                                </p>

                                <h6>5. Continuous Improvement</h6>
                                <p>
                                  Gather user feedback and update the app with
                                  new features to retain users.
                                </p>

                                <p>
                                  We help app businesses by providing end-to-end
                                  services from idea validation to development
                                  and post-launch support.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          isTab == 2
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="service"
                        role="tabpanel"
                        aria-labelledby="service-tab"
                        tabIndex={0}
                      >
                        <div
                          className="accordion accordion-h4"
                          id="accordionExample"
                        >
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(21)}
                            >
                              <span
                                className={
                                  isAccordion == 21
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                How much does it cost to build an app?
                              </span>
                            </h3>
                            <div
                              id="collapseOne"
                              className={
                                isAccordion == 21
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(22)}
                            >
                              <span
                                className={
                                  isAccordion == 22
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                How do you create an app without any coding?
                              </span>
                            </h3>
                            <div
                              id="collapseTwo"
                              className={
                                isAccordion == 22
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(23)}
                            >
                              <span
                                className={
                                  isAccordion == 23
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Can you create an app for free?
                              </span>
                            </h3>
                            <div
                              id="collapseThree"
                              className={
                                isAccordion == 23
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(24)}
                            >
                              <span
                                className={
                                  isAccordion == 24
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefore"
                                aria-expanded="false"
                                aria-controls="collapsefore"
                              >
                                How can I create my own app?
                              </span>
                            </h3>
                            <div
                              id="collapsefore"
                              className={
                                isAccordion == 24
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(25)}
                            >
                              <span
                                className={
                                  isAccordion == 25
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefire"
                                aria-expanded="false"
                                aria-controls="collapsefire"
                              >
                                How do I start an app business?
                              </span>
                            </h3>
                            <div
                              id="collapsefire"
                              className={
                                isAccordion == 25
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          isTab == 3
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="product"
                        role="tabpanel"
                        aria-labelledby="product-tab"
                        tabIndex={0}
                      >
                        <div
                          className="accordion accordion-h4"
                          id="accordionExample"
                        >
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(26)}
                            >
                              <span
                                className={
                                  isAccordion == 26
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                How much does it cost to build an app?
                              </span>
                            </h3>
                            <div
                              id="collapseOne"
                              className={
                                isAccordion == 26
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(27)}
                            >
                              <span
                                className={
                                  isAccordion == 27
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                How do you create an app without any coding?
                              </span>
                            </h3>
                            <div
                              id="collapseTwo"
                              className={
                                isAccordion == 27
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(28)}
                            >
                              <span
                                className={
                                  isAccordion == 28
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Can you create an app for free?
                              </span>
                            </h3>
                            <div
                              id="collapseThree"
                              className={
                                isAccordion == 28
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(29)}
                            >
                              <span
                                className={
                                  isAccordion == 29
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefore"
                                aria-expanded="false"
                                aria-controls="collapsefore"
                              >
                                How can I create my own app?
                              </span>
                            </h3>
                            <div
                              id="collapsefore"
                              className={
                                isAccordion == 29
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(30)}
                            >
                              <span
                                className={
                                  isAccordion == 30
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefire"
                                aria-expanded="false"
                                aria-controls="collapsefire"
                              >
                                How do I start an app business?
                              </span>
                            </h3>
                            <div
                              id="collapsefire"
                              className={
                                isAccordion == 30
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          isTab == 4
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="team"
                        role="tabpanel"
                        aria-labelledby="team-tab"
                        tabIndex={0}
                      >
                        <div
                          className="accordion accordion-h4"
                          id="accordionExample"
                        >
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(1)}
                            >
                              <span
                                className={
                                  isAccordion == 1
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                How much does it cost to build an app?
                              </span>
                            </h3>
                            <div
                              id="collapseOne"
                              className={
                                isAccordion == 1
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(2)}
                            >
                              <span
                                className={
                                  isAccordion == 2
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                How do you create an app without any coding?
                              </span>
                            </h3>
                            <div
                              id="collapseTwo"
                              className={
                                isAccordion == 2
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(3)}
                            >
                              <span
                                className={
                                  isAccordion == 3
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Can you create an app for free?
                              </span>
                            </h3>
                            <div
                              id="collapseThree"
                              className={
                                isAccordion == 3
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(4)}
                            >
                              <span
                                className={
                                  isAccordion == 4
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefore"
                                aria-expanded="false"
                                aria-controls="collapsefore"
                              >
                                How can I create my own app?
                              </span>
                            </h3>
                            <div
                              id="collapsefore"
                              className={
                                isAccordion == 4
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(5)}
                            >
                              <span
                                className={
                                  isAccordion == 5
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefire"
                                aria-expanded="false"
                                aria-controls="collapsefire"
                              >
                                How do I start an app business?
                              </span>
                            </h3>
                            <div
                              id="collapsefire"
                              className={
                                isAccordion == 5
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          isTab == 5
                            ? "tab-pane fade show active"
                            : "tab-pane fade"
                        }
                        id="pricing"
                        role="tabpanel"
                        aria-labelledby="pricing-tab"
                        tabIndex={0}
                      >
                        <div
                          className="accordion accordion-h4"
                          id="accordionExample"
                        >
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(6)}
                            >
                              <span
                                className={
                                  isAccordion == 6
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                How much does it cost to build an app?
                              </span>
                            </h3>
                            <div
                              id="collapseOne"
                              className={
                                isAccordion == 6
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(7)}
                            >
                              <span
                                className={
                                  isAccordion == 7
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                How do you create an app without any coding?
                              </span>
                            </h3>
                            <div
                              id="collapseTwo"
                              className={
                                isAccordion == 7
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(8)}
                            >
                              <span
                                className={
                                  isAccordion == 8
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Can you create an app for free?
                              </span>
                            </h3>
                            <div
                              id="collapseThree"
                              className={
                                isAccordion == 8
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(9)}
                            >
                              <span
                                className={
                                  isAccordion == 9
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefore"
                                aria-expanded="false"
                                aria-controls="collapsefore"
                              >
                                How can I create my own app?
                              </span>
                            </h3>
                            <div
                              id="collapsefore"
                              className={
                                isAccordion == 9
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                          <div className="accordion-item">
                            <h3
                              className="accordion-header"
                              onClick={() => handleAccordion(10)}
                            >
                              <span
                                className={
                                  isAccordion == 10
                                    ? "accordion-button"
                                    : "accordion-button collapsed"
                                }
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapsefire"
                                aria-expanded="false"
                                aria-controls="collapsefire"
                              >
                                How do I start an app business?
                              </span>
                            </h3>
                            <div
                              id="collapsefire"
                              className={
                                isAccordion == 10
                                  ? "accordion-collapse collapse show"
                                  : "accordion-collapse collapse"
                              }
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                We approached Minutes Network Labs with complex
                                project Designing a website can involve various
                                such as layout, graphics, content, and
                                experience more specific response elaborate
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

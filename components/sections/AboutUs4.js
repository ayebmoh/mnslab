import Link from "next/link";
import CounterNumber from "../elements/CounterNumber";

export default function AboutUs4() {
  return (
    <>
      <section className="about-us-home5 pt-122 pb-130 bg-9 relative">
        <img
          src="/assets/images/page/mask-ab5.png"
          alt="image"
          className="mask-about-h5"
        />
        <div className="tf-container">
          <div className="row z-index-3 relative">
            <div className="col-md-6">
              <div className="about-us-h5-content">
                <div className="heading-title">
                  <span className="sub-title text-white font-man">
                    About Company
                  </span>
                  <h2 className="title text-white">
                    We Are Professional IT Services Agency Based in
                    <span className="text-blue2 mask"> Spain</span>
                  </h2>
                </div>
                <div className="counter-about-wrap relative tf-counters">
                  <div
                    className="number plus numbers"
                    data-speed={2000}
                    data-to={5}
                    data-inviewport="yes"
                  >
                    <CounterNumber count={6} />
                  </div>
                  <p className="experience">
                    Years Of <br />
                    Experience
                  </p>
                  <div className="clip" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="about-us-h5-image">
                <img src="/assets/images/page/image-ab-home.jpg" alt="image" />
                <p className="des">
                  With over six years of experience, we deliver tailored
                  solutions in software development, cloud computing,
                  cybersecurity, and data analytics. Our dedicated team ensures
                  optimal performance and security in every project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

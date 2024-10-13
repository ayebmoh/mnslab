import Link from "next/link";

export default function Footer1() {
  return (
    <>
      <footer id="footer" className="relative footer-style-2">
        <div className="marque-text-slider-footer">
          <div className="marquee-wrapper text-slider">
            <div className="marquee-inner to-left">
              <ul className="marqee-list d-flex">
                <li className="marquee-item">
                  <span className="text-slider">IT Services</span>
                  <i className="icon-asterisk" />
                  <span className="text-slider">Cyber Security</span>
                  <i className="icon-asterisk" />
                  <span className="text-slider">Data Security</span>
                  <i className="icon-asterisk" />
                  <span className="text-slider">Cyber Security</span>
                  <i className="icon-asterisk" />
                  <span className="text-slider">Data Security</span>
                  <i className="icon-asterisk" />
                  <span className="text-slider">IT Services</span>
                  <i className="icon-asterisk" />
                  <span className="text-slider">Cyber Security</span>
                  <i className="icon-asterisk" />
                  <span className="text-slider">Data Security</span>
                  <i className="icon-asterisk" />
                  <span className="text-slider">IT Services</span>
                  <i className="icon-asterisk" />
                  <span className="text-slider">Cyber Security</span>
                  <i className="icon-asterisk" />
                  <span className="text-slider">Data Security</span>
                  <i className="icon-asterisk" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tf-container relative z-index-3">
          <div className="footer-main  flex">
            <div
              className="footer-main-item logo-footer wow fadeInUpSmall"
              data-wow-delay=".2s"
            >
              <img src="/assets/images/Logo.png" alt="image" className="logo" />
            </div>

            <div
              className="footer-main-item menu-suport wow fadeInUpSmall"
              data-wow-delay=".4s"
            >
              <h4 className="title-footer2 ">Support</h4>
              <ul className="menu-service">
                <li>
                  <Link href="/contact-us">
                    <i className="icon-right-icon" />
                    Forum Support
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <i className="icon-right-icon" />
                    Help &amp; FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us">
                    <i className="icon-right-icon" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <i className="icon-right-icon" />
                    Pricing and plans
                  </Link>
                </li>
                <li>
                  <Link href="/privacy&policy">
                    <i className="icon-right-icon" />
                    Cookies Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="footer-main-item newsletter wow fadeInUpSmall"
              data-wow-delay=".5s"
            >
              <h4 className="title-footer2 ">Newsletter</h4>
              <p className="mb-20">
                Subscribe our newsletter to get more updates
              </p>
              <form
                action="/"
                className="form-footer2 relative flex-two"
                id="subscribe-form"
                method="post"
                acceptCharset="utf-8"
                data-mailchimp="true"
              >
                <i className="icon-envelope" />
                <input
                  type="email"
                  name="email-form"
                  id="subscribe-email"
                  placeholder="Email Address"
                />
                <button type="submit" id="subscribe-button">
                  Sign Up <i className="icon-right-icon" />
                </button>
              </form>
              <p className="privacy-policy">
                By subscribing, you’re accept{" "}
                <Link href="/privacy&policy">Privacy Policy</Link>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 ">
              <a id="scroll-top" className="button-go go-top-h1 relative" />
            </div>
          </div>
          <div className="footer-bottom2 row">
            <div className="col-md-6">
              <p>
                © 2024 Minutes Network Labs - IT Services. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="menu-right-bottom flex-six">
                <li>
                  <Link href="/faq">Company</Link>
                </li>
                <li>
                  <Link href="/contact-us">Support</Link>
                </li>
                <li>
                  <Link href="/privacy&policy">Privacy</Link>
                </li>
                <li>
                  <Link href="/faq">Faqs</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

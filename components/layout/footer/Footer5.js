import Link from "next/link";

export default function Footer5() {
  return (
    <>
      <footer id="footer" className="footer-style-5 bg-1">
        <div className="tf-container">
          <div className="row footer-bottom5 align-center">
            <div className="col-md-5">
              <p className="text-white">
                © 2024 Minutes Network Labs - IT Services. All rights reserved.
              </p>
            </div>
            <div className="col-md-2">
              <a id="scroll-top" className="button-go go-top-h5 relative" />
            </div>
            <div className="col-md-5">
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

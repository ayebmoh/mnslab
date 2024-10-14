"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileMenu() {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");

  useEffect(() => {
    setCurrentMenuItem(pathname);
  }, [pathname]);

  const checkCurrentMenuItem = (path) =>
    currentMenuItem === path ? "current" : "";
  const checkParentActive = (paths) =>
    paths.some((path) => currentMenuItem.startsWith(path)) ? "current" : "";

  const [isAccordion, setIsAccordion] = useState(1);

  const handleAccordion = (key) => {
    setIsAccordion((prevState) => (prevState === key ? null : key));
  };
  return (
    <>
      <div
        className="navbar-collapse collapse clearfix"
        id="navbarSupportedContent"
      >
        <ul className="navigation clearfix">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/service1">Service</Link>
            <ul style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
              <li className={`${checkCurrentMenuItem("/service1")}`}>
                <Link href="/service1">Services</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/faq">Faq</Link>

            <div className="dropdown2-btn" onClick={() => handleAccordion(5)} />
          </li>

          <li className={`${pathname === "/contact-us" ? "current" : ""}`}>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

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
            {/* <div className="dropdown2-btn" onClick={() => handleAccordion(1)} /> */}
          </li>
          <li
            className={`dropdown2 ${
              isAccordion == 2 ? "open" : ""
            } ${checkParentActive([
              "/about-company",
              "/team",
              "/team-details",
            ])}`}
          >
            <Link href="/about-company">Company</Link>
            <ul style={{ display: `${isAccordion == 2 ? "block" : "none"}` }}>
              <li className={`${checkCurrentMenuItem("/about-company")}`}>
                <Link href="/about-company">About Company</Link>
              </li>
              {/* <li className={`${checkCurrentMenuItem("/team")}`}>
                <Link href="/team">Team Member</Link>
              </li> */}
              {/* <li className={`${checkCurrentMenuItem("/team-details")}`}>
                <Link href="/team-details">Team Details</Link>
              </li> */}
            </ul>
            {/* <div className="dropdown2-btn" onClick={() => handleAccordion(2)} /> */}
          </li>
          <li
          // className={`dropdown2 ${
          //   isAccordion == 3 ? "open" : ""
          // } ${checkParentActive([
          //   "/services",

          // ])}`}
          >
            <Link href="/service1">Service</Link>
            <ul style={{ display: `${isAccordion == 3 ? "block" : "none"}` }}>
              <li className={`${checkCurrentMenuItem("/service1")}`}>
                <Link href="/service1">Services</Link>
              </li>
            </ul>
          </li>

          <li
          // className={`dropdown2 ${
          //   isAccordion == 5 ? "open" : ""
          // } ${checkParentActive(["/faq"])}`}
          >
            <Link href="/faq">Faq</Link>

            {/* <li className={`${checkCurrentMenuItem("/pricing")}`}>
                <Link href="/pricing">Price Page</Link>
              </li>
              <li className={`${checkCurrentMenuItem("/404")}`}>
                <Link href="/404">404 Page</Link>
              </li> */}
            <div className="dropdown2-btn" onClick={() => handleAccordion(5)} />
          </li>
          {/* <li
            className={`dropdown2 ${
              isAccordion == 6 ? "open" : ""
            } ${checkParentActive(["/blog", "/blog-style2", "/blog-details"])}`}
          >
            <Link href="/#">Blog</Link>
            <ul style={{ display: `${isAccordion == 6 ? "block" : "none"}` }}>
              <li className={`${checkCurrentMenuItem("/blog")}`}>
                <Link href="/blog">Blog Full</Link>
              </li>
              <li className={`${checkCurrentMenuItem("/blog-style2")}`}>
                <Link href="/blog-style2">Blog List</Link>
              </li>
              <li className={`${checkCurrentMenuItem("/blog-details")}`}>
                <Link href="/blog-details">Blog Detail</Link>
              </li>
            </ul>
            <div className="dropdown2-btn" onClick={() => handleAccordion(6)} />
          </li>*/}
          <li className={`${pathname === "/contact-us" ? "current" : ""}`}>
            <Link href="/contact-us">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

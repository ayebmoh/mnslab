"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Menu() {
  const pathname = usePathname();
  const [currentMenuItem, setCurrentMenuItem] = useState("");
  const router = useRouter();
  useEffect(() => {
    setCurrentMenuItem(pathname);
  }, [pathname]);

  const checkCurrentMenuItem = (path) =>
    currentMenuItem === path ? "current" : "";
  const checkParentActive = (paths) =>
    paths.some((path) => currentMenuItem.startsWith(path)) ? "current" : "";

  return (
    <>
      <ul className="navigation clearfix">
        <li className={`${checkCurrentMenuItem("/")}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${checkCurrentMenuItem("/service1")}`}>
          <Link href="/service1">Services</Link>
        </li>

        <li>
          <Link href="/faq">Faq</Link>
        </li>
        <li className={`${pathname === "/contact-us" ? "current" : ""}`}>
          <Link
            href={pathname === "/" ? "#" : "/contact-us"}
            onClick={(e) => {
              e.preventDefault();
              if (pathname === "/") {
                document.getElementById("section-contact").scrollIntoView({
                  behavior: "smooth",
                });
              } else {
                router.push("/contact-us");
              }
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import Offcanvas from "./Offcanvas";
import Search from "./Search";
import Footer2 from "./footer/Footer2";
import Footer5 from "./footer/Footer5";
import Header2 from "./header/Header2";
import Header5 from "./header/Header5";

export default function Layout({
  headerStyle,
  footerStyle,
  breadcrumbTitle,
  children,
}) {
  const [scroll, setScroll] = useState(0);

  // MoblileMenu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
    !isMobileMenu
      ? document.body.classList.add("mobile-menu-visible")
      : document.body.classList.remove("mobile-menu-visible");
  };

  // Search
  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(!isSearch);
  };

  // Offcanvas
  const [isOffcanvas, setOffcanvas] = useState(false);
  const handleOffcanvas = () => {
    setOffcanvas(!isOffcanvas);
  };

  useEffect(() => {
    const WOW = require("wowjs");
    window.wow = new WOW.WOW({
      live: false,
    });
    window.wow.init();

    const onScroll = () => {
      setScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div id="top" />
      {/* <AddClassBody /> */}

      <div id="wrapper">
        <div id="pagee" className="clearfix">
          {!headerStyle && (
            <Header2
              scroll={scroll}
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
              handleSearch={handleSearch}
              handleOffcanvas={handleOffcanvas}
            />
          )}
          {headerStyle == 1 ? (
            <Header1
              scroll={scroll}
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
              handleSearch={handleSearch}
              handleOffcanvas={handleOffcanvas}
            />
          ) : null}
          {headerStyle == 2 ? (
            <Header2
              scroll={scroll}
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
              handleSearch={handleSearch}
              handleOffcanvas={handleOffcanvas}
            />
          ) : null}
          {headerStyle == 3 ? (
            <Header3
              scroll={scroll}
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
              handleSearch={handleSearch}
              handleOffcanvas={handleOffcanvas}
            />
          ) : null}

          {headerStyle == 5 ? (
            <Header5
              scroll={scroll}
              isMobileMenu={isMobileMenu}
              handleMobileMenu={handleMobileMenu}
              handleSearch={handleSearch}
              handleOffcanvas={handleOffcanvas}
            />
          ) : null}

          <main className="main">
            {breadcrumbTitle && (
              <Breadcrumb breadcrumbTitle={breadcrumbTitle} />
            )}

            {children}
          </main>

          {!footerStyle && <Footer2 />}

          {footerStyle == 5 ? <Footer5 /> : null}

          <BackToTop target="#top" />
        </div>
      </div>
      <Search isSearch={isSearch} handleSearch={handleSearch} />
      <Offcanvas isOffcanvas={isOffcanvas} handleOffcanvas={handleOffcanvas} />
    </>
  );
}

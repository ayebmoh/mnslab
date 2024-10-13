"use client";
import VideoPopup from "@/components/elements/VideoPopup";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Privacy() {
  return (
    <>
      <Layout breadcrumbTitle="Privacy Policy">
        <div className="privacy-container">
          <section className="privacy-section">
            <h3>1. Introduction</h3>
            <p>
              At Minutes Network Labs ("we," "us," or "our"), we are committed
              to protecting the privacy of our clients, partners, and website
              visitors. This Privacy Policy explains how we collect, use, and
              protect your personal data in compliance with applicable data
              protection regulations, including the General Data Protection
              Regulation (GDPR).
            </p>
            <h3>2. Information We Collect</h3>
            <p>
              We may collect the following types of information: Personal
              Information: When you contact us, we may collect information such
              as your name, email address, phone number, job title, and company
              name. Project Information: Details about your project
              requirements, preferences, and specifications. Automatically
              Collected Information: This includes your IP address, browser
              type, device information, operating system, and usage data when
              you visit our website.
            </p>
            <h3>3. How We Use Your Information</h3>
            <p>
              To deliver and improve our IT development and consulting services.
              To respond to inquiries, provide project updates, and manage
              client relationships. To process payments, manage contracts, and
              fulfill legal obligations. To analyze website traffic and improve
              the user experience. If you opt-in, we may send you newsletters
              and promotional materials.
            </p>
            <h3>4. Legal Basis for Processing Data</h3>
            <p>
              We process your personal data based on the following legal
              grounds: Contractual Necessity: To provide the services you
              request. Legitimate Interests: To maintain business operations,
              enhance our services, and communicate with you. Consent: For
              marketing communications, if you have provided explicit consent.
            </p>
            <h3>5. Sharing Your Information</h3>
            <p>
              We do not sell or share your personal information for commercial
              purposes. However, we may share your data with: Service Providers:
              Third parties who assist us in delivering our services (e.g.,
              cloud hosting providers, payment processors). Legal Compliance: If
              required by law or to protect our legal rights, we may disclose
              your information to authorities or legal entities.
            </p>
            <h3>6. Data Security</h3>
            <p>
              We use industry-standard security measures to protect your
              personal data from unauthorized access, alteration, or loss.
              However, while we strive to protect your data, no system can be
              completely secure, and we cannot guarantee absolute security.
            </p>
            <h3>7. Cookies and Tracking Technologies</h3>
            <p>
              Our website uses cookies to enhance your browsing experience and
              analyze website traffic. You can manage or disable cookies through
              your browser settings, though some features of the website may not
              function properly if cookies are disabled.
            </p>
            <h3>8. Your Rights Under GDPR</h3>
            <p>
              As a resident of the European Union, you have the following rights
              regarding your personal data: Access: You can request access to
              the personal information we hold about you. Rectification: You can
              request corrections if your information is inaccurate or
              incomplete. Deletion: You can request the deletion of your data
              under certain circumstances. Restriction or Objection: You can ask
              us to stop processing your data or object to certain types of data
              processing. Data Portability: You have the right to request a copy
              of your data in a structured, machine-readable format. Withdrawal
              of Consent: You can withdraw your consent for marketing
              communications at any time. To exercise these rights, please
              contact us at admin@mntlabs.io.
            </p>
            <h3>9. Data Retention</h3>
            <p>
              We will retain your personal information for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy or as
              required by law.
            </p>
            <h3>10. Third-Party Links</h3>
            <p>
              Our website may contain links to third-party websites or services.
              We are not responsible for the privacy practices or content of
              these external sites. We encourage you to read the privacy
              policies of any linked websites.
            </p>
            <h3>11. Changes to this Privacy Policy</h3>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our business practices or legal obligations. Any
              updates will be posted on this page with a revised “Effective
              Date.”
            </p>
            <h3>12. Contact Us</h3>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy or your personal data, please contact us:
            </p>
            <h5>Email: admin@mntlabs.io</h5>
            <h5>Address: Barcelona , Spain</h5>
            <h5>Effective Date: 10/10/2024</h5>
          </section>
        </div>
      </Layout>
    </>
  );
}

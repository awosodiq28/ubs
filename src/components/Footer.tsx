import Link from "next/link";
import React from "react";
import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className="bg-border">
      <div className="resFlex">
        <span className={styles.sect1}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            width="127px"
            height="46px"
            viewBox="0 0 127 46"
            enableBackground="new 0 0 127 46"
          >
            <style type="text/css"></style>
            <path
              fill="#E60000"
              d="m74.3 27.7c0 9.5-5.2 10.7-10.4 10.7-8.9 0-10.8-4.6-10.8-11.1v-18.5h-3.3v-1.8h12.5v1.8h-3.5v17.9c0 6.3 1.6 9.5 6.2 9.5s6.9-2.3 6.9-8.9v-18.5h-3.3v-1.8h8.9v1.8h-3l-0.2 18.9zm8.7 8.5v-27.4h-3.5v-1.8h13.8c5.9 0 8.8 3.3 8.8 7.2 0 4.2-3.8 6.5-7.1 7.2 6.5 0.6 8.3 4.8 8.3 7.9 0 6.3-5.4 8.7-10.6 8.7h-13.4v-1.8h3.7zm13.5-21.6c0-2.9-1.5-5.8-4.8-5.8h-3.6v11.9h3.2c3.6 0 5.2-2.9 5.2-6.1zm1.2 14.8c0-4.1-1.8-6.9-5.9-6.9h-3.5v13.8h2.9c4.3-0.1 6.5-2.7 6.5-6.9zm19.5-21c-3.3 0-5.4 1.9-5.4 5.3 0 3 3.3 4.5 6.5 5.6 1.9 0.7 4.3 1.6 6 3.1 1.8 1.7 2.8 4 2.7 6.9-0.1 5.4-3.9 9.1-10.6 9.1-2.5 0-6.4-0.6-8.7-1.9l-0.3-8.1h2c0.2 5.5 2.7 8.3 7.2 8.3 3.6 0 5.6-2.4 5.6-6.1 0-3.2-2.6-4.5-6.6-5.9-1.3-0.4-3.9-1.4-5.7-3.2-1.6-1.6-2.4-3.7-2.4-5.8 0-6.3 4.5-9.1 10.1-9.1 2.2 0 5.5 0.8 7.5 1.9l0.2 7.1h-2c-0.3-5-2.5-7.2-6.1-7.2z"
            />
            <path
              style={{ color: "#000000" }}
              d="m34.1 13.3-0.8 0.7 0.9 2.9-2.6-1.4-0.9 0.7 2.9 1.6-3.1 2.5-0.8-1.1 1.1-0.9-0.8-1-1.1 0.9-0.9-1.2 1.1-0.9-0.8-1.1-5.6 4.7 5.4 4.3 1-1.2c0.7 0 1.2 0.6 1.5 1.2l-1 1.2 0.6 0.5c1.3-1.2 3.1-2 4.9-2 3.8 0 6.7 3.1 6.7 6.9 0 1.2-0.3 2.6-1 3.7l1 0.8c0 0.7-0.7 1.5-1.4 1.7l-1-0.8c-1.3 1.3-3.1 2-4.9 2-3.8 0-6.7-3-6.7-6.8 0-1.2 0.4-2.5 0.9-3.6l-0.7-0.5-1 1.3c-0.7-0.1-1.3-0.6-1.5-1.3l1-1.1-4.5-3.8v6h1.5c0.2 0.3 0.3 0.6 0.3 0.9s-0.1 0.7-0.3 1h-1.5v0.7c3.3 0.6 6.1 3.4 6.1 6.8 0 3.5-2.7 6.3-6.1 6.9v1.2c-0.3 0.2-0.7 0.3-1.1 0.3s-0.9-0.1-1.2-0.3v-1.2c-3.4-0.5-6-3.4-6-6.9 0-3.4 2.6-6.2 6-6.7v-0.8h-1.6c-0.2-0.3-0.3-0.6-0.3-1s0.1-0.7 0.3-1h1.6v-6l-4.6 3.8 1 1.1c-0.2 0.7-0.8 1.2-1.5 1.3l-1-1.3-0.6 0.6c0.6 1.1 1 2.3 1 3.6 0 3.8-3 6.8-6.7 6.8-1.8 0-3.6-0.7-4.9-2l-1 0.8c-0.6-0.2-1.3-1-1.4-1.7l1-0.8c-0.6-1.1-1-2.4-1-3.7 0-3.8 2.9-6.9 6.7-6.9 1.8 0 3.6 0.8 4.9 2l0.6-0.4-1-1.2c0.2-0.6 0.8-1.1 1.5-1.2l1 1.2 5.4-4.3-5.6-4.7-0.8 1.1 1.1 0.9-0.8 1.1-1.1-0.9-0.8 1 0.9 0.7-0.8 1.1-3-2.5 2.8-1.6-0.8-0.7-2.6 1.4 0.8-2.7-0.8-0.7-1 3.1-3.1-2.5 0.8-1 1.1 0.9 0.9-1-1.1-1 0.8-1 1.1 0.8 0.8-1-2.4-1.8c0.2-0.8 0.7-1.4 1.5-1.9l12.7 10.4v-6.9h-1.3v1.3h-1.3v-1.3h-1.3v1.3h-1.3v-3.9l3 1.3v-1.1l-2.8-1.2 2.8-1.1v-1l-3 1.2v-4h1.3v1.4h1.3v-1.4h1.3v1.4h1.3v-3.1c0.4-0.1 0.8-0.2 1.2-0.2s0.8 0.1 1.1 0.2v17.1l12.7-10.4c0.7 0.5 1.2 1.1 1.5 1.9l-2.4 1.9 0.8 1 1.1-0.8 0.8 1-1.1 1 0.8 1 1.1-0.9 0.8 1-3.1 2.5-0.9-3.2zm-25.9 18.8c0 1.1 0.8 1.8 1.8 1.9l-1.6 1.2c-1.1-0.4-2.1-1.7-2.1-2.9 0-0.4 0.1-0.6 0.2-0.9h-0.3c-1.5 0-2.7-1.4-3-2.8l1.7-1.3v0.5c0 0.9 0.9 1.7 1.8 1.7 1 0 1.9-0.8 1.9-1.8 0-1.2-0.9-2-2.1-2-2.2 0-4.4 2.2-4.4 5 0 0.8 0.2 1.6 0.5 2.3l1-0.8c0.7 0.3 1.2 1 1.4 1.8l-1 0.8c1 0.8 2.2 1.2 3.4 1.2 2.6 0 4.6-2.1 4.6-3.9 0-1.1-0.7-2-1.8-2-1.2 0.2-2 1-2 2zm13.6 4c0 1 0.8 1.8 1.8 1.8 0.7 0 1-0.3 1.5-0.7v2.1c-0.5 0.3-1 0.4-1.6 0.4-1.1 0-2-0.3-2.6-1.3-0.6 1-1.6 1.3-2.7 1.3-0.5 0-1.1-0.1-1.6-0.4v-2.1c0.5 0.5 0.8 0.7 1.5 0.7 1 0 1.8-0.8 1.8-1.8s-0.6-1.8-1.7-1.8c-1.9 0-2.7 1.8-2.7 3.5 0 2.4 1.8 4.5 4.1 4.9v-1.2c0.4-0.2 0.8-0.2 1.1-0.2 0.4 0 0.8 0 1.2 0.2v1.2c2.2-0.3 4.1-2.6 4.1-4.9 0-1.7-0.7-3.5-2.7-3.5-0.8-0.1-1.5 0.8-1.5 1.8zm11.4-8.3c0 0.9 1 1.8 1.9 1.8s1.8-0.8 1.8-1.7v-0.5l1.6 1.3c-0.3 1.6-1.7 2.9-3.3 2.8 0.1 0.3 0.1 0.6 0.1 0.9 0 1.2-1 2.5-2.1 2.9l-1.5-1.3c1-0.1 1.8-0.8 1.8-1.9s-0.9-1.8-1.9-1.8c-1.1 0-1.8 0.9-1.8 2 0 1.3 1.6 3.9 4.7 3.9 1.2 0 2.4-0.4 3.3-1.2l-1-0.8c0.2-0.8 0.7-1.5 1.4-1.8l1 0.8c0.4-0.7 0.6-1.5 0.6-2.3 0-2.2-1.7-5-4.4-5-1.2 0-2.2 0.7-2.2 1.9z"
            />
          </svg>
          {/* <h2 className="logo mb-5">Union Bank of Switzerland</h2> */}
          <p className="mb-3">
            Union bank of Switzerland is a financial base banking system. We
            offer different types of financial services to our customers all
            over the world such as Loan, Wire transfer, Long term deposit,
            savings and some other related services.
          </p>
        </span>
        <span className={styles.sect}>
          <h4>Quick Explore</h4>
          <div className={styles.line}></div>
          <ul className="mt-2">
            <li>
              <Link className={styles.navLinks} href={"/#contact"}>
                Contact
              </Link>
            </li>
            <li>
              <Link className={styles.navLinks} href={"/#about"}>
                About
              </Link>
            </li>
            <li>
              <Link className={styles.navLinks} href={"/#services"}>
                Services
              </Link>
            </li>
          </ul>
        </span>
        <span className={styles.sect}>
          <h4>Pages</h4>
          <div className={styles.line}></div>
          <ul className="mt-2">
            <li>
              <Link className={styles.navLinks} href={"/privacy-policy"}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className={styles.navLinks} href={"/terms-condition"}>
                Terms & Condition
              </Link>
            </li>
            <li>
              <Link className={styles.navLinks} href={"/faq"}>
                FAQ
              </Link>
            </li>
          </ul>
        </span>
      </div>
      <p>
        Copyright © 2022 <strong>Union Bank of Switzerland</strong> - All Rights
        Reserved.
      </p>
    </footer>
  );
};

export default Footer;

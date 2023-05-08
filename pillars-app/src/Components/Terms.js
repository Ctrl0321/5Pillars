import React, { Component, useState, useEffect } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Loader from "./Loader";
import "../Css/Terms.css";

const Term = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="haa"></div>
          <div className="terms-container">
            <h1>Terms and Conditions</h1>

            <div className="section">
              <h2 className="section-title">Introduction</h2>
              <div className="section-content">
                <p>
                  At 5pillars Academy Ltd, we take the privacy of our customers
                  and users seriously and are committed to protecting their
                  personal data in accordance with the General Data Protection
                  Regulation (GDPR). This privacy policy outlines how we
                  collect, process, and use personal data. What data we collect:{" "}
                  <br />
                  We may collect personal data such as name, address, email
                  address, phone number, and payment information from our
                  customers and users. We may also collect non-personal data
                  such as website usage information. How we use the data: We
                  will only use personal data for internal purposes such as
                  providing our products and services, processing payments, and
                  communicating with our customers and users. We may also use
                  personal data to send marketing communications about our
                  products and services, but only if the individual has given
                  their explicit consent. We will not share personal data with
                  any third party without the individual's explicit consent,
                  except where required by law. How we protect the data: We take
                  appropriate technical and organizational measures to protect
                  personal data from unauthorized access, accidental loss, or
                  destruction. We ensure that our employees, contractors, and
                  service providers who have access to personal data are bound
                  by appropriate confidentiality obligations. Data retention:{" "}
                  <br /> We will only retain personal data for as long as
                  necessary to fulfill the purposes for which it was collected,
                  including any legal or accounting requirements. Individual
                  rights: Individuals have the right to request access to,
                  rectification, erasure, or restriction of their personal data.
                  They also have the right to object to the processing of their
                  personal data or to withdraw their consent at any time.
                  Individuals have the right to lodge a complaint with a
                  supervisory authority if they believe that their data has been
                  processed in violation of GDPR. Refund Policy: At 5pillars
                  Academy, we are committed to providing a high-quality online
                  learning experience for our students. However, we understand
                  that there may be instances where a refund is requested. Our
                  refund policy is as follows: If a student has not taken their
                  first online class, they are eligible for a full refund of
                  their fee. If a student has taken at least one class, the fee
                  for that month will not be refunded. If a student has taken
                  multiple classes, the fee for the current month and any prior
                  months will not be refunded. To request a refund, please
                  contact our customer support team at
                  <a href="https://refunds@5pillarsacademy.com">
                    refunds@5pillarsacademy.com
                  </a>
                  . We will process your request as quickly as possible. Please
                  note that any refunds will be issued using the same payment
                  method that was used for the original transaction. Refunds may
                  take up to 7 working days to process, but we will try to
                  process them sooner. Exceptions: In some cases, we may make
                  exceptions to our refund policy. For example, if there are
                  extenuating circumstances that prevented a student from
                  attending classes or if there was a technical issue with our
                  platform that prevented a student from accessing course
                  materials. In such cases, we will review the request on a
                  case-by-case basis and determine whether a refund is
                  appropriate. Cancellation: If a student wishes to cancel their
                  enrollment in 5pillars Academy, they can do so at any time by
                  contacting our customer support team. If the cancellation
                  request is received before the start of the month, the fee for
                  that month will not be charged. If the cancellation request is
                  received after the start of the month, the fee for that month
                  will not be refunded.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};
export default Term;

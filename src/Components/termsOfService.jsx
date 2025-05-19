import React from "react";

const TermsOfService = () => {
  let effectiveDate = new Date();
  effectiveDate.setFullYear(effectiveDate.getFullYear() + 1);
  effectiveDate = effectiveDate.toLocaleDateString();

  return (
    <div className="mx-auto mt-12 px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Terms and Conditions</h1>
      <p className="text-gray-600 text-center mb-10 text-lg">Effective Date: {effectiveDate}</p>

      {/** Sections **/}
      <div className="space-y-8">
        {/** Refund Policy **/}
        <Section title="Refund Policy">
          Due to the nature of digital products, all sales are final, and we are unable to offer refunds once the car inspection report has been delivered.
          However, if you do not receive your report within the expected timeframe, please contact us within 7 days of purchase, and we will assist you in resolving the issue.
          Refunds for unauthorized transactions may be considered only if reported within 24 hours of purchase and will be processed after a thorough verification of the claim.
        </Section>
        {/** Product Description **/}
        <Section title="Product Description">
          The Products offered on this Website are digital inspection reports for vehicles. Once
          purchased, the buyer will receive a PDF report via email.
        </Section>


        {/** Unauthorized Payments **/}
        <Section title="Unauthorized Payments">
          If you suspect an unauthorized payment, please contact us at
          <a target="_blank" href="mailto:hello.bumpercheck@gmail.com" className="text-blue-500 hover:underline">
          hello.bumpercheck@gmail.com
          </a>{" "}
          within 24 hours of purchase.
          If reported within this timeframe, we will investigate the issue and process a refund if the claim is verified.
          Unfortunately, if the request is made after 24 hours, we may not be able to assist, as it falls outside our refund policy.
        </Section>

        {/** Digital Product Delivery **/}
        <Section title="Digital Product Delivery">
          Once your payment has been successfully processed and confirmed, your car inspection report will be delivered to the email address you provided.
          Reports are typically delivered within 24 hours of payment confirmation.
          Since this is a digital product, refunds cannot be issued after delivery unless there is clear evidence of an unauthorized transaction reported within 24 hours of purchase.
        </Section>


        {/** Disputes and Chargebacks **/}
        <Section title="Disputes and Chargebacks">
          In the event of a chargeback or dispute related to unauthorized payments, we kindly ask that you cooperate with us by providing relevant transaction details and communication to help resolve the issue as swiftly as possible.
          To ensure fairness and resolution, we may need to temporarily restrict access to the website while the matter is under investigation.
          We will work closely with PayPal and other payment providers to resolve disputes efficiently. However, please note that the final decision rests with PayPal or the respective payment provider.
        </Section>

        {/** Fraud Prevention **/}
        <Section title="Fraud Prevention">
          To protect both our customers and our business, we use several methods to prevent fraud, including address verification, email confirmations, and device/IP address tracking.
          If we identify any suspicious activity or fraudulent transactions, we may need to cancel the order or restrict access to the product to ensure security. Please note that in such cases, we may not be able to provide a refund.
          We appreciate your understanding as we take necessary precautions to maintain a safe and secure experience for all our customers.
        </Section>

        {/** Privacy and Data Protection **/}
        <Section title="Privacy and Data Protection">
          We are committed to protecting your privacy and ensuring that your personal information is handled with the utmost care. For detailed information on how we collect, store, and protect your data, please refer to our
          <a href="/privacy" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>{" "}
          By purchasing a car inspection report, you consent to the collection and use of your information for processing the transaction and delivering the product.
          Rest assured, your privacy is very important to us, and we take all necessary steps to safeguard your information.
        </Section>

        {/** User Responsibilities **/}
        <Section title="User Responsibilities">

          We kindly ask that you provide accurate and complete information, including the VIN (Vehicle Identification Number) and the email address where you would like the car inspection report to be delivered. This ensures prompt and accurate delivery of your report.
          By using our website and purchasing the inspection report, you agree to comply with all applicable laws and regulations, and refrain from any fraudulent or unauthorized activities.
          Your cooperation helps us maintain a secure and reliable service for everyone.
        </Section>

        {/** Limitation of Liability **/}
        <Section title="Limitation of Liability">
          The products we provide are digital reports intended for informational purposes only. While we strive to ensure the accuracy of the information, we do not guarantee the completeness or absolute accuracy of the report. The buyer assumes full responsibility for how the report is used.
          We are not liable for any damages, losses, or costs incurred from the use or reliance on the product, except where explicitly required by applicable law.
          We appreciate your understanding as we work to offer valuable insights while keeping the usage of our products clear and transparent.
        </Section>

        {/** Changes to Terms **/}
        <Section title="Changes to Terms">
          We may update or modify these Terms and Conditions at any time. Any changes will take effect immediately upon being posted on this page.
          We kindly encourage you to review these terms periodically to stay informed of any updates. Your continued use of our website indicates your acceptance of the most recent terms.
        </Section>

        {/** Contact Us **/}
        <Section title="Contact Us">

          If you have any questions or concerns about these Terms and Conditions, please don't hesitate to reach out to us. We are here to assist you.
          You can contact us via email at: <a target="_blank" href="mailto:hello.bumpercheck@gmail.com" className="text-blue-500 hover:underline">
          hello.bumpercheck@gmail.com
          </a>
        </Section>
      </div>
    </div>
  );
};

/** Reusable Section Component **/
const Section = ({ title, children }) => (
  <div className="border-l-4 border-yellow-500 pl-4">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-700 leading-relaxed">{children}</p>
  </div>
);

export default TermsOfService;

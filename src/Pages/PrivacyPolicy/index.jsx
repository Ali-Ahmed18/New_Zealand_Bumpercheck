import React from 'react';
import { LiaGreaterThanSolid } from "react-icons/lia";
import Footer from '../../Components/footer';
import HeadManager from '../../Components/headerManager.jsx';

function PrivacyPolicy() {
  let effectiveDate = new Date();
  effectiveDate.setFullYear(effectiveDate.getFullYear() + 1);
  effectiveDate = effectiveDate.toLocaleDateString();


  return (
    <>
      <HeadManager
        title="New Zealand Bumpercheck - Privacy & Policy"
        description="Learn about CorrectVin® privacy policy. Understand how we handle and protect your personal information. Your trust is our priority."
        keywords="privacy policy, data protection, personal information, privacy statement"
      />
      <div className="mx-auto p-8 mt-14 w-[100%] max-w-[1300px]">
        <div className='flex items-center gap-3 mb-4 cursor-default'>
          <p className='text-blue-500'>Home</p>
          <p className='flex items-center'>
            <LiaGreaterThanSolid className='text-[10px]' />
          </p>
          <p>Privacy Policy</p>
        </div>

        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Effective Date: {effectiveDate}</p>

        {/** Information Collection and Use **/}
        <Section title="Information Collection and Use">
          While using our site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to, your name ("Personal Information").
        </Section>

        {/** Log Data **/}
        <Section title="Log Data">
          Like many site operators, we collect information that your browser sends whenever you visit our site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
        </Section>

        {/** Communications **/}
        <Section title="Communications">
          We may use your Personal Information to contact you with newsletters, marketing, or promotional materials and other information.
        </Section>

        {/** Cookies **/}
        <Section title="Cookies">
          Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive.
          <br /><br />
          Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site.
        </Section>

        {/** Security **/}
        <Section title="Security">
          The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
        </Section>

        {/** Changes to Privacy Policy **/}
        <Section title="Changes to This Privacy Policy">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the site. You are advised to review this Privacy Policy periodically for any changes.
        </Section>

        <p className="mb-4">This Privacy Policy is effective as of {effectiveDate}</p>
      </div>

      <Footer />
    </>
  );
}

// Reusable Section Component
const Section = ({ title, children }) => (
  <div className="border-l-4 border-yellow-500 pl-4 mb-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-700 leading-relaxed">{children}</p>
  </div>
);

export default PrivacyPolicy;

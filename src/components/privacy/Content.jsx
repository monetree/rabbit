import React from "react";

const Content = () => {
  return (
    <div className="p-4 w-4/5 space-y-9 lg:p-16 max-lg:w-full text-selfGray">
      <div className="text-3xl font-bold text-darkGreen">Privacy Policy </div>
      <div className="space-y-2">
        <p className="text-sm">
          This Privacy Policy describes how Crates Health Inc. (the "Company")
          collects, uses, and shares information about you when you use our
          website at crateshealth.com and our mobile application (collectively,
          the "Services").
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-sm">Information We Collect</p>
        <p className="text-sm">
          This Privacy Policy describes how Crates Health Inc. (the "Company")
          collects, uses, and shares information about you when you use our
          website at crateshealth.com and our mobile application (collectively,
          the "Services").
        </p>

        <p className="text-sm">
          We may also collect other information that does not reveal your
          specific identity or does not directly relate to an identifiable
          individual, such as:
        </p>
      </div>

      <div className="space-y-2">
        <ul className="text-sm">
          <li>- Browser and device information</li>
          <li>- Respond to your inquiries and provide customer support</li>
          <li>- Usage data</li>
          <li>
            - Information collected through cookies and other tracking
            technologies
          </li>
        </ul>
      </div>

      <div className="space-y-2">
        <p className="text-sm">How We Use Your Information</p>
        <h6 className="text-sm">We may use the information we collect to:</h6>
        <ul className="text-sm">
          <li>- Provide, maintain, and improve the Services</li>
          <li>- Respond to your inquiries and provide customer support</li>
          <li>- Analyze how the Services are accessed, used, or perform</li>
          <li>- Personalize and tailor your experience with the Services</li>
        </ul>

        <p className="text-sm">
          We may share your Personal Information with third party service
          providers that assist with our operations. We may also share your
          information as required by law or to protect our rights.
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-sm">Data Retention</p>
        <p className="text-sm">
          We retain your Personal Information for as long as necessary to
          provide the Services and for legitimate and essential business
          purposes such as maintaining business records.
        </p>

        <p className="text-sm">User Rights</p>
        <p className="text-sm">
          You may have certain rights in relation to your Personal Information,
          such as rights to access, correct, delete, or object to the processing
          of your information.
        </p>

        <p className="text-sm">Data Security</p>
        <p className="text-sm">
          We implement reasonable security measures to protect the security of
          your information. However, no system is impenetrable, and we cannot
          guarantee the security of systems.
        </p>

        <p className="text-sm">Children's Privacy</p>
        <p className="text-sm">
          We do not knowingly collect information from children under the age of
          13 through the Services.
        </p>

        <p className="text-sm">Changes to this Privacy Policy</p>
        <p className="text-sm">
          We may modify this Privacy Policy at any time.
        </p>
        <p className="text-sm">Contact Us</p>

        <p className="text-sm">
          If you have any questions or concerns about this policy, please
          contact us at <span className="underline">info@crateshealth.com</span>
          .
        </p>
      </div>
    </div>
  );
};

export default Content;

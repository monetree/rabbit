import React from "react";

const Content = () => {
  return (
    <div className="p-4 w-4/5 space-y-9 lg:p-16 max-lg:w-full text-selfGray">
      <div className="text-3xl font-bold text-darkGreen">Terms of Service</div>
      <div className="space-y-4">
        <p className="text-sm">
          Welcome to Crates Health Inc. (the "Company"). By using our website at
          crateshealth.com or our mobile application (collectively the
          "Service"), you agree to be bound by these Terms of Service.
        </p>
        <div>
          <p className="text-sm">1. Use of the Service</p>
          <p className="text-sm">
            The Service allows you to track and record information about your
            health and wellness. You must be at least 18 years old to use the
            Service. Your use of the Service must comply with all applicable
            laws and regulations.
          </p>
        </div>
        <div>
          <p className="text-sm">2. User Accounts</p>
          <p className="text-sm">
            You may need to create an account to access certain features of the
            Service. You are responsible for maintaining the confidentiality of
            your account credentials and for restricting access to your account.
          </p>
        </div>
        <div>
          <p className="text-sm">3. User Content </p>
          <p className="text-sm">
            The Service allows you to upload, submit, store, send or receive
            content such as data, text, images, and other materials (the "User
            Content"). You retain ownership of your User Content, but by
            submitting User Content you grant the Company a worldwide license to
            use, reproduce, modify and display the User Content solely for the
            purposes of providing the Service.
          </p>
        </div>{" "}
        <div>
          <p className="text-sm">4. Prohibited Conduct</p>
          <p className="text-sm">
            You agree not to use the Service in any unlawful manner or for any
            unlawful purpose. This includes not uploading or transmitting any
            User Content that is defamatory, obscene, threatening, invasive of
            privacy, infringing of intellectual property rights, or otherwise
            objectionable.
          </p>
        </div>{" "}
        <div>
          <p className="text-sm">5. Proprietary Rights</p>
          <p className="text-sm">
            The Service is owned and operated by the Company. The content,
            visual interfaces, information, graphics, design, compilation,
            computer code, products, services, and all other elements of the
            Service ("Company Materials") are protected by intellectual property
            and other laws. All Company Materials are the property of the
            Company or its third party licensors.
          </p>
        </div>{" "}
        <div>
          <p className="text-sm">6. Termination</p>
          <p className="text-sm">
            The Company may suspend or terminate your access to the Service at
            any time and for any reason.
          </p>
        </div>{" "}
        <div>
          <p className="text-sm">7. Disclaimers</p>
          <p className="text-sm">
            YOUR USE OF THE SERVICE IS AT YOUR OWN RISK. THE SERVICE IS PROVIDED
            ON AN "AS IS" BASIS WITHOUT WARRANTIES OF ANY KIND.
          </p>
        </div>{" "}
        <div>
          <p className="text-sm">8. Limitation of Liability</p>
          <p className="text-sm">
            IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY INDIRECT, SPECIAL,
            INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR RELATING TO
            THE SERVICE.
          </p>
        </div>{" "}
        <div>
          <p className="text-sm">9. Governing Law</p>
          <p className="text-sm">
            These Terms shall be governed by and interpreted in accordance with
            the laws of the State of Texas, without regard for any conflict of
            laws principles.
          </p>
        </div>{" "}
        <div>
          <p className="text-sm">10. Entire Agreement</p>
          <p className="text-sm">
            These Terms, together with the Privacy Policy and any other terms
            incorporated by reference, constitute the entire agreement between
            you and the Company relating to your use of the Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;

import React from "react";
import { Accordion } from "flowbite-react";
const Faqs = () => {
  return (
    <section
      id="faqs"
      class="px-4 xl:px-4  bg-cover bg-beige bg-bottom  pb-14 pt-12 bg-pitch"
    >
      <div class="container mx-auto">
        <div class="mx-auto ">
          <div class="grid grid-cols-2 gap-5 mt-8  flex-col lg:flex-row content-center">
            <div class="col-span-2 lg:col-span-1  relative">
              <h1 class="font-epilogue text-3xl font-semibold leading-13 tracking-normal  mt-4 ">
                Frequently asked questions
                <br />
                <span class="text-coffee">Crates Health </span>
              </h1>
              <p class="font-epilogue text-sm  leading-7 tracking-normal  text-selfGray mt-4">
                These are the questions we get most often. If you still have{" "}
                <br />
                questions, reach out to our team at{" "}
                <a
                  href="mailto:info@crateshealth.com"
                  class="font-semibold text-darkGreen underline"
                >
                  info@crateshealth.com
                </a>
              </p>
            </div>

            <div class="col-span-2 lg:col-span-1  relative">
              <Accordion className="border-none">
                <Accordion.Panel className=" !bg-white !rounded-xl overflow-hidden mt-10">
                  <Accordion.Title className="mt-3.5 font-semibold lg:text-lg relative rounded-xl w-full text-black opacity-100 focus:shadow-none  focus:ring-0  !bg-white focus:bg-white">
                    How does this actually work?
                  </Accordion.Title>
                  <Accordion.Content className="!bg-white relative !rounded-br-xl !rounded-bl-xl -mt-2 after:absolute after:top-2 after:left-5 after:right-5 after:opacity-40 after:border-b after:border-selfGray">
                    <div class="py-5   border-gray-200 dark:border-gray-700">
                      <p class="mb-0 pb-0 text-sm text-selfGray ">
                        HSA/FSA accounts were created so patients can use pretax
                        money to pay for “expenses incurred primarily for the
                        prevention or alleviation of a physical or mental defect
                        or illness.” Many wellness products require a Letter of
                        Medical Necessity (LMN) from a provider describing how
                        it can help prevent or alleviate conditions you care
                        about. Crates' licensed providers will review your
                        survey and issue a LMN (if you qualify). This LMN
                        enables you to use your HSA dollars on the wellness
                        products you love.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel className=" !bg-white !rounded-xl overflow-hidden mt-10">
                  <Accordion.Title className="mt-3.5 font-semibold lg:text-lg relative rounded-xl w-full text-black opacity-100 focus:shadow-none  focus:ring-0  !bg-white focus:bg-white">
                    Where do the savings come from?
                  </Accordion.Title>
                  <Accordion.Content className="!bg-white relative !rounded-br-xl !rounded-bl-xl -mt-2 after:absolute after:top-2 after:left-5 after:right-5 after:opacity-40 after:border-b after:border-selfGray">
                    <div class="py-5   border-gray-200 dark:border-gray-700">
                      <p class="mb-0 pb-0 text-sm text-selfGray ">
                        Crates enables you to use HSA/FSA dollars. By using your
                        HSA/FSA dollars, you are using pre-tax dollars to
                        purchase products or services. This means that you do
                        not pay state or federal taxes on those dollars spent.
                        On average, that is 30% savings. For some of our users,
                        the savings are thousands of dollars. On average, we
                        save users $327 annually
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel className=" !bg-white !rounded-xl overflow-hidden mt-10">
                  <Accordion.Title className="mt-3.5 font-semibold lg:text-lg relative rounded-xl w-full text-black opacity-100 focus:shadow-none  focus:ring-0  !bg-white focus:bg-white">
                    How does reimbursement work?
                  </Accordion.Title>
                  <Accordion.Content className="!bg-white relative !rounded-br-xl !rounded-bl-xl -mt-2 after:absolute after:top-2 after:left-5 after:right-5 after:opacity-40 after:border-b after:border-selfGray">
                    <div class="py-5   border-gray-200 dark:border-gray-700">
                      <p class="mb-0 pb-0 text-sm text-selfGray ">
                        Once you've purchased your product, you upload a photo
                        or PDF of your receipt. We will then initiate the
                        reimbursement process with our partner HSA/FSA
                        administrators. The process can take anywhere from 4-21
                        days depending on your HSA administrator. We are always
                        working closely with administrators to bring this time
                        down. Of course, you always have the option to file for
                        reimbursement directly with your HSA/FSA administrator.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel className=" !bg-white !rounded-xl overflow-hidden mt-10">
                  <Accordion.Title className="mt-3.5 font-semibold lg:text-lg relative rounded-xl w-full text-black opacity-100 focus:shadow-none  focus:ring-0  !bg-white focus:bg-white">
                    What is a Letter of Medical Necessity?
                  </Accordion.Title>
                  <Accordion.Content className="!bg-white relative !rounded-br-xl !rounded-bl-xl -mt-2 after:absolute after:top-2 after:left-5 after:right-5 after:opacity-40 after:border-b after:border-selfGray">
                    <div class="py-5   border-gray-200 dark:border-gray-700">
                      <p class="mb-0 pb-0 text-sm text-selfGray ">
                        A Letter of Medical Necessity (LMN) is a formal document
                        that explains why a patient needs a specific treatment,
                        product, or service. A licensed healthcare provider
                        writes the document.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel className=" !bg-white !rounded-xl overflow-hidden mt-10">
                  <Accordion.Title className="mt-3.5 text-left font-semibold lg:text-lg relative rounded-xl w-full text-black opacity-100 focus:shadow-none  focus:ring-0  !bg-white focus:bg-white">
                    Why do some products need a Letter of Medical Necessity
                    while others do not?
                  </Accordion.Title>
                  <Accordion.Content className="!bg-white relative !rounded-br-xl !rounded-bl-xl -mt-2 after:absolute after:top-2 after:left-5 after:right-5 after:opacity-40 after:border-b after:border-selfGray">
                    <div class="py-5   border-gray-200 dark:border-gray-700">
                      <p class="mb-0 pb-0 text-sm text-selfGray ">
                        The IRS determines which products do or do not require
                        Letters of Medical Necessity. The IRS realizes that
                        medical professionals will be better suited to determine
                        medical necessity for certain products.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel className=" !bg-white !rounded-xl overflow-hidden mt-10">
                  <Accordion.Title className="mt-3.5 font-semibold lg:text-lg relative rounded-xl w-full text-black opacity-100 focus:shadow-none  focus:ring-0  !bg-white focus:bg-white">
                    Can I request a product or service that is not listed?{" "}
                  </Accordion.Title>
                  <Accordion.Content className="!bg-white relative !rounded-br-xl !rounded-bl-xl -mt-2 after:absolute after:top-2 after:left-5 after:right-5 after:opacity-40 after:border-b after:border-selfGray">
                    <div class="py-5   border-gray-200 dark:border-gray-700">
                      <p class="mb-0 pb-0 text-sm text-selfGray ">
                        Absolutely! We are always evaluating new categories,
                        brands, and products. Please send us an email at
                        <a
                          href="mailto:info@ourservice.com"
                          className=" text-beige hover:text-darkGreen"
                        >
                          {" "}
                          info@crateshealth.com
                        </a>{" "}
                        with your suggestion. If you are Ultimate Saver
                        subscriber, you have the option to submit a custom
                        request and we will prioritize these requests.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;

import React from "react";
import { Accordion } from "flowbite-react";
const Faqs = () => {
  return (
    <section
      id="faqs"
      class="px-4 xl:px-4  bg-cover bg-bottom  pb-14 pt-12 bg-beige"
    >
      <div class="container mx-auto">
        <div class="mx-auto ">
          <div class="grid grid-cols-2 gap-5 mt-8  flex-col lg:flex-row content-center">
            <div class="col-span-2 lg:col-span-1  relative">
              <h1 class="font-epilogue text-3xl lg:text-4xl font-semibold leading-13 tracking-normal  capitalize mt-4 ">
                Frequently asked questions
                <span class="text-coffee">Crates Health </span>
              </h1>
              <p class="font-epilogue text-base font-medium leading-7 tracking-normal  text-selfGray mt-4">
                These are the questions we get most often. If you still have
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
                  <Accordion.Title className="mt-3.5 font-bold lg:text-lg relative rounded-xl w-full text-black opacity-100 focus:shadow-none  focus:ring-0  !bg-white focus:bg-white">
                    How does this actually work?
                  </Accordion.Title>
                  <Accordion.Content className="!bg-white relative !rounded-br-xl !rounded-bl-xl -mt-2 after:absolute after:top-2 after:left-5 after:right-5 after:opacity-40 after:border-b after:border-selfGray">
                    <div class="py-5   border-gray-200 dark:border-gray-700">
                      <p class="mb-0 pb-0 text-base text-gray-600 ">
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
                  <Accordion.Title className="mt-3.5 font-bold lg:text-lg relative rounded-xl w-full text-black opacity-100 focus:shadow-none  focus:ring-0  !bg-white focus:bg-white">
                    Where do the savings come from?
                  </Accordion.Title>
                  <Accordion.Content className="!bg-white relative !rounded-br-xl !rounded-bl-xl -mt-2 after:absolute after:top-2 after:left-5 after:right-5 after:opacity-40 after:border-b after:border-selfGray">
                    <div class="py-5   border-gray-200 dark:border-gray-700">
                      <p class="mb-0 pb-0 text-base text-gray-600 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione et iusto porro facere quidem excepturi quaerat
                        quis nobis delectus nemo quae, cumque eaque ipsam
                        reiciendis sapiente! Et molestias aspernatur minus.
                        adipisicing elit. Ratione et iusto porro facere quidem
                        excepturi quaerat quis nobis delectus nemo quae, cumque
                        eaque ipsam reiciendis sapiente! Et molestias aspernatur
                        minus.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel className=" !bg-white !rounded-xl overflow-hidden mt-10">
                  <Accordion.Title className="mt-3.5 font-bold lg:text-lg relative rounded-xl w-full text-black opacity-100 focus:shadow-none  focus:ring-0  !bg-white focus:bg-white">
                    How does reimbursement work?
                  </Accordion.Title>
                  <Accordion.Content className="!bg-white relative !rounded-br-xl !rounded-bl-xl -mt-2 after:absolute after:top-2 after:left-5 after:right-5 after:opacity-40 after:border-b after:border-selfGray">
                    <div class="py-5   border-gray-200 dark:border-gray-700">
                      <p class="mb-0 pb-0 text-base text-gray-600 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione et iusto porro facere quidem excepturi quaerat
                        quis nobis delectus nemo quae, cumque eaque ipsam
                        reiciendis sapiente! Et molestias aspernatur minus.
                        adipisicing elit. Ratione et iusto porro facere quidem
                        excepturi quaerat quis nobis delectus nemo quae, cumque
                        eaque ipsam reiciendis sapiente! Et molestias aspernatur
                        minus.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel className=" !bg-white !rounded-xl overflow-hidden mt-10">
                  <Accordion.Title className="mt-3.5 font-bold lg:text-lg relative rounded-xl w-full text-black opacity-100 focus:shadow-none  focus:ring-0  !bg-white focus:bg-white">
                    What is a Letter of Medical Necessity?
                  </Accordion.Title>
                  <Accordion.Content className="!bg-white relative !rounded-br-xl !rounded-bl-xl -mt-2 after:absolute after:top-2 after:left-5 after:right-5 after:opacity-40 after:border-b after:border-selfGray">
                    <div class="py-5   border-gray-200 dark:border-gray-700">
                      <p class="mb-0 pb-0 text-base text-gray-600 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione et iusto porro facere quidem excepturi quaerat
                        quis nobis delectus nemo quae, cumque eaque ipsam
                        reiciendis sapiente! Et molestias aspernatur minus.
                        adipisicing elit. Ratione et iusto porro facere quidem
                        excepturi quaerat quis nobis delectus nemo quae, cumque
                        eaque ipsam reiciendis sapiente! Et molestias aspernatur
                        minus.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel className=" !bg-white !rounded-xl overflow-hidden mt-10">
                  <Accordion.Title className="mt-3.5 text-left font-bold lg:text-lg relative rounded-xl w-full text-black opacity-100 focus:shadow-none  focus:ring-0  !bg-white focus:bg-white">
                    Why do some products need a Letter of Medical Necessity
                    while others do not?
                  </Accordion.Title>
                  <Accordion.Content className="!bg-white relative !rounded-br-xl !rounded-bl-xl -mt-2 after:absolute after:top-2 after:left-5 after:right-5 after:opacity-40 after:border-b after:border-selfGray">
                    <div class="py-5   border-gray-200 dark:border-gray-700">
                      <p class="mb-0 pb-0 text-base text-gray-600 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione et iusto porro facere quidem excepturi quaerat
                        quis nobis delectus nemo quae, cumque eaque ipsam
                        reiciendis sapiente! Et molestias aspernatur minus.
                        adipisicing elit. Ratione et iusto porro facere quidem
                        excepturi quaerat quis nobis delectus nemo quae, cumque
                        eaque ipsam reiciendis sapiente! Et molestias aspernatur
                        minus.
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Panel>

                <Accordion.Panel className=" !bg-white !rounded-xl overflow-hidden mt-10">
                  <Accordion.Title className="mt-3.5 font-bold lg:text-lg relative rounded-xl w-full text-black opacity-100 focus:shadow-none  focus:ring-0  !bg-white focus:bg-white">
                    Can I request a product or service that is not listed?{" "}
                  </Accordion.Title>
                  <Accordion.Content className="!bg-white relative !rounded-br-xl !rounded-bl-xl -mt-2 after:absolute after:top-2 after:left-5 after:right-5 after:opacity-40 after:border-b after:border-selfGray">
                    <div class="py-5   border-gray-200 dark:border-gray-700">
                      <p class="mb-0 pb-0 text-base text-gray-600 ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione et iusto porro facere quidem excepturi quaerat
                        quis nobis delectus nemo quae, cumque eaque ipsam
                        reiciendis sapiente! Et molestias aspernatur minus.
                        adipisicing elit. Ratione et iusto porro facere quidem
                        excepturi quaerat quis nobis delectus nemo quae, cumque
                        eaque ipsam reiciendis sapiente! Et molestias aspernatur
                        minus.
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

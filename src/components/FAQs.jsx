import React from 'react';

const FAQs = () => {
  return (
    <section id='faqs'>
      <div className='max-w-[1200px] mx-auto px-5'>
        <h1 className='xl:text-[52px] lg:text-[44px] text-3xl  leading-tight relative mt-4 font-semibold text-center '>
          FAQs
        </h1>
        <p className='text-gray3 font-medium md:text-lg text-base max-w-[650px] text-center mx-auto mt-4'>
          These are the questions we get most often. If you still have
          questions, reach out to our team at info@crateshealth.com
        </p>

        <div className='py-16 lg:py-24 '>
          <div className='flex flex-wrap -mx-5'>
            <div className='p-5 lg:basis-1/3 sm:basis-1/2 basis-full'>
              <h2 className='text-lg font-extrabold text-black '>
                How does this actually work?
              </h2>
              <p className='mt-2.5 text-gray3 font-medium'>
                HSA/FSA accounts were created so patients can use pretax money
                to pay for “expenses incurred primarily for the prevention or
                alleviation of a physical or mental defect or illness.” Many
                wellness products require a Letter of Medical Necessity (LMN)
                from a provider describing how it can help prevent or alleviate
                conditions you care about. Crates' licensed providers will
                review your survey and issue a LMN (if you qualify). This LMN
                enables you to use your HSA dollars on the wellness products you
                love.
              </p>
            </div>

            <div className='p-5 lg:basis-1/3 sm:basis-1/2 basis-full'>
              <h2 className='text-lg font-extrabold text-black '>
                Where do the savings come from?
              </h2>
              <p className='mt-2.5 text-gray3 font-medium'>
                Crates enables you to use HSA/FSA dollars. By using your HSA/FSA
                dollars, you are using pre-tax dollars to purchase products or
                services. This means that you do not pay state or federal taxes
                on those dollars spent. On average, that is 30% savings. For
                many of our users, the savings are thousands of dollars. On
                average, we save users $325 annually
              </p>
            </div>

            <div className='p-5 lg:basis-1/3 sm:basis-1/2 basis-full'>
              <h2 className='text-lg font-extrabold text-black '>
                How does reimbursement work?
              </h2>
              <p className='mt-2.5 text-gray3 font-medium'>
                Once you've purchased your product, you send us a photo or PDF
                of your receipt. We will then initiate the reimbursement process
                with our partner HSA administrators. The process can take
                anywhere from 4-21 days depending on your HSA administrator. We
                are always working closely with administrators to bring this
                time down.
              </p>
            </div>

            <div className='p-5 lg:basis-1/3 sm:basis-1/2 basis-full'>
              <h2 className='text-lg font-extrabold text-black '>
                What is a Letter of Medical Necessity?
              </h2>
              <p className='mt-2.5 text-gray3 font-medium'>
                A Letter of Medical Necessity (LMN) is a formal document that
                explains why a patient needs a specific treatment, product, or
                service. A licensed healthcare provider writes the document.
              </p>
            </div>

            <div className='p-5 lg:basis-1/3 sm:basis-1/2 basis-full'>
              <h2 className='text-lg font-extrabold text-black '>
                Why do some products need a Letter of Medical Necessity while
                others do not?
              </h2>
              <p className='mt-2.5 text-gray3 font-medium'>
                The IRS determines which products do or do not require Letters
                of Medical Necessity. The IRS realizes that medical
                professionals will be better suited to determine medical
                necessity for certain products.
              </p>
            </div>

            <div className='p-5 lg:basis-1/3 sm:basis-1/2 basis-full'>
              <h2 className='text-lg font-extrabold text-black '>
                Can I request a product or service that is not listed?
              </h2>
              <p className='mt-2.5 text-gray3 font-medium'>
                Absolutely! We are always evaluating new categories, brands, and
                products. Please send us an email at info@crateshealth.com with
                your suggestion
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

import React from "react";

const Form = () => {
  return (
    <div className="bg-darkGreen px-4 py-14 lg:px-16">
      <div class="text-center md:w-[75%] mx-auto">
        <p class="font-lato text-xs font-medium leading-5 tracking-normal text-center text-beige uppercase ">
          reach us
        </p>

        <h1 class="font-epilogue text-2xl lg:text-3xl font-semibold leading-13 tracking-normal text-center mt-4 text-white">
          Haven’t Found Answer To Your Question?
        </h1>
      </div>

      <div className="bg-white w-3/5 rounded-2xl p-10 py-6 mx-auto mt-8 text-sm text-dark max-md:w-11/12">
        <form className="space-y-6">
          <div className="border-b border-beige">
            <div>First Name</div>
            <input
              type="text"
              name=""
              className="pl-0 text-sm mt-4 border-none w-full rounded-md"
              placeholder="First Name"
              id=""
            />
          </div>
          <div className="border-b border-beige">
            <div>Email</div>
            <input
              type="email"
              placeholder="Email Address"
              className="pl-0 text-sm mt-4 border-none w-full rounded-md"
              name=""
              id=""
            />
          </div>
          <div className="border-b border-beige">
            <div>Message</div>
            <textarea
              name=""
              id=""
              placeholder="Message"
              className="pl-0 text-sm mt-4 border-none w-full rounded-md"
              rows="3"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-darkGreen rounded-full text-white w-2/3 py-3">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;

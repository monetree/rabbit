import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo 1.png";
import IconCall from "../assets/images/call.svg";
import IconEmail from "../assets/images/email.svg";
import IconLocation from "../assets/images/location.svg";
import { VITE_MARKETPLACE_URL } from "../utils/Constants";

const Footer = () => {
  return (
    <footer class="px-4 xl:px-4  bg-cover bg-bottom  pt-10 pb-6 bg-darkGreen">
      <div class="container mx-auto">
        <div class="grid grid-cols-12">
          <div class="col-span-12 lg:col-span-3 x-auto flex justify-center lg:justify-start mb-7 lg:mb-0">
            <img src={Logo} alt="" class="h-7 " />
          </div>
          <div class="col-span-12 lg:col-span-9 ">
            <div class="grid grid-cols-12 ">
              <div class="col-span-12 md:col-span-4 lg:col-span-3 mx-auto md:text-start  text-center mb-5 md:mb-0 ">
                <h3 class="text-beige text-lg font-semibold mb-4">
                  Quick Links
                </h3>
                <div class="mb-3">
                  <a href="" class=" text-beige hover:text-coffee text-basis ">
                    Home
                  </a>
                </div>
                <div class="mb-3">
                  <a href="" class=" text-beige hover:text-coffee text-basis ">
                    About Us
                  </a>
                </div>
                <div class="mb-3">
                  <a href="" class=" text-beige hover:text-coffee text-basis ">
                    Our Services
                  </a>
                </div>
                <div class="mb-3">
                  <a href="" class=" text-beige hover:text-coffee text-basis ">
                    Marketplace
                  </a>
                </div>
                <div class="mb-3">
                  <a href="" class=" text-beige hover:text-coffee text-basis ">
                    Contact Us
                  </a>
                </div>
              </div>
              <div class="col-span-12 md:col-span-4 lg:col-span-3 mx-auto md:text-start  text-center mb-5 md:mb-0">
                <h3 class="text-beige text-lg font-semibold mb-4">
                  Our Services
                </h3>
                <div class="mb-3">
                  <Link
                    to={`${VITE_MARKETPLACE_URL}/survey`}
                    class=" text-beige hover:text-coffee text-basis "
                  >
                    Start Sav
                  </Link>
                </div>
                <div class="mb-3">
                  <a href="" class=" text-beige hover:text-coffee text-basis ">
                    Start Sav
                  </a>
                </div>
                <div class="mb-3">
                  <a href="" class=" text-beige hover:text-coffee text-basis ">
                    Start Sav
                  </a>
                </div>
                <div class="mb-3">
                  <a href="" class=" text-beige hover:text-coffee text-basis ">
                    Start Sav
                  </a>
                </div>
              </div>
              <div class="col-span-12 md:col-span-4 lg:col-span-6 mx-auto md:text-start  text-center mb-5 md:mb-0">
                <div class="mx-auto md:ml-auto  w-fit">
                  <h3 class="text-beige text-lg font-semibold mb-4">
                    Contacts
                  </h3>
                  <div class="mb-3 flex items-start justify-center md:justify-start">
                    <img src={IconLocation} alt="" class="mr-3" />{" "}
                    <a
                      href=""
                      class=" text-beige hover:text-coffee text-basis "
                    >
                      5th Avenue, New York, USA
                    </a>
                  </div>
                  <div class="mb-3 flex items-start justify-center md:justify-start">
                    <img src={IconCall} alt="" class="mr-3" />{" "}
                    <a
                      href="tel:+123485080468"
                      class=" text-beige hover:text-coffee text-basis "
                    >
                      +123485080468
                    </a>
                  </div>
                  <div class="mb-2 flex items-start justify-center md:justify-start">
                    <img src={IconEmail} alt="" class="mr-3" />{" "}
                    <a
                      href="mailto:info@ourservice.com"
                      class=" text-beige hover:text-coffee text-basis "
                    >
                      info@ourservice.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr class="mt-5 h-[0.5px] bg-white" />
        <p class="text-basis text-sm text-white text-center mt-6 font-normal">
          © 2024 Actualise Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

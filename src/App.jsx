import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./components/Home";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Aboutus from "./components/aboutus/Aboutus";
import Blog from "./components/blog/Blog";
import Article from "./components/article/Article";
import PrivacyPolicy from "./components/privacy/PrivacyPolicy";
import TermsAndConditions from "./components/terms/TermsAndConditions";
import Support from "./components/support/Support";
import { createWaitlist } from "./apis/api";
import Header from "./components/Header";
import ModalComponent from "./components/modal";
import { useState } from "react";

const App = () => {
  const [modal, setModal] = useState(false);
  const [email, setEmail] = useState(null);
  const [success, setSuccess] = useState(false);

  const createNewWaitlist = async (e) => {
    e.preventDefault();
    try {
      await createWaitlist({ email });
      setSuccess(true);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  return (
    <BrowserRouter>
      <Header createNewWaitlist={() => setModal(true)} setModal={setModal} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              createNewWaitlist={() => setModal(true)}
              setModal={setModal}
            />
          }
        />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article" element={<Article />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {modal ? (
        <ModalComponent setIsModal={setModal}>
          <>
            {success ? (
              <>
                <div>
                  <p className="text-darkGreen text-2xl text-center">
                    Thanks for joining waitlist
                  </p>
                  <p className="text-darkGreen text-sm text-center mt-2">
                    Our team will get back to you soon.
                  </p>
                </div>
              </>
            ) : (
              <form
                class="max-w-sm mx-auto flex flex-col items-center"
                onSubmit={createNewWaitlist}
              >
                <div class="mb-5 w-full">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-darkGreen"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 border border-darkGreen text-gray-900 text-sm rounded-full focus:ring-darkGreen focus:border-darkGreen block w-full p-2.5"
                    placeholder="name@flowbite.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="text-darkGreen font-medium lg:text-white border-2 mb-4 lg:mb-0 hover:shadow-custom hover:border-2 border-darkGreen rounded-[30px] cursor-pointer text-center bg-white lg:bg-darkGreen hover:bg-white hover:font-medium lg:hover:text-darkGreen w-32 h-10 flex justify-center items-center"
                >
                  Join waitlist
                </button>
              </form>
            )}
          </>
        </ModalComponent>
      ) : (
        ""
      )}
    </BrowserRouter>
  );
};

export default App;

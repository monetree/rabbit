import EmailIcon from "../assets/images/login/email.svg";
import PasswordIcon from "../assets/images/login/password.svg";

const Login = () => {
  return (
    <div className="pt-[70px] px-6 lg:pt-[100px] overflow-x-hidden">
      <form className="max-w-lg mx-auto">
        <p className="text-gray8 text-sm font-normal text-center">
          Welcome to the Wellness Marketplace. Sign in with your Google account
          to continue.
        </p>

        <div className="mt-8">
          <button
            type="button"
            className="text-black1 w-full bg-gray9 hover:bg-gray9/90 focus:ring-4 focus:outline-none focus:ring-gray9/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center me-2 mb-2"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 19"
            >
              <path
                fillRule="evenodd"
                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                clipRule="evenodd"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </form>

      <p className="text-gray8 text-base text-center mt-4 mb-4">OR</p>

      <form className="max-w-lg mx-auto">
        <div className="mb-6 relative">
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            <img src={EmailIcon} />
          </div>
        </div>

        <div className="mb-6 relative">
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 pr-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            required
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            <img src={PasswordIcon} />
          </div>
        </div>

        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              defaultValue
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-nomral text-black1"
          >
            Keep me signed in
          </label>
        </div>

        <button
          type="button"
          className="text-black1 w-full bg-lightBlue hover:bg-lightBlue/90 focus:ring-4 focus:outline-none focus:ring-lightBlue/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center me-2 mb-2"
        >
          <span className="text-center">Sign in</span>
        </button>

        <p className="text-gray8 text-sm mt-4 font-normal text-center">
          Forgot your password?
        </p>
      </form>
    </div>
  );
};

export default Login;

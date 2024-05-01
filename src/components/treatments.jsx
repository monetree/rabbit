import { useEffect, useState } from "react";
import { createBulkTreatment, getCategories, uploadFile } from "../apis/api";
import ModalComponent from "./modal";

import "react-confirm-alert/src/react-confirm-alert.css";
import PaginationComponent from "./pagination";

const Treatment = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [file, setFile] = useState(null);
  const [imageUploading, setimageUploading] = useState(false);

  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res.data);
  };

  const updateCategoryData = async (ev) => {
    ev.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      setimageUploading(true);
      const response = await uploadFile(formData);
      const data = response.data;
      const csv_url = data.imageUrl;
      await createBulkTreatment({ csv_url });
    } catch (error) {
    } finally {
      setCategory(null);
      setimageUploading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-40 mt-4">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Category
            </th>
            <th scope="col" class="px-6 py-3">
              Status
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <th
                scope="row"
                class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {category.name}
              </th>
              <th
                scope="row"
                class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Pending
              </th>

              <td class="px-4 py-2 space-x-4 flex">
                <button
                  onClick={() => setCategory(category)}
                  type="button"
                  className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center"
                >
                  <svg
                    className="w-4 h-4 text-white mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="mt-0.5">Create Data</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {categories.length > 10 ? (
        <nav aria-label="Page navigation example" className="mt-8 float-right">
          <PaginationComponent
            brands={categories}
            setPage={setPage}
            page={page}
          />
        </nav>
      ) : (
        ""
      )}

      {category ? (
        <ModalComponent setIsModal={setCategory}>
          <form className="max-w-sm mx-auto" onSubmit={updateCategoryData}>
            <div className="mb-5">
              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    {imageUploading ? (
                      <svg
                        aria-hidden="true"
                        class="w-8 h-8 mb-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    ) : (
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                    )}

                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      {imageUploading
                        ? "Uploading Please wait .. "
                        : "Supports CSV Only"}
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    class="hidden"
                    accept="text/csv"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="text-white float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </form>
        </ModalComponent>
      ) : (
        ""
      )}
    </>
  );
};

export default Treatment;

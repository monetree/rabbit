import { useEffect, useState } from "react";

const Summary = () => {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState([]);
  const [newItem, setNewItem] = useState(false);
  const [category, setCategory] = useState(null);
  const [page, setPage] = useState(1);

  return (
    <>
      <div className="flex space-x-8 mt-4">
        <div>
          <a
            href="#"
            class="block max-w-sm w-60 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              15
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Total users
            </p>
          </a>
        </div>
        <div>
          <a
            href="#"
            class="block max-w-sm w-60 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              $400
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Total revenue
            </p>
          </a>
        </div>

        <div>
          <a
            href="#"
            class="block max-w-sm w-60 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              8
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Total Letter of lmns
            </p>
          </a>
        </div>

        <div>
          <a
            href="#"
            class="block max-w-sm w-60 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              4
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Total reimbursement
            </p>
          </a>
        </div>
      </div>

      <div className="mt-8">
        <h3>Custom lmns</h3>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Username
              </th>
              <th scope="col" class="px-6 py-3">
                Brand
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr></tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Summary;

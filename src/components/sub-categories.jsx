import { useEffect, useState } from "react";
import {
  createSubCategory,
  deleteSubCategory,
  getCategories,
  getSubCategories,
  updateSubCategory,
} from "../apis/api";
import Search from "./search";
import ModalComponent from "./Modal/index";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import PaginationComponent from "./pagination";

const SubCategory = () => {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [subCategories, setSubCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [newItem, setNewItem] = useState(false);
  const [subCategory, setSubCategory] = useState(null);
  const [page, setPage] = useState(1);

  const fetchSubCategories = async () => {
    const res = await getSubCategories({ limit: 100 });
    setSubCategories(res.data);
  };

  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res.data);
  };

  const createSubCategoryData = async (ev) => {
    ev.preventDefault();

    try {
      await createSubCategory({ name: name, category_id: category });
      await fetchSubCategories();
    } catch (error) {
      console.log(error);
    } finally {
      setNewItem(false);
    }
  };
  const updateSubCat = async (ev) => {
    ev.preventDefault();
    try {
      await updateSubCategory(subCategory);
      await fetchSubCategories();
    } catch (error) {
      console.log(error);
    } finally {
      setSubCategory(null);
    }
  };
  const deleteSubCat = async (id) => {
    await deleteSubCategory(id);
    await fetchSubCategories();
  };

  const deletePopup = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message:
        "Are you sure to do this. Deleting will remove all the data related to this sub-category",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteSubCat(id),
        },
        {
          label: "No",
          onClick: () => setSubCategory(null),
        },
      ],
    });
  };

  useEffect(() => {
    fetchSubCategories();
    fetchCategories();
  }, []);

  const filteredItems = subCategories.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Sub Category
            </th>

            <th scope="col" class="px-6 py-3">
              Category
            </th>

            <th scope="col" class="px-6 py-3">
              Action
            </th>

            <th
              scope="col"
              class="px-6 py-3 cursor-pointer flex"
              onClick={() => setNewItem(true)}
            >
              <svg
                class="w-6 h-6 text-gray-800 dark:text-white mt-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4.243a1 1 0 1 0-2 0V11H7.757a1 1 0 1 0 0 2H11v3.243a1 1 0 1 0 2 0V13h3.243a1 1 0 1 0 0-2H13V7.757Z"
                  clip-rule="evenodd"
                />
              </svg>
            </th>

            <th scope="col" class="px-6 py-3 cursor-pointer">
              <Search setSearch={setSearch} />
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredItems
            .slice((page - 1) * 10, page * 10)
            .map((item, index) => (
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>

                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.category_name}
                </th>

                <td class="px-6 py-4 space-x-4 flex">
                  <label
                    className="cursor-pointer hover:text-gray-700"
                    onClick={() => setSubCategory(item)}
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                      />
                    </svg>
                  </label>
                  <label
                    className="cursor-pointer hover:text-gray-700"
                    onClick={() => deletePopup(item.id)}
                  >
                    <svg
                      class="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                      />
                    </svg>
                  </label>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {subCategories.length > 10 ? (
        <nav aria-label="Page navigation example" className="mt-8 float-right">
          <PaginationComponent
            brands={subCategories}
            setPage={setPage}
            page={page}
          />
        </nav>
      ) : (
        ""
      )}

      {subCategory ? (
        <ModalComponent setIsModal={setSubCategory}>
          <form className="max-w-sm mx-auto" onSubmit={updateSubCat}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Sub category name"
                value={subCategory.name}
                onChange={(e) =>
                  setSubCategory({
                    ...subCategory,
                    name: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-5">
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select category
                </label>
                <select
                  value={category.id}
                  onChange={(e) =>
                    setCategory({
                      ...category,
                      category_id: e.target.value,
                    })
                  }
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Select category</option>
                  {categories.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </form>
        </ModalComponent>
      ) : (
        ""
      )}

      {newItem ? (
        <ModalComponent setIsModal={setNewItem}>
          <form className="max-w-sm mx-auto" onSubmit={createSubCategoryData}>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Sub category name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select category
              </label>
              <select
                onChange={(e) => setCategory(e.target.value)}
                id="countries"
                value={category.id}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select category</option>
                {categories.map((item, index) => (
                  <option value={item.id} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default SubCategory;

import { useEffect, useState } from "react";
import {
  createHsaAdministrator,
  deleteHsaAdministrator,
  getHsaAdministrators,
  updateHsaAdministrator,
} from "../apis/api";
import Search from "./search";
import ModalComponent from "./modal";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import PaginationComponent from "./pagination";

const HsaAdministrators = () => {
  const [search, setSearch] = useState("");
  const [hsaAdministrators, setHsaAdministrators] = useState([]);
  const [hsaAdministrator, setHsaAdministrator] = useState(null);
  const [name, setName] = useState("");
  const [newItem, setNewItem] = useState(false);
  const [page, setPage] = useState(1);

  const fetchHsaAdministrators = async () => {
    try {
      const res = await getHsaAdministrators();
      setHsaAdministrators(res.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
  const createHsa = async (ev) => {
    ev.preventDefault();

    try {
      await createHsaAdministrator({ name: name });
      await fetchHsaAdministrators();
    } catch (error) {
      console.log(error);
    } finally {
      setNewItem(false);
    }
  };
  const updateHsa = async (ev) => {
    ev.preventDefault();
    try {
      await updateHsaAdministrator(hsaAdministrator);
      await fetchHsaAdministrators();
    } catch (error) {
      console.log(error);
    } finally {
      setHsaAdministrator(null);
    }
  };
  const deleteHsa = async (id) => {
    await deleteHsaAdministrator(id);
    await fetchHsaAdministrators();
  };

  const deletePopup = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message:
        "Are you sure to do this. Deleting will remove all the data related to this hsa-administrator",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteHsa(id),
        },
        {
          label: "No",
          onClick: () => setHsaAdministrator(null),
        },
      ],
    });
  };

  useEffect(() => {
    fetchHsaAdministrators();
  }, []);

  const filteredItems = hsaAdministrators.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Hsa-Administrator Name
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
            .map((hsaAdministrator, index) => (
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {hsaAdministrator.name}
                </th>
                <td class="px-6 py-4 space-x-4 flex">
                  <label
                    className="cursor-pointer hover:text-gray-700"
                    onClick={() => setHsaAdministrator(hsaAdministrator)}
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
                    onClick={() => deletePopup(hsaAdministrator.id)}
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

      {hsaAdministrators.length === 10 ? (
        <nav aria-label="Page navigation example" className="mt-8 float-right">
          <PaginationComponent
            brands={hsaAdministrators}
            setPage={setPage}
            page={page}
          />
        </nav>
      ) : (
        ""
      )}

      {hsaAdministrator ? (
        <ModalComponent setIsModal={setHsaAdministrator}>
          <form className="max-w-sm mx-auto" onSubmit={updateHsa}>
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
                placeholder="hsa-administrator name"
                value={hsaAdministrator.name}
                onChange={(e) =>
                  setHsaAdministrator({
                    ...hsaAdministrator,
                    name: e.target.value,
                  })
                }
              />
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
          <form className="max-w-sm mx-auto" onSubmit={createHsa}>
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
                placeholder="hsa-administrator name"
                value={name}
                onChange={() => setName(event.target.value)}
              />
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

export default HsaAdministrators;

import { useEffect, useState } from "react";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
  uploadFile,
} from "../apis/api";
import Search from "./search";
import ModalComponent from "./modal";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import PaginationComponent from "./pagination";

const Users = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [filter, setFilter] = useState("");
  const [errors, setErrors] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [imageUploading, setimageUploading] = useState(false);

  const [newItem, setNewItem] = useState(false);
  const [page, setPage] = useState(1);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const validateNewRecord = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!phone) newErrors.phone = "Phone is required";
    return newErrors;
  };

  const validateExistingRecord = () => {
    const newErrors = {};
    if (!user?.name) newErrors.name = "Name is required";
    if (!user?.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(user?.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!user?.phone) newErrors.phone = "Phone is required";
    return newErrors;
  };

  const createRecord = async (ev) => {
    ev.preventDefault();
    const validationErrors = validateNewRecord();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await createUser({ name, email, phone });
      await fetchUsers();
    } catch (error) {
      alert("Error creating user");
    } finally {
      setNewItem(false);
    }
  };

  const updateRecord = async (ev) => {
    ev.preventDefault();

    const validationErrors = validateExistingRecord();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await updateUser(user);
      await fetchUsers();
    } catch (error) {
      alert("Error updating user");
    } finally {
      setUser(null);
    }
  };

  const updateStatus = async (id, status, user) => {
    try {
      await updateUser({
        id,
        is_active: status,
        name: user.name,
        email: user.email,
        phone: user.phone,
      });
      await fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      setimageUploading(true);
      const response = await uploadFile(formData);
      const data = response.data;
      const img_url = data.imageUrl;
      setAvatar({ ...avatar, avatar: img_url });
      await updateUser({
        id: avatar.id,
        avatar: img_url,
        is_active: avatar.is_active,
        name: avatar.name,
        email: avatar.email,
        phone: avatar.phone,
      });
      await fetchUsers();
    } catch (error) {
      console.log(error);
    } finally {
      setimageUploading(false);
    }
  };

  const deleteRecord = async (id) => {
    await deleteUser(id);
    await fetchUsers();
  };

  const deletePopup = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message:
        "Are you sure to do this. Deleting will remove all the data related to this user",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteRecord(id),
        },
        {
          label: "No",
          onClick: () => setUser(null),
        },
      ],
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredItems = users.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesActiveStatus =
      filter === "" ||
      (filter === "Yes" && item.is_active) ||
      (filter === "No" && !item.is_active);

    return matchesName && matchesActiveStatus;
  });

  return (
    <>
      <div className="flex justify-center items-center bg-gray-100">
        <div className="grid place-items-center bg-gray-100 p-4">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {avatar ? (
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={
                    avatar.avatar
                      ? avatar.avatar
                      : "https://flowbite.com/docs/images/blog/image-1.jpg"
                  }
                  alt=""
                />
              </a>
            ) : (
              <div class="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg
                  class="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            )}

            <div className="p-5">
              <a href="#">
                {avatar && avatar.name ? (
                  <div className="mb-4">
                    <p>
                      Name:{" "}
                      <span className="font-semibold">{avatar?.name}</span>
                    </p>
                    <p>
                      Email:{" "}
                      <span className="font-semibold">{avatar?.email}</span>
                    </p>
                    <p>
                      Phone:{" "}
                      <span className="font-semibold">{avatar?.phone}</span>
                    </p>
                  </div>
                ) : (
                  <div>
                    <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      No avatar selected ..{" "}
                    </h5>
                  </div>
                )}
              </a>
              <form className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer text-white flex items-center"
                >
                  {imageUploading ? "Uploading please wait " : "Change avatar"}
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </label>
                <input
                  id="file-upload"
                  onChange={(e) => uploadImage(e.target.files[0])}
                  type="file"
                  className="hidden"
                  accept="image/*"
                />
              </form>
            </div>
          </div>
        </div>

        <div>
          <div className="py-4 flex justify-end">
            <p className="mt-4 mr-16 italic">
              Min <imp>10 records</imp> required to enable pagination{" "}
            </p>
            <a
              target="_blank"
              className="text-blue-800 mr-4 mt-4"
              href="https://www.loom.com/share/ce20916da3c14409a82cbba0aec7d08e"
            >
              Tutorial{" "}
            </a>

            <select
              className="bg-gray-50 m-w-16 h-12 mt-1 mr-2 border border-gray-300 text-gray-900 text-sm rounded-lg"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value={""}>Choose status</option>
              <option value="Yes">Active</option>
              <option value="No">In-active</option>
            </select>

            <div style={{ width: "500px" }}>
              <Search setSearch={setSearch} />
            </div>

            <div
              class="px-6 py-1 cursor-pointer flex"
              onClick={() => setNewItem(true)}
            >
              <button
                type="button"
                className="px-3 py-2 h-10 mt-1 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center"
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
                <span className="mt-0.5">Add </span>
              </button>
            </div>
          </div>
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Is Active
                </th>

                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>

                <th scope="col" class="px-6 py-3">
                  Phone
                </th>

                <th scope="col" class="px-6 py-3">
                  Action
                </th>

                <th scope="col" class="px-6 py-3">
                  Avatar
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
                      class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xs"
                    >
                      <div class="flex items-center">
                        <input
                          onChange={(e) =>
                            updateStatus(item.id, e.target.checked, item)
                          }
                          checked={item.is_active}
                          id="default-checkbox"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                        />
                        <label
                          for="default-checkbox"
                          class="ms-2 mt-1 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          {item.is_active ? "Yes" : "No"}
                        </label>
                      </div>
                    </th>

                    <th
                      scope="row"
                      class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <th
                      scope="row"
                      class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.email}
                    </th>

                    <th
                      scope="row"
                      class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.phone}
                    </th>
                    <td class="px-4 py-2 space-x-4 flex">
                      <label
                        className="cursor-pointer hover:text-gray-700"
                        onClick={() => setUser(item)}
                      >
                        <svg
                          class="w-4 h-4 text-gray-800 dark:text-white"
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
                          class="w-4 h-4 text-gray-800 dark:text-white"
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

                    <th
                      scope="row"
                      class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <button
                        onClick={() => setAvatar(item)}
                        type="button"
                        className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center"
                      >
                        <span className="mt-0.5">View avatar</span>
                      </button>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {users.length > 10 ? (
        <nav aria-label="Page navigation example" className="mt-8 float-right">
          <PaginationComponent brands={users} setPage={setPage} page={page} />
        </nav>
      ) : (
        ""
      )}

      {user ? (
        <ModalComponent setIsModal={setUser}>
          <form className="max-w-sm mx-auto" onSubmit={updateRecord}>
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
                placeholder="Name"
                value={user.name}
                onChange={(e) => {
                  setUser({
                    ...user,
                    name: e.target.value,
                  });
                  setErrors({ ...errors, name: "" });
                }}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@example.com"
                value={user.email}
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                  setErrors({ ...errors, email: "" });
                }}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="+13939399393"
                value={user.phone}
                onChange={(e) => {
                  setUser({
                    ...user,
                    phone: e.target.value,
                  });
                  setErrors({ ...errors, phone: "" });
                }}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
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
          <form className="max-w-sm mx-auto" onSubmit={createRecord}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors({ ...errors, name: "" });
                }}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: "" });
                }}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="mb-5">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="+13939399393"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setErrors({ ...errors, phone: "" });
                }}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
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

export default Users;

import { useEffect, useState } from "react";
import {
  createBrand,
  deleteBrand,
  fetchEligibility,
  fetchTreatment,
  getBrands,
  getCategories,
  getHealthConditions,
  getSubCategories,
  updateBrand,
  updateBrandStatus,
  updateEligibility,
  updateTreatment,
} from "../apis/api";
import Search from "./search";
import ModalComponent from "./modal";

import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import PaginationComponent from "./pagination";

const Brand = () => {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [brands, setBrands] = useState([]);
  const [newItem, setNewItem] = useState(false);
  const [brand, setBrand] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [healthCondition, setHealthCondition] = useState(null);
  const [page, setPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [treatment, setTreatment] = useState(null);
  const [eligibility, setEligibility] = useState([]);
  const [healthConditions, setHealthConditions] = useState([]);
  const [showTreatment, setShowTreatment] = useState(false);
  const [showEligibility, setShowEligibility] = useState(false);
  const [frequency, setFrequency] = useState("");
  const [loading, setLoading] = useState(false);
  const [logo, setLogo] = useState("");
  const [website, setWebsite] = useState("");

  const treatmentUpdate = async (ev) => {
    ev.preventDefault();
    try {
      const res = await updateTreatment({
        brand_id: selectedBrand,
        health_condition_id: healthCondition,
        treatment: treatment.treatment,
        clinical_rationale: treatment.clinical_rationale,
        medical_condition: treatment.medical_condition,
      });
      setTreatment(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setTreatment(null);
      setShowTreatment(false);
      setHealthCondition(null);
      setBrand(null);
    }
  };

  const updateStatus = async (id, is_active) => {
    try {
      await updateBrandStatus({
        id: id,
        is_active: is_active,
      });
      await fetchBrands();
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const eligibilityUpdate = async () => {
    try {
      setLoading(true);
      const res = await updateEligibility({
        eligibility,
      });
      setTreatment(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setEligibility([]);
      setShowEligibility(false);
      setHealthCondition(null);
      setBrand(null);
    }
  };

  const getTreatment = async () => {
    try {
      const res = await fetchTreatment({
        brand_id: selectedBrand,
        health_condition_id: healthCondition,
      });
      setTreatment(res.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const getEligibility = async () => {
    try {
      const res = await fetchEligibility({
        brand_id: selectedBrand,
      });
      setEligibility(res.data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    if (healthCondition && selectedBrand) {
      getTreatment();
    } else {
      if (selectedBrand) {
        getEligibility();
      }
    }
  }, [healthCondition, selectedBrand]);

  const fetchHealthConditions = async () => {
    const res = await getHealthConditions();
    setHealthConditions(res.data);
  };

  const fetchBrands = async () => {
    const res = await getBrands();
    setBrands(res.data);
  };

  useEffect(() => {
    if (category) {
      const data = [];
      subCategories.map((item) => {
        if (item.category_id === parseInt(category)) {
          data.push(item);
        }
      });

      setSelectedSubCategories(data);
    }
  }, [category]);

  useEffect(() => {
    if (brand) {
      const data = [];
      subCategories.map((item) => {
        if (item.category_id === parseInt(brand.category_id)) {
          data.push(item);
        }
      });

      setSelectedSubCategories(data);
    }
  }, [brand]);

  const fetchSubCategories = async () => {
    const res = await getSubCategories({ limit: 100 });
    setSubCategories(res.data);
  };

  const fetchCategories = async () => {
    const res = await getCategories();
    setCategories(res.data);
  };

  const createBrandData = async (ev) => {
    ev.preventDefault();

    try {
      await createBrand({
        name: name,
        category_id: category,
        sub_category_id: subCategory,
        logo: logo,
        website: website,
      });
      await fetchBrands();
    } catch (error) {
      console.log(error);
    } finally {
      setNewItem(false);
    }
  };
  const updateBrandData = async (ev) => {
    ev.preventDefault();
    try {
      await updateBrand(brand);
      await fetchBrands();
    } catch (error) {
      console.log(error);
    } finally {
      setBrand(null);
    }
  };
  const deleteBrandData = async (id) => {
    await deleteBrand(id);
    await fetchBrands();
  };

  const deletePopup = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message:
        "Are you sure to do this. Deleting will remove all the data related to this brand",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteBrandData(id),
        },
        {
          label: "No",
          onClick: () => setBrand(null),
        },
      ],
    });
  };

  useEffect(() => {
    fetchBrands();
    fetchSubCategories();
    fetchCategories();
    fetchHealthConditions();
  }, []);

  const filteredItems = brands.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <div className="py-4 flex justify-end">
        <div style={{ width: "500px" }}>
          <Search setSearch={setSearch} />
        </div>

        <div
          class="px-6 py-1 cursor-pointer flex"
          onClick={() => setNewItem(true)}
        >
          <button
            type="button"
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-white mr-2"
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
            <span className="mt-0.5">Add New Brand</span>
          </button>
        </div>
      </div>
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-4 py-3">
              Active
            </th>

            <th scope="col" class="px-4 py-3">
              Brand
            </th>

            <th scope="col" class="px-4 py-3">
              Category
            </th>

            <th scope="col" class="px-4 py-3">
              Sub category
            </th>

            <th scope="col" class="px-4 py-3">
              Image
            </th>

            <th scope="col" class="px-4 py-3">
              Why H E
            </th>

            <th scope="col" class="px-4 py-3">
              Website
            </th>

            <th scope="col" class="px-4 py-3">
              Treatment
            </th>

            <th scope="col" class="px-4 py-3">
              Eligibility
            </th>

            <th scope="col" class="px-4 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredItems
            .slice((page - 1) * 10, page * 10)
            .map((item, index) => (
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
                key={index}
              >
                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xs"
                >
                  <div class="flex items-center">
                    <input
                      onChange={(e) => updateStatus(item.id, e.target.checked)}
                      checked={item.is_active}
                      id="default-checkbox"
                      type="checkbox"
                      class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xs"
                >
                  {item.name}
                </th>

                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xs"
                >
                  {item.category_name}
                </th>

                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xs"
                >
                  {item.sub_category_name}
                </th>

                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xs"
                >
                  {item.logo ? "Exists" : "Not exists"}
                </th>

                <th
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xs"
                >
                  {item.why_hsa_eligible.slice(0, 10)}
                </th>

                <th
                  scope="row"
                  class="px-4 py-2 font-medium  whitespace-nowrap  text-xs"
                >
                  <a target="_blank" href={`https://${item.website}`}>
                    {item.website}
                  </a>
                </th>

                <th
                  scope="row"
                  class="px-4 py-2 font-medium whitespace-nowrap text-xs"
                >
                  <button
                    onClick={() => {
                      setSelectedBrand(item.id);
                      setShowTreatment(true);
                    }}
                    type="button"
                    class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Treatment
                  </button>
                </th>

                <th
                  scope="row"
                  class="px-4 py-2 font-medium whitespace-nowrap text-xs"
                >
                  <button
                    onClick={() => {
                      setSelectedBrand(item.id);
                      setShowEligibility(true);
                    }}
                    type="button"
                    class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Eligibility
                  </button>
                </th>

                <td class="px-4 py-2 space-x-4 flex text-xs">
                  <label
                    className="cursor-pointer hover:text-gray-700"
                    onClick={() => setBrand(item)}
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
              </tr>
            ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example" className="mt-8 float-right">
        <PaginationComponent brands={brands} setPage={setPage} page={page} />
      </nav>
      {brand ? (
        <ModalComponent setIsModal={setBrand}>
          <form className="max-w-sm mx-auto" onSubmit={updateBrandData}>
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
                placeholder="Brand name"
                value={brand.name}
                onChange={(e) =>
                  setBrand({
                    ...brand,
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
                  onChange={(e) =>
                    setBrand({
                      ...brand,
                      category_id: e.target.value,
                    })
                  }
                  value={brand.category_id}
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

            <div className="mb-5">
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select sub category
                </label>
                <select
                  value={brand.sub_category_id}
                  onChange={(e) =>
                    setBrand({
                      ...brand,
                      sub_category_id: e.target.value,
                    })
                  }
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Select category</option>
                  {selectedSubCategories.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Logo
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Brand name"
                value={brand.logo}
                onChange={(e) =>
                  setBrand({
                    ...brand,
                    logo: e.target.value,
                  })
                }
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Website
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Website"
                value={brand.website}
                setWebsite={(e) =>
                  setBrand({
                    ...brand,
                    logo: e.target.value,
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
          <form className="max-w-sm mx-auto" onSubmit={createBrandData}>
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
                placeholder="Brand name"
                value={name}
                onChange={(event) => setName(event.target.value)}
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
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
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

            <div className="mb-5">
              <div>
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select sub category
                </label>
                <select
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Select sub category</option>
                  {selectedSubCategories.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Logo
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Brand name"
                value={logo}
                onChange={(e) => setLogo(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Website
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
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
      {showTreatment ? (
        <ModalComponent setIsModal={setShowTreatment} lg={true}>
          <form className="mx-auto" onSubmit={treatmentUpdate}>
            <div className="flex flex-wrap gap-4 mb-5">
              <div className="flex-1">
                <label
                  htmlFor="health-condition"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Health Condition
                </label>
                <select
                  onChange={(e) => setHealthCondition(e.target.value)}
                  value={healthCondition}
                  id="health-condition"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Select health condition</option>
                  {healthConditions.map((item, index) => (
                    <option value={item.id} key={index}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="mb-5 flex-1">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Medical condition
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your text here..."
                  value={treatment?.medical_condition}
                  onChange={(e) => {
                    setTreatment({
                      ...treatment,
                      medical_condition: e.target.value,
                    });
                  }}
                ></textarea>
              </div>

              <div className="mb-5 flex-1">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Treatment
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your text here..."
                  value={treatment?.treatment}
                  onChange={(e) => {
                    setTreatment({
                      ...treatment,
                      treatment: e.target.value,
                    });
                  }}
                ></textarea>
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Clinical rationale
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your text here..."
                value={treatment?.clinical_rationale}
                onChange={(e) => {
                  setTreatment({
                    ...treatment,
                    clinical_rationale: e.target.value,
                  });
                }}
              ></textarea>
            </div>

            <div className="mb-5">
              <label
                htmlFor="status-select"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select preference
              </label>
              <select
                onChange={(e) => {
                  setTreatment({
                    ...treatment,
                    preference: e.target.value,
                  });
                }}
                value={treatment?.preference}
                id="status-select"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Select frequency</option>
                <option value={"High"}>High</option>
                <option value={"Medium"}>Medium</option>
                <option value={"Low"}>Low</option>
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
      {showEligibility ? (
        <ModalComponent setIsModal={setShowEligibility}>
          <>
            <div className="overflow-auto max-h-[500px]">
              <table
                class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
                style={{ height: "300px" }}
              >
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-4 py-3">
                      Health condition
                    </th>

                    <th scope="col" class="px-4 py-3">
                      Is eligible ?
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {eligibility.map((item, index) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={index}
                    >
                      <td
                        scope="row"
                        className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xs"
                      >
                        {item.health_condition_name}
                      </td>

                      <td
                        scope="row"
                        className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white text-xs"
                      >
                        <input
                          onChange={(e) => {
                            setEligibility(
                              eligibility.map((innerItem, innerIndex) => {
                                if (innerIndex === index) {
                                  return {
                                    ...innerItem,
                                    is_eligible: e.target.checked,
                                  };
                                }
                                return innerItem;
                              })
                            );
                          }}
                          id={`bordered-checkbox-${index}`}
                          type="checkbox"
                          checked={item.is_eligible}
                          name={`bordered-checkbox-${index}`}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor={`bordered-checkbox-${index}`}
                          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          {item.is_eligible ? "Yes" : "No"}
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              disabled={loading}
              onClick={eligibilityUpdate}
              type="submit"
              className="text-white mt-8 mb-8 float-right bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {loading ? (
                <svg
                  aria-hidden="true"
                  class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
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
                "Save"
              )}
            </button>
          </>
        </ModalComponent>
      ) : (
        ""
      )}
    </>
  );
};

export default Brand;

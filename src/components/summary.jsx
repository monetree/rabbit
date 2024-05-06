import { useEffect, useState } from "react";
import {
  createCustomTreatment,
  fetchCustomBrands,
  fetchSummary,
  getHealthConditions,
} from "../apis/api";
import ModalComponent from "./modal";

const Summary = () => {
  const [summary, setSummary] = useState({});
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState(false);
  const [medicalCondition, setMedicalCondition] = useState("");
  const [treatment, setTreatment] = useState("");
  const [clinicalRationale, setClinicalRationale] = useState("");
  const [healthCondition, setHealthCondition] = useState("");
  const [healthConditions, setHealthConditions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCustomBrands = async () => {
    try {
      const res = await fetchCustomBrands();
      setBrands(res.data);
    } catch {}
  };

  const fetchHealthConditions = async () => {
    const res = await getHealthConditions();
    setHealthConditions(res.data);
  };

  const getSummary = async () => {
    try {
      const res = await fetchSummary();
      setSummary(res.data);
    } catch {}
  };

  const createTreatment = async () => {
    try {
      setLoading(true);
      const payload = {
        brand_id: brand.id,
        health_condition_id: healthCondition,
        medical_condition: medicalCondition,
        treatment: treatment,
        clinical_rationale: clinicalRationale,
        user_id: brand.user_id,
      };
      await createCustomTreatment(payload);
    } catch {
    } finally {
      setLoading(false);
      setBrand(false);
      getCustomBrands();
    }
  };

  useEffect(() => {
    getSummary();
    getCustomBrands();
    fetchHealthConditions();
  }, []);

  return (
    <>
      <div className="flex space-x-8 mt-4">
        <div>
          <a
            href="#"
            class="block max-w-sm w-60 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {summary?.total_users}
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
              ${summary?.total_revenue}
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
              {summary?.total_lmn}
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
              {summary?.total_reimbursements}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Total reimbursement
            </p>
          </a>
        </div>
      </div>

      <div className="mt-8">
        <h3>Custom lmns</h3>
        <table class="w-full mt-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-4 py-2">
                Username
              </th>
              <th scope="col" class="px-4 py-3">
                Brand
              </th>
              <th scope="col" class="px-4 py-3">
                Status
              </th>

              <th scope="col" class="px-4 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {brands.map((item, index) => (
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <td
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.user_full_name}
                </td>
                <td
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </td>
                <td
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.is_active ? "Active" : "In-Active"}
                </td>

                <td
                  scope="row"
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <button
                    onClick={() => setBrand(item)}
                    type="button"
                    class="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Create LMN
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {brand ? (
          <ModalComponent setIsModal={setBrand}>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
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

              <div className="mb-5">
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
                  value={medicalCondition}
                  onChange={(e) => setMedicalCondition(e.target.value)}
                ></textarea>
              </div>

              <div className="mb-5">
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
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                ></textarea>
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
                  value={clinicalRationale}
                  onChange={(e) => setClinicalRationale(e.target.value)}
                ></textarea>
              </div>

              <button
                onClick={createTreatment}
                disabled={loading}
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
      </div>
    </>
  );
};

export default Summary;

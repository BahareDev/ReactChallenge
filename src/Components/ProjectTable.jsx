// import React, { useContext } from "react";

import { data } from "autoprefixer";

export default function ProjectTable({ projects }) {
  const dateOptions = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-right ltr:text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                عنوان پروژه
              </th>
              <th scope="col" className="px-6 py-3">
                بودجه
              </th>
              <th scope="col" className="px-6 py-3">
                ددلاین
              </th>
              <th scope="col" className="px-6 py-3">
                وضعیت
              </th>

              <th scope="col" className="px-6 py-3">
                عملیات
              </th>
            </tr>
          </thead>

          <tbody>
            {projects.map((item) => (
              <>
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{item._id}</td>
                  <td className="px-6 py-4">{item.title}</td>
                  <td className="px-6 py-4">{item.budget}</td>
                  <td className="px-6 py-4">
                    {new Date(item.deadline).toLocaleDateString(
                      "fa",
                      dateOptions
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {item.status === "CLOSED" ? (
                      <span className="bg-red-600 text-white px-4 py-2 rounded-full">
                        بسته
                      </span>
                    ) : (
                      <span className="bg-green-600 text-white px-4 py-2 rounded-full">
                        باز
                      </span>
                    )}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

{
  /* <ul>
        {projects.map((item) => (
          <li key={item._id}>{item.title}</li>
        ))}
      </ul> */
}

import React, { Component } from "react";

class Service extends Component {
  render() {
    return (
      <div class="overflow-x-auto relative">
        <div className="text-gray-700  hover:text-blue-600 pl-[30px] mt-[40px] mb-[20px]">
          <h3>
            <a href="/Customer">
              <b>Dashboard</b>
            </a>
          </h3>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                Service name
              </th>
              <th scope="col" class="py-3 px-6">
                Type
              </th>
              <th scope="col" class="py-3 px-6">
                Category
              </th>
              <th scope="col" class="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Brake system"
              </th>
              <td class="py-4 px-6">ABS</td>
              <td class="py-4 px-6">Single</td>
              <td class="py-4 px-6">$2999</td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Body works
              </th>
              <td class="py-4 px-6">Full</td>
              <td class="py-4 px-6">Bonnet</td>
              <td class="py-4 px-6">$1999</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Windshield
              </th>
              <td class="py-4 px-6">fortified glass</td>
              <td class="py-4 px-6">front</td>
              <td class="py-4 px-6">$990</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Service;

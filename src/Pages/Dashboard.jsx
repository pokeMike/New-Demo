// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavbarWithSearch from '../Components/NavbarWithSearch';
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const Dashboard = () => {
    // Chart data for sales over time
    const chartData = {
      labels: [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
      ],
      datasets: [
        {
          label: "Sales",
          data: [
            1200, 1900, 3000, 5000, 2300, 3400, 2500,
            4100, 3200, 4500, 2900, 3600
          ],
          borderColor: "rgb(16 185 129)", // emerald-600
          backgroundColor: "rgba(16, 185, 129, 0.2)", // emerald-600 with transparency
          fill: true,
        },
      ],
    };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  // Mock data for latest customers 
  const latestCustomers = [
    { name: "John Doe", amount: "$300" },
    { name: "Jane Smith", amount: "$450" },
    { name: "Alice Johnson", amount: "$150" },
    { name: "Michael Brown", amount: "$500" },
  ];

  // Mock data for top products
  const topProducts = [
    { product: "Product A", sales: 150 },
    { product: "Product B", sales: 200 },
    { product: "Product C", sales: 120 },
    { product: "Product D", sales: 180 },
  ];

  // Mock data for transactions
  const transactions = [
    {
      transaction: "TRX001",
      date: "2024-08-01",
      time: "10:00 AM",
      amount: "$120.00",
      status: "Completed",
    },
    {
      transaction: "TRX002",
      date: "2024-08-02",
      time: "11:30 AM",
      amount: "$250.00",
      status: "Pending",
    },
    {
      transaction: "TRX003",
      date: "2024-08-03",
      time: "02:15 PM",
      amount: "$80.00",
      status: "Failed",
    },
  ];

  return  (
    <div className="w-full">
      <NavbarWithSearch />
      <div className="p-4 space-y-8">
        {/* Sales Chart */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-black text-xl font-bold mb-4">Sales</h2>
          <div className="w-full max-h-[500px]">
            <Line data={chartData} options={chartOptions} />
            </div>
        </div>

        {/* Latest Customers and Top Products */}
        <div className="flex space-x-4">
          {/* Latest Customers */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-black text-xl font-bold mb-4">
              Latest Customers
            </h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-emerald-600">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {latestCustomers.map((customer, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black hover:cursor-pointer hover:text-emerald-600">
                      {customer.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                      {customer.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Top Products */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-black text-xl font-bold mb-4">Top Products</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-emerald-600">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Sales
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topProducts.map((product, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black hover:cursor-pointer hover:text-emerald-600">
                      {product.product}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                      {product.sales}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-black text-xl font-bold mb-4">Transactions</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-emerald-600">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Transaction
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider "
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black hover:cursor-pointer hover:text-emerald-600">
                    {transaction.transaction}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                    {transaction.time}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-black">
                    {transaction.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  latestCustomers: PropTypes.array,
  topProducts: PropTypes.array,
  transactions: PropTypes.array,
};

export default Dashboard;
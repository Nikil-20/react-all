import React, { useEffect } from "react";
import { useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Apifetch() {
  const [maindata, setmaindata] = useState([]);

  async function loadData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const res2 = await res.json();
    setmaindata(res2);
    useEffect(() => {
        setTimeout(() => {
          loadData();
        }, 1000);
      }, []);
  }

  

  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">API Fetch Example</h1>
      <div className="flex justify-center mb-4">
        <button
          onClick={loadData}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Load Data
        </button>
      </div>

      {maindata.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-2 px-4 text-left">ID</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Username</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Address</th>
              </tr>
            </thead>
            <tbody>
              {maindata.map((user, i) => (
                <tr key={i + 1} className="hover:bg-gray-100 transition">
                  <td className="py-2 px-4 border-b">{user.id}</td>
                  <td className="py-2 px-4 border-b">{user.name}</td>
                  <td className="py-2 px-4 border-b">{user.username}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">
                    {user.address.city}, {user.address.street}, {user.address.zipcode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center mt-6">
          <Skeleton count={15} width={800} />
        </div>
      )}
    </div>
    </>
  );
}

export default Apifetch;

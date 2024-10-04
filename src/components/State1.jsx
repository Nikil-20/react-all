import React from 'react';
import { useState } from 'react';


function State1() {
  const [count, setCount] = useState(0);

  function incre() {
    setCount(count + 1);
  }

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-slate-50 ">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Count: {count}</h1>
        <button
          onClick={incre}
          className="bg-blue-500 text-white text-lg font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Add
        </button>
      </div>
    </div>
    </>
  );
}

export default State1;

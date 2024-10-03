import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function ProductFetching() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  async function fetchData() {
    const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
    const result = await response.json();
    setProducts(result);
    setLoading(false); // Set loading to false once data is fetched
    console.log("products = ", result);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <div className="container mx-auto p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">Jewelry Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          // Show skeletons while loading
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm w-full">
                <Skeleton height={192} className="rounded-t-lg" />
                <div className="p-6">
                  <Skeleton count={2} height={24} />
                  <Skeleton height={30} width={80} className="mt-4" />
                </div>
              </div>
            </div>
          ))
        ) : (
          // Display products after loading
          products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 max-w-sm w-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 text-center">
                    {product.title}
                  </h2>
                  <p className="text-gray-600 text-sm text-center mb-4">
                    {product.description.length > 100 ? `${product.description.substring(0, 100)}...` : product.description}
                  </p>
                  <p className="text-lg font-semibold text-gray-800 text-center mb-4">
                    {`$${product.price}`}
                  </p>

                  <div className="flex justify-between items-center space-x-2 mb-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors flex items-center justify-center w-full">
                      Like
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center justify-center w-full">
                      Add to Cart
                    </button>
                  </div>

                  <div className="mt-4">
                    <button className="bg-red-500 text-white px-5 py-2 w-full rounded-full hover:bg-red-600 transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </>
  );
}

export default ProductFetching;

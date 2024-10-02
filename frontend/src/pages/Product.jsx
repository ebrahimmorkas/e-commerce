import React, { useContext, useEffect, useState } from 'react';
import herocomponentimage from '../assets/images/herocomponentimage.png'; // Add the actual image path
import ShopContext from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const { productID } = useParams();
  const { products, updateCartProducts } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true)
  const [size, setSize] = useState(null)

  const setProductSize = (sizeValue) => {
    console.log(sizeValue)
    setSize(sizeValue)
  }

  const addToCart = () => {
    if(size) {
      // Size state is null
      console.log("State is set")
      setSize(null)
      updateCartProducts(product)
      toast("Added to cart")
    }
    else {
      // Size state is set
      console.log("State is not set")
      toast("Select the size")
    }
  }

  useEffect(() => {
    if (products.length > 0) {
      const selectedProduct = products.find((prod) => prod.id == productID);
      if (selectedProduct) {
        setProduct(selectedProduct);
        setLoading(false)
      }
    }
  }, [products, productID]);

  return (
    <div className="container mx-auto flex py-8">
      {/* Left section with 4 images */}
      <div className="w-[30%] flex flex-col space-y-4">
        <img src={herocomponentimage} alt="Product Image 1" className="w-full h-[150px] object-cover" />
        <img src={herocomponentimage} alt="Product Image 2" className="w-full h-[150px] object-cover" />
        <img src={herocomponentimage} alt="Product Image 3" className="w-full h-[150px] object-cover" />
        <img src={herocomponentimage} alt="Product Image 4" className="w-full h-[150px] object-cover" />
      </div>

      {/* Right section */}
      <div className="w-[70%] flex px-4 space-x-4">
        {product ? (
          <>
            <div className="flex flex-col w-[40%]">
              <div className="h-[70%]">
                <img src={herocomponentimage} alt="Main Product Image" className="w-full h-full object-contain" />
              </div>
              <div className="h-[30%] flex items-start justify-center mt-2">
                <h2 className="text-xl font-bold">{product.name}</h2>
              </div>
            </div>

            <div className="w-[30%] space-y-4">
              <p className="text-gray-700 my-10">{product.description}</p>
              <p className="text-2xl font-bold">{`$ ${product.price}`}</p>
              <div className="flex space-x-2 container my-10">
                <button onClick={(event) => {setProductSize(event.target.textContent)}} className="border border-gray-300 px-4 py-2 w-[100px]">S</button>
                <button onClick={(event) => {setProductSize(event.target.textContent)}} className="border border-gray-300 px-4 py-2 w-[100px]">M</button>
                <button onClick={(event) => {setProductSize(event.target.textContent)}} className="border border-gray-300 px-4 py-2 w-[100px]">L</button>
                <button onClick={(event) => {setProductSize(event.target.textContent)}} className="border border-gray-300 px-4 py-2 w-[100px]">XL</button>
              </div>
              <button onClick={addToCart} className="bg-black text-white px-4 py-2 w-[420px] rounded-md">Add to Cart</button>
            </div>
          </>
        ) : (
<Spinner />
        )}
      </div>
    </div>
  );
};

export default Product;

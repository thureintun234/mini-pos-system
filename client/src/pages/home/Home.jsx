import React from 'react';
import Navbar from '../../components/home/Navbar';

import './home.scss';
import CategoryButtons from '../../components/home/CategoryButtons';
import Products from '../../components/home/products/Products';
import { useState } from 'react';
import Checkout from '../../components/home/checkout/Checkout';
import { useEffect } from 'react';
import { getAll, setToken } from '../../api/product';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();
  const filteredProducts = products.filter((product) => {
    if (selectedCategory === 'all') return products;
    return product.category === selectedCategory;
  });
  const [search, setSearch] = useState('');

  const handleChangeCategory = (name) => {
    setSelectedCategory(name);
  };

  // check if authenticated
  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loginToken');
    if (!loggedUser) {
      navigate('/auth');
    } else {
      const data = JSON.parse(loggedUser);
      setToken(data?.token);
    }
  }, []);

  const removeDuplicateCategories = (arr) => {
    return arr.filter((category, index) => arr.indexOf(category) == index);
  };

  // get all products
  useEffect(() => {
    getAll().then((res) => {
      setProducts(res);

      // filter duplicate category name
      const categories = res.map((product) => product.category);
      const filteredCategory = removeDuplicateCategories(categories);
      setCategories(filteredCategory);
    });
  }, []);

  // adding products to checkout
  const handleSelect = (id) => {
    const findSelectedProduct = products.find((product) => product._id === id);

    const isNewSelectedProduct = selectedProducts.some(
      (p) => p._id === findSelectedProduct._id
    );
    if (isNewSelectedProduct) {
      const currentSelectedProduct = selectedProducts.find((p) => p._id === id);
      const updatedSelectedProducts = selectedProducts.map((product) =>
        product._id === findSelectedProduct._id
          ? { ...findSelectedProduct, count: currentSelectedProduct.count + 1 }
          : product
      );

      setSelectedProducts(updatedSelectedProducts);
    } else {
      setSelectedProducts([
        ...selectedProducts,
        { ...findSelectedProduct, count: 1 },
      ]);
    }
  };

  const handleRemove = (id) => {
    const removeProduct = selectedProducts.filter(
      (product) => product._id !== id
    );
    setSelectedProducts(removeProduct);
  };

  const toggleCheckout = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleAddButton = (item) => {
    const updatedSelectedProducts = selectedProducts.map((product) =>
      product._id === item._id ? { ...item, count: item.count + 1 } : product
    );
    setSelectedProducts(updatedSelectedProducts);
  };

  const handleRemoveButton = (item) => {
    if (item.count === 1) {
      handleRemove(item._id);
      return;
    }
    const updatedSelectedProducts = selectedProducts.map((product) =>
      product._id === item._id ? { ...item, count: item.count - 1 } : product
    );
    setSelectedProducts(updatedSelectedProducts);
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = (category) => {
    console.log(category);
    getAll(category).then((res) => setProducts(res));
  };

  const onOrder = () => {
    toast.success('Order Completed');
    setSelectedProducts([]);
    setIsOpen(false);
  };

  return (
    <div className='container'>
      <ToastContainer />
      <div className='home'>
        <Navbar
          itemAdded={selectedProducts.length}
          onToggle={toggleCheckout}
          isOpen={isOpen}
          search={search}
          onChange={onChangeSearch}
          onSearch={onSearch}
        />
        <CategoryButtons
          categories={categories}
          selectedCategory={selectedCategory}
          onClick={handleChangeCategory}
        />
        <Products products={filteredProducts} onSelect={handleSelect} />
      </div>

      {isOpen && (
        <Checkout
          selectedItems={selectedProducts}
          handleRemove={handleRemove}
          closeModal={closeModal}
          onAdd={handleAddButton}
          onRemove={handleRemoveButton}
          onOrder={onOrder}
        />
      )}
    </div>
  );
};

export default Home;

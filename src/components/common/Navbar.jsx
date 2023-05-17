import { useState, useEffect, useContext } from 'react';
import "../../styles/Navbar.scss";
import {Link} from "react-router-dom";
// react icons
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { BsSearch, BsCaretDownFill } from "react-icons/bs";
import {HiShoppingBag} from "react-icons/hi";
import { AiOutlineBars } from "react-icons/ai";
// contexts
import { CategoryContext } from '../../context/categoryContext';
import { BasketContext } from '../../context/basketContext';
import { AuthContext } from '../../context/authContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const {categories} = useContext(CategoryContext);
  const [showCategory, setShowCategory] = useState(false);
  const { getBasketTotal, itemsCount, totalAmount, dispatch: basketDispatch, basket } = useContext(BasketContext);
  const { authData, logout, dispatch:authDispatch } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleCategory = () => {
    setShowCategory(prevData => !prevData);
  }

  const handleSearchTerm = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  const notify = () => toast("You are logged out!")

  useEffect(() => {
    getBasketTotal(basketDispatch);
    // eslint-disable-next-line
  }, [basket]);

  return (
    <nav className='navbar'>
      <div className='navbar-top bg-secondary flex align-center'>
        <div className='container w-100 flex align-center justify-end'>
          {
            authData.isLoggedIn ? 
            <Link to = "/account" className='flex mx-4 align-center justify-end text-dark mx-4'>
              <FaUser size = {14} />
              <span className='mx-2 fs-13 text-uppercase ls-1'>{authData.info.firstName}</span>
            </Link>
            : 
            <Link to = "login" className='mx-4 login-btn flex align-center justify-end text-dark'>
              <FaUser size = {14} />
              <span className='mx-2 fs-13 text-uppercase ls-1'>Login</span>
            </Link>
          }

          <button type = "button" onClick = { () => logout(authDispatch) } className='flex align-center justify-end text-dark'>
            <FiLogOut size = {14} />
            <span className='mx-2 fs-13 text-uppercase ls-1' onClick={ notify }>logout</span>
          </button>
        </div>
      </div>

      <div className='navbar-main bg-primary'>
        <div className='container'>
          <div className='navbar-main-top flex align-center justify-between'>
            <Link to = "/" className='navbar-brand'>
              <span className='text-yellow fs-26 fw-6'>Black</span>
              <span className='text-white fs-26 fw-6'>Friday.</span>
            </Link>

            <form className='navbar-search-form'>
              <div className='input-group bg-white'>
                <input type = "text" placeholder='Search for Product, Brand or Category' className='form-control' onChange={(event) => handleSearchTerm(event)} />
                <Link to = {`search/${searchTerm}`} className='btn btn-primary flex align-center text-white px-3'>
                  <BsSearch size = {15} />
                  <span className='fs-15 mx-2'>Search</span>
                </Link>
              </div>
            </form>

            <div className='navbar-basket text-white flex align-center'>
              <Link to = "/basket" className='basket-btn'>
                <HiShoppingBag size = {29} />
                <span className='basket-count flex align-center justify-center'>{ authData.isLoggedIn ? itemsCount : "0" }</span>
              </Link>
              <div className='text-end basket-count'>
                <p className='text-uppercase fs-14'>my cart</p>
                <Link to = "/basket" className='fw-7'>$ &nbsp; 
                  <span className = "basket-amount">{ authData.isLoggedIn ? totalAmount : "0" }</span>
                </Link>
              </div>
            </div>
          </div>

          <div className='navbar-main-bottom flex align-center justify-between'>
            <div className = "navbar-cats-wrapper">
              <div className='navbar-cats-btn flex align-center text-white px-2 py-2' onClick={toggleCategory}>
                <AiOutlineBars />
                <span className = "text-uppercase mx-3 fs-13">all categories</span>
                <BsCaretDownFill />
              </div>

              <ul className={`category-list ${showCategory ? 'show-category-list' : ''}`} onClick = {toggleCategory}>
                  {
                    categories.map((category, idx) => {
                      return (
                        <li className='category-item' key = {idx}>
                          <Link to = {`category/${category}`} className='category-item-link text-uppercase text-dark fs-12'>{category?.replace("-", " ")}</Link>
                        </li>
                      )
                    })
                  }
              </ul>
            </div>
            
            <ul className = "navbar-nav flex align-center">
              {
                categories.slice(0, 6).map((category, idx) => {
                  return (
                    <li className='nav-item' key = {idx}>
                      <Link to = {`category/${category}`} className='nav-link no-wrap'>{category.replace("-", " ")}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>

      <ToastContainer />
    </nav>
  )
}

export default Navbar;
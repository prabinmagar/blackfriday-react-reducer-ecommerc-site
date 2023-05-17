import {useContext, useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import images from '../../utils/images';
import "../../styles/ProductSinglePage.scss";
import { calculateDiscountedPrice, formatPrice } from '../../utils/helpers';
import { AiOutlineMinus, AiOutlinePlus, AiFillCheckCircle, AiOutlineStar } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { ProductContext } from '../../context/productContext';
import { BasketContext } from '../../context/basketContext';
import { AuthContext } from '../../context/authContext';

const ProductSinglePage = () => {
  const {id} = useParams();
  const { getSingleProduct, dispatch: productDispatch, singleProduct } = useContext(ProductContext);
  const [previewImg, setPreviewImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToBasket, setBasketMsgOn, setBasketMsgOff, dispatch: basketDispatch, basketMsgStatus } = useContext(BasketContext);
  const { authData } = useContext(AuthContext);

  const increaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty + 1;
      if(tempQty > singleProduct?.stock) tempQty = singleProduct?.stock;
      return tempQty;
    });
  }

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      let tempQty = prevQty - 1;
      if(tempQty < 1) tempQty = 1;
      return tempQty;
    });
  }

  useEffect(() => {
    setBasketMsgOff(basketDispatch);
    getSingleProduct(productDispatch, id);
    // eslint-disable-next-line
  }, [id]);

  const basketHandler = (product) => {
    let discountedPrice = calculateDiscountedPrice(product?.price, product?.discountPercentage);
    let totalPrice = quantity * discountedPrice;
    addToBasket(basketDispatch, {...product, quantity: quantity, totalPrice, discountedPrice, checkoutStatus: false});
    setBasketMsgOn(basketDispatch);
  }

  return (
    <main className='bg-secondary'>
      {/* shopping basket alert */}
      <div className={`basket-alert ${basketMsgStatus ? "show" : ""}`}>
        <div className='alert-content'>
          <div className='alert-msg grid px-4'>
            <AiFillCheckCircle size = {20} className = "text-lime"/>
            <p className='fs-13'>A new item has been added to your Shopping Cart. You now have 1 items in your Shopping Cart.</p>
          </div>
          <div className='basket-alert-btns px-4 py-4'>
            <button type = "button" className='alert-close-btn' onClick={() => setBasketMsgOff(basketDispatch) }>
              <MdCancel size = {22} className='text-dark' />
            </button>
            <Link to = "/basket" className='alert-btn fs-13 text-white bg-primary'>View Shopping Cart</Link>
            <Link to = "/home" className='alert-btn fs-13 text-primary'>Continue Shopping</Link>
          </div>
        </div>
      </div>
      {/* end of shopping basket alert */}
      <div className='container'>
        <div className='sc-wrapper py-5'>
          <div className='product-s bg-white grid'>
            <div className='product-s-img'>
              <div className='img-preview py-5'>
                <div className='img-preview-zoom'>
                  <img src = {singleProduct?.images ? singleProduct.images[previewImg] ? singleProduct.images[previewImg]: images.no_image : images.no_image} alt = {singleProduct?.title} className = "img-cover" />
                </div>
                <div className='img-preview-collection flex justify-center'>
                  {
                    singleProduct?.images?.map((image, idx) => {
                      return (
                        <div className= {`collection-item ${previewImg === idx ? "collection-item-active" : ""}`} key = {idx} onClick = {() => setPreviewImg(idx)}>
                          <img src = { image ? image : images.no_image } alt = {singleProduct?.title} className = "img-cover" />
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='product-s-details py-5'>
              <div className='title fw-6 fs-16 px-3 py-1'>{singleProduct?.title}</div>
              <p className='description fs-14'>{singleProduct?.description}</p>
              <div className='rating my-2 flex align-center'>
                <AiOutlineStar size = {16} className='text-yellow' />
                <span className='mx-1 fs-13'>{singleProduct?.rating}</span>
              </div>
              <div className='price flex align-center'>
                <span className='discounted-price fs-20 fw-7'>
                  {
                    (singleProduct?.price && singleProduct?.discountPercentage) ? formatPrice(calculateDiscountedPrice(singleProduct.price, singleProduct.discountPercentage)) : 0
                  }
                </span>
                <span className='actual-price text-dark mx-3'>{formatPrice(singleProduct?.price)}</span>
                <span className='discounted-percent text-primary fs-12'>{singleProduct?.discountPercentage}%</span>
              </div>

              <div className='quantity py-3'>
                <h5 className='fw-4'>Quantity:</h5>
                <div className='quantity-toggle flex'>
                  <button className='qty-dec flex align-center justify-center' onClick={() => decreaseQty()}>
                    <AiOutlineMinus size = {14} />
                  </button>
                  <div className='qty-value flex align-center justify-center fs-14 mx-2'>{quantity}</div>
                  <button className='qty-inc flex align-center justify-center' onClick={() => increaseQty()}>
                    <AiOutlinePlus size = {14} />
                  </button>
                </div>
              </div>

              <div className='info py-1 flex flex-wrap align-center'>
                <div className='fs-13'>
                  <span className='fw-6'>Brand:</span> 
                  <span className='px-1'>{singleProduct?.brand}</span>
                </div>
                <div className='fs-13 mx-3'>
                  <span className='fw-6'>Category:</span> 
                  <span className='px-1'>{singleProduct?.category}</span>
                </div>
              </div>

              <div className='shop-btns'>
                <Link to = "/login" className='buy-btn shop-btn fs-14'>Buy Now</Link>
                {
                  authData.isLoggedIn ? <button className='add-to-cart-btn shop-btn fs-14' onClick={() => basketHandler(singleProduct)}>Add to Cart</button> : <Link to = "login" className='add-to-cart-btn shop-btn fs-14'>Add to Cart</Link>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductSinglePage
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { BsTrash } from "react-icons/bs";
import { formatPrice } from '../../utils/helpers';
import "../../styles/BasketPage.scss";
import { BasketContext } from '../../context/basketContext';
import PropTypes from 'prop-types';
import { useContext } from 'react';

const BasketItem = ({ item }) => {
    const { 
        dispatch: basketDispatch, 
        addQtyItem, 
        minusQtyItem, 
        removeFromBasket,
        addToCheckout,
        removeFromCheckout,
    } = useContext(BasketContext);

    const singleCheckoutHandler = (event) => {
        if(event.target.checked){
            addToCheckout(basketDispatch, item?.id);
        } else {
            removeFromCheckout(basketDispatch, item?.id);
        }
    }

    return (
        <div className='basket-list-item grid px-3 py-3' key = {item.id}>
            <div className='checkbox-item py-3'>
                <div className='checkbox-icon'>
                <input type = "checkbox" className='form-control' onChange = { singleCheckoutHandler} checked = { item.checkoutStatus} />  
                </div>
            </div>

            <div className='basket-list-item-info grid'>
                <div className='item-info-img'>
                <img src = {item?.thumbnail} alt = {item?.title} className = "img-cover" />
                </div>
                <div className='item-info-details py-2'>
                <div className='item-info-details-top'>
                    <h4>{item?.title}</h4>
                    <button type = "button" className='remove-btn' onClick = {() => removeFromBasket(basketDispatch, item.id) }>
                    <BsTrash />
                    </button>
                </div>

                <div className='flex align-center flex-wrap py-1'>
                    <span className='fs-13 text-dark'>Brand: {item?.brand}</span>
                    <span className='mx-3 fs-13 text-dark'>Category: {item?.category}</span>
                </div>

                <div className='flex align-center justify-between'>
                    <span className='fw-7 fs-17 text-yellow'>${item?.price}</span>
                    <div className='quantity'>
                    <div className='quantity-toggle flex'>
                        <button className={`qty-dec flex align-center justify-center ${ item?.quantity === 1 ?'active' : ""}`} onClick={() => minusQtyItem(basketDispatch, item?.id) }>
                        <AiOutlineMinus size = {14} />
                        </button>
                        <div className='qty-value flex align-center justify-center fs-14 mx-2'>{item?.quantity}</div>
                        <button className={`qty-inc flex align-center justify-center ${ item?.quantity === item?.stock ? 'active' : ""}`} onClick={() => addQtyItem(basketDispatch, item?.id)}>
                        <AiOutlinePlus size = {14} />
                        </button>
                    </div>
                    </div>
                </div>
                
                <div className='fs-14'>
                    <span className='fw-6'>Total: </span> 
                    {formatPrice(item?.totalPrice)}
                </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem

BasketItem.propTypes = {
    item: PropTypes.object
}
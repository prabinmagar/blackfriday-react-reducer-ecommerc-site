import { useContext, useEffect } from 'react';
import { BasketContext } from '../../context/basketContext';
import "../../styles/BasketPage.scss";
import { FaHourglassEnd } from "react-icons/fa";
import { PaymentMethods, BasketItem, CheckoutSummary } from '../../components/common';

const BasketPage = () => {
  const { 
    basket, 
    clearBasket, 
    dispatch: basketDispatch, 
    getCheckoutTotal,
    checkoutTotal,
    checkoutCount,
    setCheckoutAll,
    unsetCheckoutAll, 
    checkoutAll
  } = useContext(BasketContext);

  const checkallHandler = (event) => {
    if(event.target.checked){
      setCheckoutAll(basketDispatch);
    } else {
      unsetCheckoutAll(basketDispatch);
    }
  }

  useEffect(() => {
    getCheckoutTotal(basketDispatch);
  }, [basket]);

  if(basket.length === 0){
    return (
      <main className='bg-secondary'>
        <div className='container'>
          <div className = "sc-wrapper py-4 flex align-center justify-center">
            <FaHourglassEnd />
            <h3 className='mx-2'>No items found in the cart.</h3>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className='bg-secondary'>
      <div className='container'>
        <div className='sc-wrapper'>
          <div className='basket grid'>
            {/* basket left */}
            <div className='basket-l py-4'>
              <div className='basket-top bg-white py-3 px-4'>
                <h2>Shopping Cart <span className='text-primary'>(2)</span></h2>

                <div className='flex align-center justify-between'>
                  <div className='checkbox-item flex py-3'>
                    <div className='checkbox-icon flex align-center'>
                      <input type = "checkbox" className='form-control' id = "checkall" onChange={ checkallHandler } checked = { checkoutAll } />  
                    </div>
                    <p className='form-text'>Select all items</p>
                  </div>
                  <button type = "button" className='fw-7 fs-16 text-primary' onClick={() => clearBasket(basketDispatch)}>Delete</button>
                </div>
              </div>

              <div className='basket-list bg-white my-3'>
                {
                  basket.map(basketItem => {
                    return (
                      <BasketItem item = { basketItem } key = { basketItem.id } />
                    )
                  })
                }
              </div>
            </div>
            {/* basket right */}
            <div className='basket-r py-4'>
              <CheckoutSummary checkoutCount = { Number(checkoutCount) } checkoutTotal = { Number(checkoutTotal) } />
              <PaymentMethods />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BasketPage
import PropTypes from 'prop-types';

const CheckoutSummary = ({ checkoutCount, checkoutTotal }) => {
  return (
    <div className='summary bg-white py-3 px-4'>
        <h2>Summary</h2>
        <div className='flex align-center justify-between my-2'>
            <p className='fw-6'>Total</p>
            <p className='fw-6 fs-24'><span className='fw-7 text-yellow'>US</span> ${ checkoutTotal }</p>
        </div>
        <button type = "button" className='checkout-btn my-2 fw-6'>Checkout ({ checkoutCount })</button>
    </div>
  )
}

export default CheckoutSummary;

CheckoutSummary.propTypes = {
    checkoutCount: PropTypes.number,
    checkoutTotal: PropTypes.number
}

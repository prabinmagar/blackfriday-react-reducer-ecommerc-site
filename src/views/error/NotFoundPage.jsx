import images from '../../utils/images';
import "../../styles/NotFoundPage.scss";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <div className='page-not-found bg-white py-5'>
        <div className='container flex flex-column align-center justify-center text-center'>
          <img src = {images.cart} alt = "page not found" className='page-not-found-img' />
          <div>
            <h3>Sorry, we can&apos;t find the page.</h3>
            <p className='fs-13 py-2 text-dark'>But we still have lots for you to discover ~</p>
            <Link to = "/" className='btn-back-to-home'>Back to Homepage</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFoundPage
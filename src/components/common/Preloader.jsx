import images from '../../utils/images';
import "../../styles/Preloader.scss";

const Preloader = () => {
  return (
    <div className='preloader'>
      <div className='container flex align-center justify-center'>
        <img src = {images.loader} alt = "preloader" className='preloader-img' />
      </div>
    </div>
  )
}

export default Preloader;
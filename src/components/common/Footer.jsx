import { AiFillAndroid, AiFillApple, AiFillAppstore } from "react-icons/ai";
import "../../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content py-4'>
          <div className='app-links flex justify-center'>
            <div className = "app-link flex align-center justify-center">
              <AiFillAndroid className='app-link-icon text-white' size = {22} />
              <span className='app-link-text mx-2 text-white fw-6'>Google Play</span>
            </div>
            <div className='app-link flex align-center justify-center'>
              <AiFillApple className='app-link-icon text-white' size = {22} />
              <span className='app-link-text mx-2 text-white fw-6'>App Store</span>
            </div>
            <div className='app-link flex align-center justify-center'>
              <AiFillAppstore className='app-link-icon text-white' size = {22} />
              <span className='app-link-text mx-2 text-white fw-6'>App Gallery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
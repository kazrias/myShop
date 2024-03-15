import './HeaderStyle.css'
import logo from '../../images/logo.png'
import { CartBtn } from '../CartBtn/CartBtn'
import { FavBtn } from '../FavBtn/FavBtn'
import { Link } from 'react-router-dom'
import user from '../../images/user128.svg'
export const Header = ({ onClickOverlay, total, onClickAnyList, cartCount, onClickCart }) => {

  const onClickList = () => {
    onClickAnyList()
    onClickOverlay()
  }
  return (

    <header className='header'>
      <Link onClick={onClickList} to='/' className='header-link' >
        <img className='header-logo' src={logo} alt="" />
        <span>Galactus</span>
      </Link>
      <div className="header-btns">
        <Link onClick={onClickList} to='/orders' className="header-orders header-btn">
          <svg className='header-fav__btn header-btn--shadow' width="25px" height="25px" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M12.0002 8.79341L6.70373 6.67341H6.70473L11.9992 4.55342L17.2967 6.67341L12.0002 8.79341ZM20.3405 5.73101L12.3724 2.54177C12.1332 2.44604 11.8662 2.44604 11.627 2.54177L3.63058 5.74234C3.19743 5.9155 2.98743 6.31528 3.00058 6.70817V17.3286C3.00063 17.5289 3.06067 17.7247 3.17296 17.8906C3.28526 18.0566 3.44467 18.1851 3.63066 18.2596L11.6271 21.4602C11.7793 21.5212 11.9441 21.544 12.1072 21.5265C12.2086 21.5156 12.3074 21.4894 12.4003 21.449L20.3689 18.2596C20.5551 18.1852 20.7147 18.0567 20.8272 17.8908C20.9397 17.7248 20.9999 17.529 21 17.3285V6.67333C21 6.61264 20.9945 6.5523 20.9836 6.49301C20.9331 6.20788 20.7619 5.94217 20.4699 5.78885C20.4281 5.76652 20.3849 5.7472 20.3405 5.73101ZM5.00721 8.15548L7.36766 9.10025L10.997 10.5532L10.997 19.0472L5.00721 16.6493V8.15548ZM18.9934 8.15522L13.0036 10.5531L13.0036 19.0472L18.9934 16.6493V8.15522Z" ></path></svg>
          <span>Orders</span></Link>
        <Link to='/favorites'>
          <FavBtn onClickList={onClickList} />
        </Link>
        <CartBtn total={total} onClickCart={onClickCart} cartCount={cartCount} />
        <Link className="header-orders header-btn" to='/login'>
          <svg width="25px" height="25px" viewBox="0 0 20 20">
            <path className='header-fav__btn header-btn--shadow' fill='#fff' d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
          </svg>
          <span>Sign In</span>
        </Link>
      </div>
    </header>
  )
}
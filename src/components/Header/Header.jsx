import './Header.css'
import logo from '../../images/logo.png'
import cart from '../../images/icon_shopping_cart.svg'
export const Header = () => {

  return (

    <header className='header'>
      <a className='header-link' href="">
        <img className='header-logo' src={logo} alt="" />
        <span>Galactus</span>
      </a>
      <div className="header-btns">
        <button className='header-btn'>

          <svg className='header-fav__btn header-btn--shadow' width="80pt" height="80pt" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill="none" opacity="1.00" d=" M 0.00 0.00 L 80.00 0.00 L 80.00 80.00 L 0.00 80.00 L 0.00 0.00 M 6.59 15.61 C 3.64 21.71 4.73 28.87 7.05 34.99 C 11.85 47.41 21.13 57.33 30.40 66.59 C 33.63 69.87 36.69 73.44 40.78 75.70 C 50.80 65.37 61.86 55.72 69.21 43.17 C 72.50 37.30 75.60 30.89 75.44 24.00 C 75.56 18.90 73.47 13.74 69.70 10.29 C 64.05 5.12 55.18 3.97 48.32 7.27 C 44.77 8.92 42.39 12.13 40.03 15.11 C 38.27 12.85 36.57 10.46 34.24 8.73 C 25.51 2.10 11.25 5.72 6.59 15.61 Z" />
              <path fill="none" opacity="1.00" d=" M 9.77 18.65 C 12.49 10.56 22.85 7.31 30.23 10.88 C 34.88 13.75 37.21 18.96 40.08 23.39 C 43.18 18.61 45.64 12.53 51.34 10.32 C 56.49 8.74 62.76 9.32 66.78 13.19 C 70.37 16.35 71.94 21.36 71.41 26.04 C 70.77 31.84 68.02 37.12 65.04 42.04 C 58.40 52.83 49.21 61.70 40.07 70.35 C 30.95 61.33 21.43 52.44 14.66 41.42 C 10.61 34.69 7.74 26.53 9.77 18.65 Z" />
            </g>
            <g id="#010101ff">
              <path fill="#fff" opacity="1.00" d=" M 6.59 15.61 C 11.25 5.72 25.51 2.10 34.24 8.73 C 36.57 10.46 38.27 12.85 40.03 15.11 C 42.39 12.13 44.77 8.92 48.32 7.27 C 55.18 3.97 64.05 5.12 69.70 10.29 C 73.47 13.74 75.56 18.90 75.44 24.00 C 75.60 30.89 72.50 37.30 69.21 43.17 C 61.86 55.72 50.80 65.37 40.78 75.70 C 36.69 73.44 33.63 69.87 30.40 66.59 C 21.13 57.33 11.85 47.41 7.05 34.99 C 4.73 28.87 3.64 21.71 6.59 15.61 M 9.77 18.65 C 7.74 26.53 10.61 34.69 14.66 41.42 C 21.43 52.44 30.95 61.33 40.07 70.35 C 49.21 61.70 58.40 52.83 65.04 42.04 C 68.02 37.12 70.77 31.84 71.41 26.04 C 71.94 21.36 70.37 16.35 66.78 13.19 C 62.76 9.32 56.49 8.74 51.34 10.32 C 45.64 12.53 43.18 18.61 40.08 23.39 C 37.21 18.96 34.88 13.75 30.23 10.88 C 22.85 7.31 12.49 10.56 9.77 18.65 Z" />
            </g>
          </svg>
        </button>
        
        <button className='header-btn'>
          <svg className='header-cart__btn header-btn--shadow' width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3V1ZM4.22222 2L5.2026 1.80288C5.10872 1.33593 4.69852 1 4.22222 1V2ZM3.68629 4.40762C3.79515 4.94907 4.32233 5.29975 4.86378 5.19089C5.40523 5.08202 5.75591 4.55484 5.64705 4.01339L3.68629 4.40762ZM6.44444 12.0525C5.89216 12.0525 5.44444 12.5002 5.44444 13.0525C5.44444 13.6048 5.89216 14.0525 6.44444 14.0525V12.0525ZM17.5556 13.0525V14.0525C17.9336 14.0525 18.2793 13.8394 18.449 13.5016L17.5556 13.0525ZM22 4.21051L22.8935 4.65961C23.0493 4.34962 23.0333 3.98101 22.8512 3.68568C22.6691 3.39035 22.347 3.21051 22 3.21051V4.21051ZM4.66667 3.21051C4.11438 3.21051 3.66667 3.65822 3.66667 4.21051C3.66667 4.76279 4.11438 5.21051 4.66667 5.21051V3.21051ZM5.46406 13.2496C5.57293 13.7911 6.10011 14.1418 6.64156 14.0329C7.18301 13.924 7.53369 13.3969 7.42482 12.8554L5.46406 13.2496ZM5.64705 4.01339C5.53818 3.47194 5.011 3.12126 4.46955 3.23012C3.9281 3.33899 3.57742 3.86617 3.68629 4.40762L5.64705 4.01339ZM7.14968 13.7615C7.54123 13.372 7.54291 12.7388 7.15342 12.3473C6.76393 11.9557 6.13076 11.9541 5.73921 12.3436L7.14968 13.7615ZM3.89667 15.5869L3.19143 14.8779L3.89667 15.5869ZM17.5556 18.4735C18.1078 18.4735 18.5556 18.0258 18.5556 17.4735C18.5556 16.9213 18.1078 16.4735 17.5556 16.4735V18.4735ZM17.5556 17.4735H16.5556C16.5556 17.7397 16.6616 17.9948 16.8503 18.1825L17.5556 17.4735ZM19.7778 19.684L19.0725 20.393C19.2599 20.5794 19.5135 20.684 19.7778 20.684V19.684ZM8.66667 19.684L7.80179 19.1821C7.71328 19.3345 7.66667 19.5077 7.66667 19.684H8.66667ZM8.66667 21.8945H7.66667C7.66667 22.0709 7.71328 22.244 7.80179 22.3965L8.66667 21.8945ZM2 3H4.22222V1H2V3ZM3.24184 2.19712L3.68629 4.40762L5.64705 4.01339L5.2026 1.80288L3.24184 2.19712ZM6.44444 14.0525H17.5556V12.0525H6.44444V14.0525ZM18.449 13.5016L22.8935 4.65961L21.1065 3.7614L16.6621 12.6034L18.449 13.5016ZM22 3.21051H4.66667V5.21051H22V3.21051ZM7.42482 12.8554L5.64705 4.01339L3.68629 4.40762L5.46406 13.2496L7.42482 12.8554ZM5.73921 12.3436L3.19143 14.8779L4.6019 16.2958L7.14968 13.7615L5.73921 12.3436ZM3.19143 14.8779C1.85112 16.2111 2.81103 18.4735 4.68222 18.4735V16.4735C4.64208 16.4735 4.62553 16.4635 4.61734 16.4578C4.60473 16.4489 4.58938 16.4322 4.57888 16.407C4.56837 16.3817 4.56775 16.3602 4.57003 16.3471C4.57136 16.3395 4.57483 16.3228 4.6019 16.2958L3.19143 14.8779ZM4.68222 18.4735H17.5556V16.4735H4.68222V18.4735ZM18.5556 17.4735C18.5556 16.81 19.0978 16.263 19.7778 16.263V14.263C18.0032 14.263 16.5556 15.6954 16.5556 17.4735H18.5556ZM19.7778 16.263C20.4578 16.263 21 16.81 21 17.4735H23C23 15.6954 21.5524 14.263 19.7778 14.263V16.263ZM21 17.4735C21 18.1371 20.4578 18.684 19.7778 18.684V20.684C21.5524 20.684 23 19.2516 23 17.4735H21ZM20.483 18.9751L18.2608 16.7646L16.8503 18.1825L19.0725 20.393L20.483 18.9751ZM9.53154 20.186C9.80675 19.7119 10.3711 19.4771 10.9088 19.6204L11.4239 17.6878C10.0185 17.3133 8.53237 17.9233 7.80179 19.1821L9.53154 20.186ZM10.9088 19.6204C11.4456 19.7635 11.8134 20.2451 11.8134 20.7893H13.8134C13.8134 19.3325 12.8301 18.0627 11.4239 17.6878L10.9088 19.6204ZM11.8134 20.7893C11.8134 21.3335 11.4456 21.8151 10.9088 21.9582L11.4239 23.8907C12.8301 23.5159 13.8134 22.2461 13.8134 20.7893H11.8134ZM10.9088 21.9582C10.3711 22.1015 9.80675 21.8667 9.53154 21.3926L7.80179 22.3965C8.53237 23.6553 10.0185 24.2653 11.4239 23.8907L10.9088 21.9582ZM9.66667 21.8945V19.684H7.66667V21.8945H9.66667Z" fill="white" />
          </svg>
        </button>

      </div>
    </header>
  )
}
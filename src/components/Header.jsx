import { useState } from "react";
import Nav from "./Nav";

const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuState)
  }
  return (
    <>
    <header className='h72 sticky bgc-white otlb-grayd flex alignCenter justifyCenter'>
      <div className='contentWidth px40 flex justifyBetween alignCenter'>
        <div className='width100 flex alignCenter gap32'>
          <i className='i-menu bgc-black w28 h28 cursor' onClick={toggleMenu}/>
          <i className='i-logo bgc-primary w164 h32'/>
        </div>
        <div className='width100 flex alignCenter justifyCenter'>
          <ul className='menu'>
            <li className='menu-item'>
              ESSAY
              <div className='submenu'>
                <a href='#'> writer </a>
              </div>
            </li>
            <li className='menu-item'> NEWSLETTER </li>
            <li className='menu-item'> COLLABORATION </li>
            <li className='menu-item'> COMMUNITY </li>
            <li className='menu-item'> MYPAGE </li>
          </ul>
        </div>
        <div className='width100 flex alignCenter justifyEnd gap32'>
          <div className='flex alignCenter gap24'>
            <a href='#' className='size14 b txt-gray6'> LOGIN </a>
            <a href='#' className='size14 b txt-gray6'> SIGNUP </a>
          </div>
          <button className='contained primary large round'> 구독신청 </button>
        </div>
      </div>
    </header>
    {menuState && 
      <Nav 
        onClose={toggleMenu}
      />
    }
    </>
  )
}

export default Header;
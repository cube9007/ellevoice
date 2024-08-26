import { useState } from "react";
import SubscriptionImg from '../assets/images/subscription.png';
import InstagramImg from '../assets/images/instagram.svg';
import TwitterImg from '../assets/images/twitter.svg';
const Nav = ({onClose}) => {
  const MenuItem = ({title, item, arrow}) => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flexColumn gap12">
        <div className="flex alignCenter justifyBetween">
          <p className="size28 txt-gray1 cursor">{title}</p>
          {item && <i className={`${open ? 'i-minus' : 'i-plus'} bgc-gray9 w24 h24 cursor`} onClick={()=>{setOpen(!open)}}/>}
          {arrow && <i className="i-arrow-right bgc-gray9 w24 h24 cursor"/>}
        </div>
        {item && open && <p className="size18 txt-gray6 cursor"> WRITERS</p>}
      </div>
    )
  }
  return (
    <>
      <div className="nav-wrap">
        <div className="nav-backdrop" onClick={onClose} />
        <nav className="nav">
          <div className="flex py32 px24">
            <i className="i-close bgc-black w28 h28 cursor" onClick={onClose} />
          </div>
          <div className="flexColumn flex1 px8 pb8 overHidden">
            <div className="nav-menu-wrap">
              <div className="flexColumn gap40 px100 ">
                <div className="flex alignCenter gap24" >
                  <p className="txt-gray6 size16 b cursor">LOGIN</p>
                  <p className="txt-gray6 size16 b cursor">SIGNUP</p>
                </div>
                <MenuItem title={'ESSAY'} item={'WRITERS'}/>
                <MenuItem title={'NEWSLETTER'}/>
                <MenuItem title={'COLLABORATION'}/>
                <MenuItem title={'COMMUNITY'}/>
                <MenuItem title={'MYPAGE'}/>
                <div className='divider'/>
                <MenuItem title={'ELLE'} arrow/>
              </div>
              <img src={SubscriptionImg} />
              <div className="flex gap28 px100 pb75 pt20">
                <img src={InstagramImg} className="w48 h48" />
                <img src={TwitterImg} className="w48 h48"/>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Nav;
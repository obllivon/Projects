import React, { useMemo } from 'react'
import '../../css/footer.sass'
import FooterCard from './footerComponents/FooterCard'
import { ReactComponent as Inst } from '../../img/footer/Instagram.svg'
import { ReactComponent as WhatUp } from '../../img/footer/WhatsApp.svg'
import { ReactComponent as Fac } from '../../img/footer/Facebook.svg'
import BtnMarket from '../../img/footer/playMarket.png'
import PlayMarket from '../../img/footer/mobile.png'
import { useMediaQuery } from '@mui/material'


function Footer() {
  const objs = useMemo(
    () => [
      ['Недвижимость', 'Квартиры', 'Новостройки', 'Дома', 'Аренда'],
      [
        'Недвижимость',
        'Квартиры',
        'Новостройки',
        'Дома',
        'Аренда',
        'Новостройки'
      ],
      ['Недвижимость', 'Квартиры'],
      ['Недвижимость', 'Квартиры', 'Новостройки']
    ],
    []
  )
  return (
    <footer style={{marginTop: "120px"}}>
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <div className="footer__info">
              {objs.map((item, i) => (
                <div key={i} className="footer__ul">
                  <FooterCard list={item} />
                </div>
              ))}
            </div>
            <div className="footer__down">
              <div className="footer_down_icon">
                <a href="">
                  <Inst />
                </a>
                <a href="">
                  <WhatUp />
                </a>
                <a href="">
                  <Fac />
                </a>
              </div>
              <span>© 2023 «Trade House»</span>
            </div>
          </div>
          <div className="footer__right">
            <p>Мобильное приложение «Trade House»</p>
            <a href="" className='footer__btn'>
              <img src={BtnMarket} alt="" />
            </a>
            {/* <img src={PlayMarket} alt="" className='footer__img' /> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

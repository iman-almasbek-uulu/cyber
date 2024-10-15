import React, { useState } from 'react';
import s from './components.module.css'
import { NavLink, useLocation } from 'react-router-dom';
const Header = () => {
    const [show,setShow] = useState(false)
    const location = useLocation()
    const headerClass = location.pathname === '/community' ? s.relativeHeader : s.absoluteHeader;



    return (
        <header className={s.header}>
            <div className={`container ${s.containers}`}>

                <NavLink to="/" className={s.logo}>
                    <img src="/images/logo.svg" alt="" />
                </NavLink>
                <nav className={`${s.nav} ${s.close_nav}`}>
                    <NavLink to='community' className={s.item}>Мероприятие</NavLink>
                    <NavLink to="/contact" className={s.item}>Контакты</NavLink>
                </nav> 
                <btn className={`text-center text-white ${s.close_nav}`}>+996 999 999 <br /> Позвонить Бесплатно</btn>
                <img onClick={() => setShow(!show)} src="images/menu.png" className={show ? s.menu  : s.n} alt="" />
                <img onClick={() => setShow(!show)} src="images/close.png" className={!show ? s.close : s.n} alt="" />
                <div className={ !show ? s.burger_block : s.n}>
                    <nav className={s.nav}>
                        <NavLink to="community" className={s.item}>Мероприятие</NavLink>
                        <NavLink to="/contact" className={s.item}>Контакты</NavLink>
                        <btn className={`text-center text-white `}>+996 999 999 <br /> Позвонить Бесплатно</btn>

                    </nav> 

                </div>
            </div>
        </header>
    );
};

export default Header;
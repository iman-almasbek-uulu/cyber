import React from 'react';
import s from './components.module.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <header className={s.header}>
            <div className={`container ${s.containers}`}>

                <NavLink to="/" className={s.logo}>
                    <img src="/images/logo.svg" alt="" />
                </NavLink>
                <nav className={s.nav}>
                    <NavLink className={s.item}>Новости</NavLink>
                    <NavLink className={s.item}>Клубы</NavLink>
                    <NavLink className={s.item}>Контакты</NavLink>
                    <btn className={`btn btn-info text-white ${s.item}`}>Позвонить</btn>
                </nav>       
            </div>
        </header>
    );
};

export default Header;
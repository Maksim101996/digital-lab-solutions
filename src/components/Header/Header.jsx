import React, { useState, useRef } from "react";
import logoImage from "../../assets/images/header/header__logo.svg"
import logoImageMobile from "../../assets/images/header/header__logo-mobile.svg"
import "./Header.scss"
import searchIcon from "../../assets/images/header/header__search-icon.svg"
import openMenu from "../../assets/images/header/header__burger-menu-open.svg"
import closeMenu from "../../assets/images/header/header__burger-menu-close.svg"


const Header = ({ setMenu, mobileMenu, searchWords, search, setSearch }) => {


	return <header className="header">
		<div className={mobileMenu ? "header__container active" : "header__container"}>
			<div onClick={setMenu} className="header__open-menu">{mobileMenu ? <img src={closeMenu} alt="close-menu-icon" /> : <img src={openMenu} alt="open-menu-icon" />}</div>
			<a href="#" className="header__logo"><img src={logoImage} className="header__logo-image" alt="logo" /></a>
			<div className="header__search"> <img onClick={() => setSearch(!search)} src={searchIcon} alt="search-icon" /></div>
			{search && <div className={"header__search-input"}><input autoFocus={true} onChange={(event) => searchWords(event)} placeholder="Search..." type="text" /></div>}
		</div>
	</header>
}


export default Header
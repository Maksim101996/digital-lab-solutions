import React, { useState, useRef } from "react";
import "./Menu.scss"
import cn from "classnames"
import { useEffect } from "react";


const Menu = ({ mobileMenu, setMenu }) => {

	let lastScroll = 0
	const defaultOffset = 282
	const horizonMenu = useRef()
	const [scrollClass, setScrollClass] = useState(false)

	const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop
	const containHide = () => horizonMenu.current?.classList.contains('hide')

	function checkScroll() {
		if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset && window.innerWidth > 768) {
			setScrollClass(true)
		}
		else if (scrollPosition() < lastScroll && containHide()) {
			setScrollClass(false)
		}
		lastScroll = scrollPosition()
	}

	useEffect(() => {
		window.addEventListener('scroll', checkScroll)
		return () => {
			window.removeEventListener('scroll', checkScroll)
		}
	}, [])

	return <nav ref={horizonMenu} className={scrollClass ? "menu hide" : "menu"}>
		< ul onClick={setMenu} className={mobileMenu ? "menu__list active" : "menu__list"} >
			<li className="menu__item"><a href="">Demos</a>
				<ul className="menu__sub-list">
					<li className="menu__sub-item" ><a href="#">Demos Header</a></li>
					<li className="menu__sub-item"><a href="#">Demos Layout</a></li>
					<li className="menu__sub-item"><a href="#">Share Buttons</a></li>
					<li className="menu__sub-item"><a href="#">Gallery Demos</a></li>
					<li className="menu__sub-item"><a href="#">Video Demos</a></li>
				</ul></li>
			<li className="menu__item"><a href="">Post</a>
				<ul className="menu__sub-list">
					<li className="menu__sub-item" ><a href="#">Post Header</a></li>
					<li className="menu__sub-item"><a href="#">Post Layout</a></li>
					<li className="menu__sub-item"><a href="#">Share Buttons</a></li>
					<li className="menu__sub-item"><a href="#">Gallery Post</a></li>
					<li className="menu__sub-item"><a href="#">Video Post</a></li>
				</ul>
			</li>
			<li className="menu__item"><a href="">Features</a>
				<ul className="menu__sub-list">
					<li className="menu__sub-item" ><a href="#">Features Header</a></li>
					<li className="menu__sub-item"><a href="#">Features Layout</a></li>
					<li className="menu__sub-item"><a href="#">Share Buttons</a></li>
					<li className="menu__sub-item"><a href="#">Gallery Features</a></li>
					<li className="menu__sub-item"><a href="#">Video Features</a></li>
				</ul></li>
			<li className="menu__item"><a href="">Categories</a>
				<ul className="menu__sub-list">
					<li className="menu__sub-item" ><a href="#">Categories Header</a></li>
					<li className="menu__sub-item"><a href="#">Categories Layout</a></li>
					<li className="menu__sub-item"><a href="#">Share Buttons</a></li>
					<li className="menu__sub-item"><a href="#">Gallery Categories</a></li>
					<li className="menu__sub-item"><a href="#">Video Categories</a></li>
				</ul></li>
			<li className="menu__item"><a href="">Shop</a>
				<ul className="menu__sub-list">
					<li className="menu__sub-item" ><a href="#">Shop Header</a></li>
					<li className="menu__sub-item"><a href="#">Shop Layout</a></li>
					<li className="menu__sub-item"><a href="#">Share Buttons</a></li>
					<li className="menu__sub-item"><a href="#">Gallery Shop</a></li>
					<li className="menu__sub-item"><a href="#">Video Shop</a></li>
				</ul></li>
			<li className="menu__item"><a href="">Buy now</a></li>
		</ ul>
	</nav >
}


export default Menu
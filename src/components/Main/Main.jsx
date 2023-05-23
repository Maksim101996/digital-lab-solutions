import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getPosts } from "../../API/API";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Modal from "../Modal/Modal";
import Posts from "../Posts/Posts";
import './Main.scss'



const Main = () => {
	// Состояние true/false для появления мобильного меню
	const [mobileMenu, setMobileMenu] = useState(false)

	// массив постов
	const [posts, setPosts] = useState([])

	// Состояние для получения данных из поля ввода у поиска
	const [searchValue, setSearchValue] = useState('')

	//Состояние для  отображения модального окна
	const [modalActive, setModalActive] = useState(false)

	//Состояние для данных, которые передаются в модальное окно при клике на пост
	const [modalData, setModalData] = useState(null)

	//состояние true/false для отображения поиска
	const [search, setSearch] = useState(false)

	//функция изменения состояния для модального окна и его отображения
	const getPopUpData = (e) => {
		setModalData(searchPosts[e.currentTarget.dataset.index])
		setModalActive(true)
	}

	//запрос на API
	useEffect(
		() => {
			getPosts()
				.then(data => {
					setPosts(data.data)
				})
		}, []
	)

	// меняет состояние true/false для появления мобильного меню
	const setMenu = () => {
		setMobileMenu(!mobileMenu)
	}

	//меняет состояние получения данных из поля ввода у поиска
	const searchWords = (event) => {
		setSearchValue(event.target.value);
	}

	//  отфильтрованный массив постов с учётом поиска
	const searchPosts = posts.filter(post => {
		return post.title.toLowerCase().includes(searchValue.toLowerCase()) || post.text.toLowerCase().includes(searchValue.toLowerCase())
	})


	return (
		<div className="main">
			<div className="main__container">
				<Header search={search} setSearch={setSearch} setMenu={setMenu} mobileMenu={mobileMenu} searchWords={searchWords} />
				<Menu setMenu={setMenu} mobileMenu={mobileMenu} />
				<Posts getPopUpData={getPopUpData} posts={posts} searchPosts={searchPosts} />
				<Modal active={modalActive} setActive={setModalActive}>
					<>
						<div className="modal__title">{modalData && modalData.title}</div>
						<div className="modal__text">{modalData && modalData.text}</div>
					</>
				</Modal>
			</div>
		</div>
	)
}

export default Main
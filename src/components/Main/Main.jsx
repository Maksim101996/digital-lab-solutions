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
	const [mobileMenu, setMobileMenu] = useState(false)
	const [posts, setPosts] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [modalActive, setModalActive] = useState(false)
	const [modalData, setModalData] = useState(null)
	const [search, setSearch] = useState(false)

	const getPopUpData = (e) => {
		setModalData(searchPosts[e.currentTarget.dataset.index])
		setModalActive(true)
	}

	useEffect(
		() => {
			getPosts()
				.then(data => {
					setPosts(data.data)
				})
		}, []
	)

	const setMenu = () => {
		setMobileMenu(!mobileMenu)
	}

	const searchWords = (event) => {
		setSearchValue(event.target.value);
	}


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
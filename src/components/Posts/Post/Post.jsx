import React from "react";
import "./Post.scss"




const Post = ({ title, text, tags, autor, img, imgSet, date, views, getPopUpData, index }) => {

	return (
		<div className="posts__item">
			<div data-index={index} onClick={getPopUpData} className="item-posts">
				<a className="item-posts__picture _ibg">
					<img className="item-posts__image" src={`${img}`} srcSet={`${imgSet} 2x`} alt="post-photo" />
				</a>
				<article className="item-posts__body">
					<div className="item-posts__note">{tags}</div>
					<h2 className="item-posts__title">{title}</h2>
					<div className="item-posts__info">
						<div className="item-posts__name">{autor}</div>
						<div className="item-posts__data">{date}</div>
						<div className="item-posts__views">{views}</div>
					</div>
					<div className="item-posts__desc">{text}</div>
				</article>
			</div>
		</div>
	)
}

export default Post
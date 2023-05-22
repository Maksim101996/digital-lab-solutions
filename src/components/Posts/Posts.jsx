import React from "react";
import "./Posts.scss"
import Post from "./Post/Post";



const Posts = ({ posts, searchPosts, getPopUpData }) => {
	return <section className="posts">
		<div className="posts__container">
			<div className="posts__items">
				{searchPosts.map((p, index) => {
					return <Post key={index} getPopUpData={getPopUpData} index={index} title={p.title} text={p.text} tags={p.tags} autor={p.autor} img={p.img} imgSet={p.img_2x} date={p.date} views={p.views} />
				})}

			</div>
		</div>
	</section>
}

export default Posts
import React from "react";
import "./Modal.scss"



const Modal = ({ active, setActive, children }) => {

	return (
		<div onClick={() => setActive(false)} className={active ? "modal active" : "modal"}>
			<div onClick={(e) => e.stopPropagation()} className={active ? "modal__content active" : "modal__content"}>
				<div onClick={() => setActive(false)} className="modal__close-button">Закрыть</div>
				{children}
			</div>
		</div>
	)
}

export default Modal
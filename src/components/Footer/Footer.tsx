import React from "react";
import "./Footer.scss";
import { BsLinkedin, BsEnvelope, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
	return (
		<footer className="Footer">
			<h1>
				BaDastoor
			</h1>
			<div className="Footer__links">
				<a href="https://wa.me/919870470405" target="_blank" rel="noreferrer">
					<BsWhatsapp color="white" size={30} />
				</a>
				<a href="mailto:dastoor.ba.in@gmail.com" target="_blank" rel="noreferrer">
					<BsEnvelope color="white" size={30} />
				</a>
				<a href="https://www.linkedin.com/in/ba-dastoor-india-992a30246/" target="_blank" rel="noreferrer">
					<BsLinkedin color="white" size={30} />
				</a>
			</div>
		</footer>
	);
}
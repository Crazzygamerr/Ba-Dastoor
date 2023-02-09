import React from "react";
import Logo from "../../../public/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// import { auth } from "../Config/Config";
import "./Navbar.scss";

function Navbar({
	user,
} : {
	user: any,
}): JSX.Element {

	// const handleLogout = () => {
	//   auth.signOut().then(() => {
	//     history.push("/login");
	//   });
	// };
	
	const location = useRouter();

	return (
		<nav className="Navbar">
			<Link href="/">
				<Image src={Logo} alt="logo" className="Navbar__logo" />
			</Link>
			<div className="Navbar__links">
				<Link
					href="/"
					className={`
						Navbar__navLink 
						${location.pathname === "/" ? "Navbar__navLink--active" : ""}
					`}>
					Home
				</Link>
				<Link
					href="/shop"
					className={`
						Navbar__navLink
						${location.pathname === "/shop" ? "Navbar__navLink--active" : ""}
					`}>
					Shop
				</Link>
				<Link
					href="/feedback"
					className={`
						Navbar__navLink
						${location.pathname === "/feedback" ? "Navbar__navLink--active" : ""}
					`}>
					Feedback
				</Link>
				<Link
					href="/about"
					className={`
						Navbar__navLink
						${location.pathname === "/about" ? "Navbar__navLink--active" : ""}
					`}>
					About
				</Link>
			</div>
			<div className="Navbar__auth">
			</div>
		</nav>
	);
}

export default Navbar;

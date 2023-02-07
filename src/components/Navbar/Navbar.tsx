import React from "react";
// import Logo from "../../public/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// import { auth } from "../Config/Config";
// import "./Navbar.module.scss";

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
		<div>
			<div className="outer">
				<div className="Navbar">
					<div className="buttons">
						<Link href="/">
							{/* <Image src={Logo} alt="logo" className="img" /> */}
						</Link>
					</div>
					<div className="buttons">
						<Link href="/">
							<button
								// className={location.route === "/" ? "active" : "link1"}
								className={`
									
								`}
								id="abbb"
							>
								Home
							</button>
						</Link>
						<Link href="shop">
							<button
								className={location.route === "/shop" ? "active" : "link1"}
							>
								Shop
							</button>
						</Link>

						<Link href="blog">
							<button
								className={location.route === "/blog" ? "active" : "link1"}
							>
								Feedback
							</button>
						</Link>

						<Link href="about">
							<button
								className={location.route === "/about" ? "active" : "link1"}
							>
								About
							</button>
						</Link>

						<Link href="contact">
							<button
								className={
									location.route === "/contact" ? "active" : "link1"
								}
							>
								{" "}
								Contact
							</button>
						</Link>
					</div>
					<div className="right">
						{!user && (
							<div className="buttons">
								<Link href="login" className="link">
									<button className="auth"> LOGIN </button>
								</Link>
							</div>
						)}
					</div>

					{user && (
						<div className="login">
							<div>
								<Link className="navlink" href="/">
									<span className="wave">👋</span> {user}
								</Link>
							</div>
							<div>
								<Link href="cart">
									{/* <Icon icon={shoppingCart} size={20} /> */}
									Icon**
								</Link>
								{/* <span className="cart-indicator">{totalQty}</span>*/}
							</div>
							<div
								// onClick={handleLogout}
							>Log Out</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Navbar;

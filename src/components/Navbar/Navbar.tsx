import React from "react";
import Logo from "../../../public/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import "./Navbar.scss";
import Cart from "../../../public/shopping_cart_black_24dp.svg";

function Navbar({
	user,
} : {
	user: any,
}): JSX.Element {
	
	const location = useRouter();
	const { data: session } = useSession();
	
	React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        (document.querySelector(".Navbar") as HTMLElement)!.style.height = "55px";
      } else {
				(document.querySelector(".Navbar") as HTMLElement)!.style.height = "70px";
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });

	return (
		<nav className="Navbar">
			<Link href="/">
				<Image
					src={Logo}
					alt="logo"
					className="Navbar__logo"
				/>
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
				{session ? (
					<Image
						alt=""
						loading="lazy"
						src={Cart}
						className="Navbar__cart"
					/>
				) : null}
				<button
					className="Navbar__authBtn"
					onClick={() => {
						if (session) {
							signOut({ callbackUrl: "/" });
						} else {
							signIn("google", { callbackUrl: "/" });
						}	
					}}
				>
					{ session ? "Logout" : "Login" }
				</button>
			</div>
		</nav>
	);
}

export default Navbar;

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
	
	const router = useRouter();
	const { data: session } = useSession();
	const [open, setOpen] = React.useState(false);
	
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
						${router.pathname === "/" ? "Navbar__navLink--active" : ""}
					`}>
					Home
				</Link>
				<Link
					href="/shop"
					className={`
						Navbar__navLink
						${router.pathname === "/shop" ? "Navbar__navLink--active" : ""}
					`}>
					Shop
				</Link>
				<Link
					href="/feedback"
					className={`
						Navbar__navLink
						${router.pathname === "/feedback" ? "Navbar__navLink--active" : ""}
					`}>
					Feedback
				</Link>
				<Link
					href="/about"
					className={`
						Navbar__navLink
						${router.pathname === "/about" ? "Navbar__navLink--active" : ""}
					`}>
					About
				</Link>
			</div>
			<div className="Navbar__auth">
				{session ? (
					<>
						<Image
							alt=""
							loading="lazy"
							src={Cart}
							className="Navbar__cart"
						/>
						<Image
							alt=""
							loading="lazy"
							width={40}
							height={40}
							src={session.user?.image ?? ""}
							className="Navbar__user"
							onClick={() => setOpen(!open)}
						/>
						<div className={`
							Navbar__dropdown ${open ? "Navbar__dropdown--active" : ""}
						`}>
							<p>{session.user?.name}</p>
							<div></div>
							<button onClick={() => signOut({callbackUrl: '/'})}>Logout</button>
						</div>
					</>
				) : (
					<button
						className="Navbar__authBtn"
						onClick={() => signIn("google", { callbackUrl: "/" })}
					>
					Login
					</button>
				)}
			</div>
		</nav>
	);
}

export default Navbar;

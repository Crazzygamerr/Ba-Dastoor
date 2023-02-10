import { useState } from "react";
// import { auth, fs } from "../Config/Config";
import Image from "next/image";
import Link from "next/link";
import P1 from "../../public/product1.jpeg";
import P2 from "../../public/product2.jpeg";
import P3 from "../../public/product3.jpeg";
import Butterflies from "../../public/Butterflies.svg";
import Hands from "../../public/Hands.svg";
import rightArrow from "../../public/right-arrow.svg";
import "../styles/routes/index.scss";
import Head from "next/head";

function Home({ props, }: { props: any }): JSX.Element {
	

	// function GetUserUid() {
	//   const [uid, setUid] = useState(null);
	//   useEffect(() => {
	//     auth.onAuthStateChanged((user) => {
	//       if (user) {
	//         setUid(user.uid);
	//       }
	//     });
	//   }, []);
	//   return uid;
	// }

	// const uid = GetUserUid();

	//getting a current user function
	// function GetCurrentUser() {
	//   const [user, setUser] = useState(null);
	//   useEffect(() => {
	//     auth.onAuthStateChanged((user) => {
	//       if (user) {
	//         fs.collection("users")
	//           .doc(user.uid)
	//           .get()
	//           .then((snapshot) => {
	//             setUser(snapshot.data().FullName);
	//           });
	//       } else {
	//         setUser(null);
	//       }
	//     });
	//   }, []);
	//   return user;
	// }

	// const user = GetCurrentUser();
	// console.log(user)

	//state of products
	// const [products, setProducts] = useState([]);

	//Getting products function
	// const getProducts = async () => {
	//   const products = await fs.collection("products").get();
	//   const productsArray = [];
	//   for (var snap of products.docs) {
	//     var data = snap.data();
	//     data.ID = snap.id;
	//     productsArray.push({
	//       ...data,
	//     });
	//     if (productsArray.length === products.docs.length) {
	//       setProducts(productsArray);
	//     }
	//   }
	// };

	// console.log(products.length);

	// useEffect(() => {
	//   getProducts();
	// }, []);

	return (
		<div className="Landing">
			<Head>
				<title>Ba-Dastoor</title>
			</Head>
			<div className="Landing__hero">
				<Image
					alt=""
					loading="lazy"
					src={Butterflies}
					className="Landing__heroImage"
				/>
				<div className="Landing__heroRight">
					<h1 className="Landing__heroTitle">
						BaDastoor
					</h1>
					<h3 className="Landing__heroSubtitle">
						The Brand of Nature
					</h3>
					<Link
						href="/shop"
						className="Landing__shopNow"
					>
						<p>Shop Now</p>
						<Image
							alt=""
							loading="lazy"
							src={rightArrow}
							className="rightArrow"
						/>
					</Link>
				</div>
			</div>
			
			<div className="Landing__productSection">
				<Image src={P2} alt="discount" className="Landing__product" />
				<Image src={P1} alt="discount" className="Landing__product" />
				<Image src={P3} alt="discount" className="Landing__product" />
				<div className="Landing__card">
					<h3 className="Landing__cardText">
						A one spot destination for all your natural products
					</h3>
					<Link href="/shop" className="Landing__cardButton">Find out More</Link>
				</div>
			</div>
			
			<div className="Landing__contact">
				<form className="Landing__form">
					<h3 className="Landing__title">Contact Us</h3>
					<p className="Landing__subtitle">How can we help you?</p>
					<input type="text" placeholder="Name" />
					<input type="text" placeholder="Email " />
					<input type="text" placeholder="Message " />
					<button type="submit" className="Landing__submit">
						Submit
					</button>
				</form>
				<Image
					src={Hands}
					alt=""
					className="Landing__contactImage"
				/>
			</div>
			
			{/* <div className="rightSide">
				<Image src={V1} alt="discount" height={400} className="photo" />
				<Image src={V2} alt="discount" height={400} className="photo" />
			</div> */}
		</div>
	);
}

export default Home;

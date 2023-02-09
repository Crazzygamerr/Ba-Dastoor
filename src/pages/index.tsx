import { useState } from "react";
// import { auth, fs } from "../Config/Config";
// import "../styles/routes/index.scss";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import P1 from "../../public/1.png";
import P2 from "../../public/2.png";
import P3 from "../../public/3.png";
import Butterflies from "../../public/Butterflies.svg";
import V1 from "../../public/V1.png";
import V2 from "../../public/V2.png";
import rightArrow from "../../public/right-arrow.svg";

import "../styles/routes/index.scss";

function Home({
	props,
}: {
	props: any;
}): JSX.Element {

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
			<Navbar user={null} />
			<div className="Landing__hero">
				<Image
					alt=""
					loading="lazy"
					src={Butterflies}
					className="Landing__heroImage"
				/>
				<div className="Landing__heroRight">
					<h1 className="heroTitle">
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
				<Image src={P1} alt="discount" className="Landing__product" />
				<Image src={P2} alt="discount" className="Landing__product" />
				<Image src={P3} alt="discount" className="Landing__product" />
				<div className="Landing__card">
					<h3 className="yourText">
						A one spot destination for all the natural products for you!!
					</h3>
					<p className="smText">Are you excited?</p>
					<button className="shopNow">Find out More</button>
				</div>
			</div>
			
			<div className="Landing__contact">
				<form className="form">
					<div className="title">Contact Team</div>
					<div className="subtitle">How can we help you?</div>
					<div className="input-container ic1">
						<input id="firstname" className="input" type="text" placeholder="Name" />
					</div>
					<div className="input-container ic2">
						<input id="lastname" className="input" type="text" placeholder="Email " />
					</div>
					<div className="input-container ic2">
						<input
							id="Message"
							className="input"
							type="text"
							placeholder="Message "
						/>
					</div>
					<button type="submit" className="submit">
						submit
					</button>{" "}
				</form>
			</div>
			
			{/* <div className="rightSide">
				<Image src={V1} alt="discount" height={400} className="photo" />
				<Image src={V2} alt="discount" height={400} className="photo" />
			</div> */}
			
			{/* <Footer /> */}
		</div>
	);
}

export default Home;

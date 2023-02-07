import { useState } from "react";
// import { auth, fs } from "../Config/Config";
// import "../styles/routes/index.scss";
import Image from "next/image";
import P1 from "../../public/1.png";
import P2 from "../../public/2.png";
import P3 from "../../public/3.png";
import Butterflies from "../../public/Butterflies.svg";
import V1 from "../../public/V1.png";
import V2 from "../../public/V2.png";
import styles from "../styles/routes/index.module.scss";

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
	const [products, setProducts] = useState([]);

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
		<div className={styles.page}>
			{/* <Navbar user={null} /> */}
			<div className={styles.hero}>
				<div className={styles.leftSide}>
					<div>
						<Image
							src={Butterflies}
							alt=""
							height={400}
							className={styles.svgImg}
						/>
					</div>
					<div className={styles.title}>The Brand of Nature</div>
					<div className={styles.butn}>
						<a href="#page2">
							<button className={styles.shopNow}>Shop Now</button>
						</a>
					</div>
				</div>
			</div>

			<div className={styles.rightSide}>
				<Image src={V1} alt="discount" height={400} className={styles.photo} />
				<Image src={V2} alt="discount" height={400} className={styles.photo} />
			</div>

			<div className={styles.page2}>
				<div className={styles.lSide}>
					<h1 className={styles.yourText}>
						A one spot destination for all the natural products for you!!
					</h1>
					<p className={styles.smText}>Are you excited?</p>
					<button className={styles.shopNow}>Find out More</button>
				</div>
				<div className={styles.rSide}>
					<Image src={P1} alt="discount" height={400} className={styles.photo2} />
					<Image src={P2} alt="discount" height={400} className={styles.photo2} />
					<Image src={P3} alt="discount" height={400} className={styles.photo2} />
				</div>
			</div>

			{/* <Footer /> */}
		</div>
	);
}

export default Home;

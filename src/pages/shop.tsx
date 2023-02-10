import React, { useEffect } from "react";
// import { fs } from "../Config";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Head from "next/head";

export default function Shop() {
	const [products, setProducts] = React.useState<any>([]);
	
	// React.useEffect(() => {
	// 	getProducts();
	// }, []);
	
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
	// 		}
  //   }
  // };
	
	return (
		<div className="Shop">
			<Head>
				<title>Ba-Dastoor</title>
			</Head>
			<Navbar user={null} />
			{products.map((product: any) => {
				<div className="Shop__Container">
					<Image src={product.url} alt="product-image" className="Shop__Image" />
					<div className="Shop__desc">
						<div className="Shop__name">
							<h1 className="Shop__pname">{product.title}</h1>
						</div>
						<h2 className="Shop__pdesc">{product.description}</h2>
						<div className="Shop__bottom">
							<div className="Shop__H2">₹{product.price}</div>
							<button className="Shop__b1 " >
								ADD TO CART
							</button>
						</div>
					</div>
				</div>
				
			})}
		</div>
	);
}
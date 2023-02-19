import React, { useEffect } from "react";
import { NextPage, GetServerSideProps } from "next";
import Image from "next/image";
import Head from "next/head";
import "@/styles/routes/shop.scss"
import { db } from "@/utils/firebase";
import type { ProductItem } from "@/types/firebase";
import { collection, getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";

export const getServerSideProps: GetServerSideProps = async (context) => {
	
	const session = await getServerSession(context.req);
	
	
	const productCol = collection(db, "products");
	const productSnapshot = await getDocs(productCol);
	const productsArray: ProductItem[] = [];
	productSnapshot.forEach(async (doc) => {
		const data = doc.data();
		data.ID = doc.id;
		
		productsArray.push({
			...data as ProductItem,
		});
	});
	
	return {
		props: {
			products: productsArray,
		},
	};
}
	

const Shop: NextPage<{ products: ProductItem[] }> = ({ products }) => {
	
	return (
		<div className="Shop">
			<Head>
				<title>Ba-Dastoor</title>
			</Head>
			<div className="Shop__products">
				{products.map((product: ProductItem, index) => (
					<div className="Shop__container" key={index}>
						<div className="Shop__mainListing">
							<Image
								src={product.image}
								alt="product-image"
								className="Shop__Image"
								width={200}
								height={200}
							/>
							<div className="Shop__text">
								<h4 className="Shop__name">{product.name}</h4>
								<p className="Shop__desc">{product.description}</p>
							</div>
						</div>
						<div className="Shop__bottom">
							<h3>₹{product.price}</h3>
							<button className="Shop__addButton" >
								ADD TO CART
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Shop;
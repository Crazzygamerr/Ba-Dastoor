import React, { useEffect } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import "@/styles/routes/shop.scss"
import { db, storage } from "@/utils/firebase";
import type { ProductItem } from "@/types/firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { ref, list, getDownloadURL } from "firebase/storage";

export async function getServerSideProps() {
	
	// const getImages = async () => {
	// 	const imageList = new Map<string, string>();
	// 	const listRef = ref(storage, "/product-images");
	// 	const listResult = await list(listRef);
	// 	listResult.items.forEach(async (itemRef) => {
	// 		const url = await getDownloadURL(itemRef);
	// 		imageList.set(itemRef.name, url);
	// 	});
	// 	return imageList;
	// }
	// const imageList: Map<string, string> = await getImages();
	// console.log(imageList);
	
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
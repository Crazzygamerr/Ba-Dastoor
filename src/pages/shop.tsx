import React, { useEffect } from "react";
// import { fs } from "../Config";
import Image from "next/image";
import Head from "next/head";
import "@/styles/routes/shop.scss"

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
	
	const list = [
    {
        "url": "https://firebasestorage.googleapis.com/v0/b/badastoor-86ddb.appspot.com/o/product-images%2FBeauty_at_the_Pore.jpg?alt=media&token=4186c770-b48a-4b72-b5a3-e45413a2ebee",
        "title": "Beauty At The Pore",
        "description": "Boasting a ton of skin benefits, Beauty at the Pore ensures that your skin is totally clean besides giving it an additional dose of skin-brightening ingredients. Whether your skin is sensitive and looking for healing benefits or acne-prone and requiring clarifying effects or dry and thirsting for moisture, Beauty at the Pore works from scratch – At the very pores of your skin. Our 100% Natural toner unclogs pores, prevents breakouts, and lightens spots & blemishes. Oh, the glow imparted is a cherry on the cake.",
        "price": 450,
        "ID": "tgsMmbJVP3gxkE7Fha0G"
    },
    {
        "title": "Mosquito Repellent Roll on",
        "price": 400,
        "url": "https://firebasestorage.googleapis.com/v0/b/badastoor-86ddb.appspot.com/o/product-images%2FMosquito_roll_on.jpg?alt=media&token=7b2c7532-a597-4e3c-924c-f55ed921a7c1",
        "description": "A complete natural formulation- no harmful chemicals, making it safe for people of all age groups. Made from Citronella oil, Coconut oil and Eucalyptus oil its a perfect blend and replacement from the harsh chemical alternatives.",
        "ID": "vPrnzw9sVfrbxvuR53JG"
    },
    {
        "description": "Fill your room with the natural fragrance of the coconut shell soy wax and enhance your atmosphere. The base is of a dried coconut shell which is naturally processed and is filled with soy wax, this soy wax is three times more long-lasting than any other normal wax (yes you read it right 3 times long-lasting! Toxic-free and long-lasting Paraffin free and 100% Natural Reusable premium-looking coconut shell bowl.",
        "url": "https://firebasestorage.googleapis.com/v0/b/badastoor-86ddb.appspot.com/o/product-images%2Fproduct6.jpeg?alt=media&token=d95817ae-0134-4eea-a0cc-89d4dd8fedd1",
        "price": 300,
        "title": "Soya Wax Candle",
        "ID": "wBwHAqsjp1KqiEOv6NVc"
    },
    {
        "price": 200,
        "title": "Bamboo tongue cleaner",
        "url": "https://firebasestorage.googleapis.com/v0/b/badastoor-86ddb.appspot.com/o/product-images%2FToothBrush.jpg?alt=media&token=71156046-0bb1-4341-bbfd-b0c94d38378e",
        "description": "Bamboo tongue cleaner is a perfect example of what a zero-waste personal care switch should be! Shop now, for our simple yet effective non-breakable compostable bamboo tongue cleaner.",
        "ID": "xx3usmzvCUR58bEPabcD"
    }
]
	
	return (
		<div className="Shop">
			<Head>
				<title>Ba-Dastoor</title>
			</Head>
			<div className="Shop__products">
				{list.map((product: any, index) => (
					<div className="Shop__container" key={index}>
						<div className="Shop__mainListing">
							<Image
								src={product.url}
								alt="product-image"
								className="Shop__Image"
								width={200}
								height={200}
							/>
							<div className="Shop__text">
								<h4 className="Shop__name">{product.title}</h4>
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
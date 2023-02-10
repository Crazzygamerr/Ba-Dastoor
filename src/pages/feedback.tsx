import React from "react";
import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer";
import Image from "next/image";
import Head from "next/head";
import "../styles/routes/feedback.scss";

export default function Feedback() {
	
	const feedback = [
		{
			"id": "@ankitsharda",
			"name": "Ankit Sharda",
			"img": "https://cdn-icons-png.flaticon.com/512/1071/1071164.png",
			"rating": 5,
			"comment": "Ba-Dastoor is a great brand. I purchased two products from them, the wooden comb and the wax candle and I can safely say that these purchases were a good decision."
		},
		{
			"id": "@yash113",
			"name": "Yash Luthra",
			"img": "https://cdn-icons-png.flaticon.com/512/1507/1507155.png",
			"rating": 3,
			"comment": "I finally found a place where I can purchase sustainable daily-use products! Amazing platform"
		},
		{
			"id": "@guptaanshika",
			"name": "Anshika Gupta",
			"img": "https://cdn-icons-png.flaticon.com/512/7070/7070249.png",
			"rating": 4,
			"comment": "Hello!!! The scented candles were amazing!! I really had a better day because of it. Can't wait to buy more!!!"
		},
		{
			"id": "@pc737",
			"name": "Palak Chawla",
			"img": "https://cdn-icons-png.flaticon.com/512/743/743424.png",
			"rating": 4,
			"comment": "The candles are very calming and they look very pretty."
		}
	];
	
  return (
    <div className="Feedback">
			<Head>
				<title>Ba-Dastoor</title>
			</Head>
      <Navbar user={null} />
      <h1 className="Feedback__subHeading">Our Top Reviews</h1>
			<div className="Feedback__container">
				{feedback.map((item, index) => (
					<div className="Feedback__box" key={index}>
						<div className="Feedback__box-top">
							<div className="Feedback__profile">
								<img
									src={item.img}
									alt=""
									width={10}
									height={10}
								/>
								<div className="Feedback__user">
									<strong>{item.name}</strong>
									<span>{item.id}</span>
								</div>
							</div>
							<div className="Feedback__reviews">
								{[...Array(item.rating)].map((star, index) => ("⭐️"))}
							</div>
						</div>
						<p>{item.comment}</p>
					</div>
				))}
			</div>
      {/* <Footer /> */}
    </div>
  );
}

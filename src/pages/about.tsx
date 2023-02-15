import React, { useState, useEffect } from "react";
// import { auth, fs } from "../Config/Config";
import "../styles/routes/about.scss";
import P4 from "../../public/4.png";
import P5 from "../../public/5.jpeg";
import Vani from "../../public/Vani.png";
import Ria from "../../public/ria.jpg";
import Amogh from "../../public/amogh.jpg";
import Ananya from "../../public/ananya.jpeg";
import Anirudh from "../../public/aniruddh.jpeg";
import Ashna from "../../public/ashna.jpg";
import Image, { StaticImageData } from "next/image";
import Head from "next/head";

type Member = {
	name: string;
	designation: string;
	image: StaticImageData;
	href: string;
	style?: React.CSSProperties;
};

export default function About() {
	
	const members: Member[] = [
		{
			name: "Ashna Singhal",
			designation: "CMO",
			image: Ashna,
			href: "/ashna.jpeg",
			style: { objectFit: "contain" }
		},
		{
			name: "Ananya Bhatnagar",
			designation: "COO",
			image: Ananya,
			href: "/ananya.jpeg",
			style: { objectFit: "contain" }
		},
		{
			name: "Ria Kachhal",
			designation: "CHRO",
			image: Ria,
			href: "/ria.jpeg"
		},
		{
			name: "Amogh Maheshwari",
			designation: "CFO",
			image: Amogh,
			href: "/amogh.jpg"
		},
		{
			name: "Aniruddh Kurpad",
			designation: "CPO",
			image: Anirudh,
			href: "/aniruddh.jpeg"
		},
		{
			name: "Vani Katyal",
			designation: "CEO",
			image: Vani,
			href: "/Vani.png"
		},
			
	];

  return (
    <div className="About">
			<Head>
				<title>Ba-Dastoor</title>
			</Head>
      <h1 className="About__heading">What&apos;s BaDastoor?</h1>
      <div className="About__intro">
				<Image src={P4} alt="" className="About__image" />
				<p className="About__text">
					<i>“The greatest threat to our planet is the belief that someone else will fix it.” -Robert Swan</i>
					<br /><br />
					This planet is ours and so the responsibility to save it is ours too.
					And we believe, sustainability is the key to it all!
					Thankfully a lot of rural Indian households already produce and use 100% organic products, made from fresh, natural ingredients.
					During the lockdown, a slew of little companies sprung up from rural areas selling such products, and people reacted positively to them, investigating their offerings and purchasing from them instead of their normal established enterprises.
					All we need is to connect to our roots and help these brands flourish.
				</p>
      </div>
			<h1 className="About__subHeading">About Us</h1>
			<div className="About__teamDesc">
				<p className="About__teamText">
					A sustainable lifestyle is not a fancy dream anymore. 
					It is the need of the hour.
					Our aim is to make it a reality by allowing people to incorporate 100% sustainable, eco-friendly products in their daily lives without paying a premium for them. 
					<br /><br />
					Small enterprises are recognised for offering low-cost items because the majority of them are home-grown and do not require expensive inputs.
					We want to highlight the environmentally conscious small enterprises that have emerged from rural regions.
					These folks are unable to access metro cities for a variety of reasons.
					This will also be our contribution to the Made in India programme, which encourages rural development.
					Moreover, we understand how important it is for individuals to use products that are free of hazardous chemicals, thus we provide cruelty-free goods devoid of synthetic scents.
				</p>
        <Image src={P5} alt="" className="About__teamImage" />
			</div>
			<h1 className="About__subHeading">Our Team</h1>
      <div className="About__members">
				{members.map((member, index) => (
					<div className="About__member" key={index}>
						<Image
							src={member.image}
							alt=""
							className="About__memberImg"
							style={member.style}
						/>
						<p className="name">
							<b>{member.name}</b> <br /> 
							<i>{member.designation}</i>
						</p>
					</div>
				))}
      </div>
    </div>
  );
}

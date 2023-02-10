import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
// import { auth, fs } from "../Config/Config";
import "../styles/routes/about.scss";
// import Footer from "../components/Footer";
import P4 from "../../public/4.png";
import P5 from "../../public/5.jpeg";
import Vani from "../../public/Vani.png";
import Ria from "../../public/ria.jpeg";
import Amogh from "../../public/amogh.jpg";
import Ananya from "../../public/ananya.jpeg";
import Anirudh from "../../public/aniruddh.jpeg";
import Ashna from "../../public/ashna.jpeg";
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
			style: { objectPosition: "bottom"}
		},
		{
			name: "Ananya Singh",
			designation: "COO",
			image: Ananya,
			href: "/ananya.jpeg",
			style: { objectPosition: "top"}
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
			name: "Aniruddh Karpad",
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
      <Navbar user={null} />
      <h1 className="About__heading">What&apos;s BaDastoor?</h1>
      <div className="About__intro">
				<Image src={P4} alt="" className="About__image" />
				<p className="About__text">
					Self-care, particularly skin care, has also become an important
					component of people&apos;s lifestyles as more and more people become
					aware of the importance of skin and body health. We understand how
					important it is for individuals to use products that are free of
					hazardous chemicals on their skin, thus we provide cruelty-free
					goods devoid of synthetic scents. Furthermore, during the lockdown,
					a slew of little companies sprung up, and people reacted positively
					to them, investigating their offerings and purchasing from them
					instead of their normal established enterprises.
				{/* </p>
				<p className="About__text"> */}
					<br /><br />
					Small enterprises are recognised for offering low-cost items because
					the majority of them are home-grown and do not require expensive
					inputs.
					We want to highlight the environmentally conscious small enterprises
					that have emerged from rural regions. These folks are unable to
					access metro cities for a variety of reasons. This will also be our
					contribution to the Made in India programme, which encourages rural
					development. We will provide our consumers non-toxic, organic, less
					expensive, and less industrialised items.
				</p>
      </div>
			<h1 className="About__subHeading">About Us</h1>
      <div className="About__teamDesc">
				<p className="About__teamText">
					An initiative to make small business grow. We are a social
					enterprise with the purpose of aiding small businesses, with a
					concentration on those in rural areas. We want to do this by
					providing small businesses with both virtual and physical space to
					help them grow and thrive. We are especially interested in working
					with suppliers that do not have the means or reach to sell in big
					urban regions.
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
      {/* <Footer /> */}
    </div>
  );
}

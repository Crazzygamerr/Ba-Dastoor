import '@/styles/routes/cart.scss';
import { db } from "@/utils/firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { GetServerSideProps, NextPage } from "next";
import { getServerSession, } from "next-auth/next";
import Head from "next/head";
import { authOptions } from './api/auth/[...nextauth]';
import '@/styles/routes/cart.scss';
import prisma from '@/utils/prismadb';

export const getServerSideProps: GetServerSideProps = async (context) => {

	const session = await getServerSession(context.req, context.res, authOptions);

	if (!session) {
		return {
			redirect: {
				destination: "/",
				permanent: false,
			},
		};
	}
	
	const email = session!.user?.email;
	const user = await prisma.user.findFirst({
		where: {
			email: email,
		}
	});
	console.log(user);

	const collectionRef = collection(db, "carts");
	const cartRef = doc(collectionRef, session.user?.email ?? "");
	const cartSnap = await getDoc(cartRef);

	if (!cartSnap.exists() || !session.user?.email) {
		await setDoc(cartRef, {
			items: [],
		});
	}
	const cartData = { ...cartSnap.data() };

	return {
		props: {
			cartData,
		},
	};
}

const Cart: NextPage = ({ cartData }: any) => {

	console.log(JSON.stringify(cartData, null, 2));
	return (
		<div className="Cart">
			<Head>
				<title>Ba-Dastoor</title>
			</Head>
			<h1>Cart</h1>
			{/* {cartData} */}
			{/* {cartData.items.length === 0 ? (
				<h2>Your cart is empty</h2>
			) : (
				<div className="Cart__items">
					{cartData.items.map((item: any, index: number) => (
						<div className="Cart__item" key={index}>
							<h3>{item.name}</h3>
							<h3>₹{item.price}</h3>
						</div>
					))}
				</div>
			)} */}
		</div>
	);
};

export default Cart;
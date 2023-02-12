import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
// import { FirestoreAdapter } from "@next-auth/firebase-adapter"
// import { app } from "firebase-admin"
// import { cert } from "firebase-admin/app"

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	// adapter: FirestoreAdapter(
	// 	app
	// ),
	// adapter: FirestoreAdapter({
	// 	credential: cert({
	// 		projectId: process.env.FIREBASE_PROJECT_ID,
	// 		clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
	// 		privateKey: process.env.FIREBASE_PRIVATE_KEY,
	// 	})
	// })
})
import '@/styles/root/globals.scss'
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import type { AppProps } from 'next/app'
import { Maven_Pro } from "@next/font/google";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { SessionProvider } from 'next-auth/react';

const maven_Pro = Maven_Pro({
	subsets: ["latin"],
});
const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
	return (
		<SessionProvider session={session}>
			<main className={maven_Pro.className}>
				<Navbar user={null} />
				<Component {...pageProps} />
				<Footer />
			</main>
		</SessionProvider>
	);
}

export default App;
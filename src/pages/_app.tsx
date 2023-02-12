import '@/styles/root/globals.scss'
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import type { AppProps } from 'next/app'
import { Alegreya } from "@next/font/google";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import { SessionProvider } from 'next-auth/react';

const alegreya = Alegreya({
	subsets: ["latin"],
});

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
	return (
		<SessionProvider session={session}>
			<main className={alegreya.className}>
				<Navbar user={null} />
				<Component {...pageProps} />
				<Footer />
			</main>
		</SessionProvider>
	);
}

export default App;
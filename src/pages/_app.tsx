import '@/styles/root/globals.scss'
import type { AppProps } from 'next/app'
import { Alegreya } from "@next/font/google";
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const alegreya = Alegreya({
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={alegreya.className}>
			<Navbar user={null} />
			<Component {...pageProps} />
			<Footer />
		</main>
	);
}

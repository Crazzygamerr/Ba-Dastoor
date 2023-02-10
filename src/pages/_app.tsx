import '@/styles/root/globals.scss'
import type { AppProps } from 'next/app'
import { Alegreya } from "@next/font/google";

const alegreya = Alegreya({
	subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={alegreya.className}>
			<Component {...pageProps} />
		</main>
	);
}

import '@/styles/root/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
	// return <Component {...pageProps} />
	return <>
		<Head>
			<title>Ba-Dastoor</title>
			<link rel="icon" href="/favicon.ico" />
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			/>
		</Head>
		<Component {...pageProps} />
	</>
}

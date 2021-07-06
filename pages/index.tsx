import Head from 'next/head';
import Image from 'next/image';

export default function Home(): JSX.Element {
	return (
		<div>
			<Head>
				<title>Multibrand | Store</title>
				<meta name="description" content="Multibrand store" />
			</Head>

			<main>
				<h1>Multibrand store</h1>
			</main>

			<footer>
				<p>footer details</p>
				<Image src="/vercel.svg" width={72} height={72} alt={'hello'} />
			</footer>
		</div>
	);
}

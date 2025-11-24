import * as React from 'react';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import '../styles/style.css';

const customTheme = extendTheme({
	colors: {
		btncom: {
			100: '#304FFF',
			200: '#302FFF',
		},
	},
	fonts: {
		heading: "'Poppins', sans-serif",
		body: 'system-ui, sans-serif',
		mono: 'Menlo, monospace',
	},
	fontWeights: {
		normal: 400,
		medium: 500,
		semi: 600,
		bold: 700,
		xbold: 800,
		black: 900,
	},
});

function App({ Component, pageProps }) {
	const [lessons, setLessons] = useState([]);
	const [loading, setLoading] = useState(false);

	function getLesson() {
		setLoading(true);
		const lessonsRef = collection(db, 'lessons');
		getDocs(lessonsRef)
			.then((querySnapshot) => {
				const items = querySnapshot.docs.map((doc) => doc.data());
				setLessons(items);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching lessons:', error);
				setLessons([]);
				setLoading(false);
			});
	}

	useEffect(() => {
		getLesson();
	}, []);

	if (loading) {
		return <Spinner></Spinner>;
	}

	return (
		<ChakraProvider theme={customTheme}>
			<Head>
				<link rel="shortcut icon" href="./ico/icon-192x192.png" />
				<link rel="apple-touch-icon" href="/example.png"></link>
				<meta name="theme-color" content="#F8F8F8" />
				<link rel="manifest" href="./manifest.json" />
			</Head>
			<Layout>
				<Component {...pageProps} lessons={lessons} />
			</Layout>
		</ChakraProvider>
	);
}

export default App;

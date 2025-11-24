import React, { useState, useEffect } from 'react';
import { Center, Heading, useColorModeValue, Text, Box } from '@chakra-ui/react';
import Card from '../components/Card';
import { db } from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Spinner from '../components/Spinner';

function Upcoming(props) {
	const sbtn = useColorModeValue('#F8F8F8', '#304FFF');
	const [ministry, setMinistry] = useState([]);
	const [loading, setLoading] = useState(false);
	function getMinistry() {
		setLoading(true);
		const ministryRef = collection(db, 'ministry');
		getDocs(ministryRef)
			.then((querySnapshot) => {
				const items = querySnapshot.docs
					.map((doc) => doc.data())
					.sort((a, b) => a.date - b.date)
					.sort((a, b) => a.month - b.month);
				setMinistry(items);
				setLoading(false);
			})
			.catch((error) => {
				console.error('Error fetching ministry:', error);
				setMinistry([]);
				setLoading(false);
			});
	}

	useEffect(() => {
		getMinistry();
	}, []);

	const currentYear = new Date().getFullYear();

	if (loading) {
		return <Spinner></Spinner>;
	}
	return (
		<>
			<Center>
				<Heading fontWeight="xbold" fontSize={['4xl', '4xl', '5xl', '5xl']} mt={8} color={sbtn}>
					Upcoming
				</Heading>
			</Center>
			<Text
				color={sbtn}
				lineHeight={'1em'}
				textAlign="center"
				fontFamily="heading"
				fontSize={['2xl', '3xl', '3xl', '3xl']}
				fontWeight={600}
				mt={[2, 4, 8, 10]}
			>
				{currentYear}
			</Text>
			<Box w="100%" mt={[6, 8, 12, 12]} px={0} pb={['6rem', '6rem', '6rem', '8rem']}>
				<Card min={ministry}></Card>
			</Box>
		</>
	);
}

export default Upcoming;

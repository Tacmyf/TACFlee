import { Box, Text, Image, Center, Flex, Heading, useColorMode, useColorModeValue } from '@chakra-ui/react';
import Advisors from '../components/Advisors';

function Pandemicadvice() {
	const sbtn = useColorModeValue('#F8F8F8', '#304FFF');

	const AdvisorsList = [
		{
			id: 1,
			name: 'Rev & Mrs Ronald Rohendra Rao',
			contact: '018-9123345',
			email: 'rohendrarao@gmail.com',
			image:
				'https://firebasestorage.googleapis.com/v0/b/flee-1866b.appspot.com/o/cropped.jpg?alt=media&token=5a410e9e-0d77-4150-82bd-fd0671cac43e',
		},
		{
			id: 2,
			name: 'Rev & Mrs Stephan Gunaraja',
			contact: '017-8851079',
			email: 'gunaraja08@gmail.com',
			image:
				'https://firebasestorage.googleapis.com/v0/b/flee-1866b.appspot.com/o/p2.jpg?alt=media&token=2f68c99e-89af-47eb-9bef-81d6290be759',
		},
		{
			id: 3,
			name: 'Bro Rannet',
			contact: '016-3677823',
			email: 'rannet.mano@gmail.com',
			image:
				'https://firebasestorage.googleapis.com/v0/b/flee-1866b.appspot.com/o/p3.jpg?alt=media&token=fde5e8f9-75c9-49ae-8622-202ed23f4468',
		},
		{
			id: 4,
			name: 'Sis Shoby',
			contact: '010-2121655',
			email: `shobanachandran@gmail.com`,
			image:
				'https://firebasestorage.googleapis.com/v0/b/flee-1866b.appspot.com/o/p3.jpg?alt=media&token=fde5e8f9-75c9-49ae-8622-202ed23f4468',
		},
	];

	return (
		<Box>
			<Center mt={[4, 16]}>
				<Text
					fontFamily="Poppins"
					justify="center"
					fontWeight="semi"
					fontSize={['lg', '2xl']}
					mb={[4, 8]}
					textAlign={['justify', 'center']}
				>
					During this pandemic, we know that many are going through difficult times, depression, suicidal thoughts and
					other hardships. We would like to help you. TAC MYF has assigned counselors to help you. If you need any
					assistance, someone to talk or someone to pray for you, please do not hesitate to call us. We are always ready
					to listen to you and pray with you or offer assistance.
				</Text>
			</Center>
			<Advisors datas={AdvisorsList} />
			<Center>
				<Text
					fontFamily="Poppins"
					justify="center"
					fontWeight="semi"
					fontSize={['lg', '2xl']}
					mb={[4, 8]}
					textAlign={'center'}
				>
					You May Contact Us From Tuesdays to Fridays, 1pm to 10pm
				</Text>
			</Center>
			<Center mt={16} mb={10}>
				<Image
					src="./assets/care.svg"
					alt="Care"
					width={[
						'100%', // base
						'50%', // 480px upwards
						'50%', // 768px upwards
						'50%', // 992px upwards
					]}
				/>
			</Center>
		</Box>
	);
}

export default Pandemicadvice;

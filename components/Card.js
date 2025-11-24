import { Box, Text, Center, useColorModeValue } from '@chakra-ui/react';

function Card(props) {
	const bg = useColorModeValue('#00102A', '#F8F8F8');
	const color = useColorModeValue('#F8F8F8', '#00102A');

	const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

	return (
		<>
			{props.min.map((min, id) => (
				<Box w={['100%', '100%', '100%', '70%']} key={id} mb={3} mx="auto">
					<Box display="flex">
						<Box bg="#F12A41" w={100} flexShrink={0} display="flex" justifyContent="center" alignItems="center">
							<Center>
								<Box my={0}>
									<Text
										color={color}
										lineHeight={'1em'}
										textAlign="center"
										fontFamily="heading"
										fontSize={'5xl'}
										fontWeight={300}
									>
										{min.date}
									</Text>
									<Text
										color={color}
										lineHeight={'1em'}
										textAlign="center"
										fontFamily="heading"
										fontSize={'2xl'}
										fontWeight={800}
									>
										{monthNames[min.month]}
									</Text>
								</Box>
							</Center>
						</Box>
						<Box py={'0.325em'} w="100%" pl={[2, 2, 10, 12]} bg={color}>
							<Box>
								<Text
									color={bg}
									lineHeight={8}
									textAlign="left"
									fontFamily="heading"
									fontSize={['xl', 'xl', '2xl', '2xl']}
									fontWeight={600}
								>
									{min.event}
								</Text>
							</Box>
							<Box>
								<Text lineHeight={5} fontFamily="heading" color={bg}>
									Time: {min.time}
								</Text>
							</Box>
							<Box>
								<Text lineHeight={5} fontFamily="heading" color={bg}>
									Venue: {min.venue}
								</Text>
							</Box>
							<Box>
								<Text lineHeight={5} fontFamily="heading" color={bg}>
									Contact: {min.contact}
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
			))}
		</>
	);
}

export default Card;

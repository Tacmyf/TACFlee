import { SimpleGrid, Box, Text, Center, useColorModeValue, Avatar } from '@chakra-ui/react';

function Advisors(props) {
	const bg = useColorModeValue('#00102A', '#F8F8F8');
	const color = useColorModeValue('#F8F8F8', '#070707');

	const { datas } = props;

	return (
		<Center>
			<SimpleGrid w={['100%', '100%', '100%', '80%']} columns={[1, 1, 1, 2]} justifyContent={'space-between'}>
				{datas.map((data, id) => {
					const { name, contact, email, image } = data;
					return (
						<Box w={['100%', '80%']} key={id} mb={[3, 3, 4, 10]} mx="auto">
							<Box display="flex">
								<Box
									bg="#27c497"
									w={100}
									flexShrink={0}
									display="flex"
									justifyContent="center"
									alignItems="center"
									borderLeftRadius={20}
								>
									<Center>
										<Box p={2}>
											<Avatar size="xl" name={name} src={image} />{' '}
										</Box>
									</Center>
								</Box>
								<Box py={'0.325em'} w="100%" pl={[2, 2, 2, 4]} bg={color} borderRightRadius={20}>
									<Box>
										<Text
											color={bg}
											lineHeight={1}
											my={2}
											textAlign="left"
											fontFamily="heading"
											fontSize={['xl', 'xl', '2xl', '2xl']}
											fontWeight={600}
										>
											{name}
										</Text>
									</Box>
									<Box>
										<Text lineHeight={5} mb={1} fontFamily="heading" color={bg}>
											Contact No : {contact}
										</Text>
									</Box>
									<Box>
										<Text lineHeight={5} fontFamily="heading" color={bg} mb={1} maxWidth={[200, 400]}>
											Email : {email}
										</Text>
									</Box>
								</Box>
							</Box>
						</Box>
					);
				})}
			</SimpleGrid>
		</Center>
	);
}

export default Advisors;

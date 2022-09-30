import React from 'react';
import { Center, Heading, useColorModeValue, Text, Box, Link } from '@chakra-ui/core';
import Spinner from './Spinner';

function EducationLink(props) {
	const sbtn = useColorModeValue('#F8F8F8', '#304FFF');
	const btn = '#304FFF';

	return (
		<>
			<Center>
				<Heading fontWeight="xbold" fontSize={['4xl', '4xl', '5xl', '5xl']} mt={8} color={sbtn}>
					Education
				</Heading>
			</Center>
			<Box w="100%" mt={[6, 8, 12, 12]} px={0} pb={['6rem', '6rem', '6rem', '8rem']}>
				<Text
					color={sbtn}
					lineHeight={'1em'}
					textAlign="center"
					fontFamily="heading"
					fontSize={['2xl', '3xl', '3xl', '3xl']}
					fontWeight={600}
					mt={[2, 4, 8, 10]}
				>
					{'TAC MYF EDUCATION FUND APPLICATION'}
				</Text>
				<Center>
					<Box w={['90%', '80%', '80%', '80%']}>
						<Text
							color={sbtn}
							lineHeight={'1em'}
							textAlign="center"
							fontFamily="heading"
							fontSize={['lg', 'lg', 'lg', 'xl']}
							fontWeight={400}
							my={2}
						>
							{
								'Dear applicants, we cordially invite you to apply for the TAC MYF Education Fund using this Google Form. Nevertheless, we would like to remind you that this initiative is limited to the members of the Tamil Annual Conference. Please click the button below to apply'
							}
						</Text>
					</Box>
				</Center>
				<Center>
					<Link href="https://forms.gle/WxLkfNXCjSX1HDVw5" isExternal>
						<Box
							onClick={() => console.log('Clicked')}
							fontFamily="Poppins"
							cursor="pointer"
							fontWeight="regular"
							fontSize="md"
							_hover={{ bg: btn }}
							bg={btn}
							color="#F8F8F8"
							size="lg"
							rounded={25}
							my={2}
							py={1}
							px={3}
						>
							<Text align={'center'}>Google Form Link</Text>
						</Box>
					</Link>
				</Center>
			</Box>
		</>
	);
}

export default EducationLink;

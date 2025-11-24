import { Box, Text, Center, Image } from '@chakra-ui/react';
import Link from 'next/link';

function Boximage(props) {
	return (
		<Center>
			<Link
				href={{
					pathname: '/article',
					query: { lesson: props.link, id: props.id },
				}}
			>
				<Box cursor="pointer">
					<Image
						minH={['md', 'md', 'lg', 'xl']}
						minW={[56, 'xs', 'xs', 'xs']}
						borderRadius="25px"
						objectFit="cover"
						src={props.imageUrl}
					></Image>
					<Center mt={2}>
						<Text fontFamily="Poppins" fontWeight="bold" fontSize="2xl" color={props.colorval}>
							{props.title}
						</Text>
					</Center>
				</Box>
			</Link>
		</Center>
	);
}

export default Boximage;

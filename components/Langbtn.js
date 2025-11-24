import { Box, Center, Text } from '@chakra-ui/react';

function Langbtn(props) {
	const eng = <Text fontFamily="heading">அ</Text>;
	const tam = <Text fontFamily="heading">A</Text>;

	return (
		<Box
			cursor="pointer"
			fontFamily="Poppins"
			fontWeight="bold"
			fontSize="2xl"
			w="60px"
			h="60px"
			_hover={{ bg: props.colorval }}
			bg={props.colorval}
			color="#F8F8F8"
			size="lg"
			rounded={50}
			display="flex"
			justifyContent="center"
			alignItems="center"
		>
			{props.lang ? eng : tam}
		</Box>
	);
}

export default Langbtn;

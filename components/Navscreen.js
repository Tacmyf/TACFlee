import { Center, Box, VStack, useColorModeValue } from '@chakra-ui/react';
import Linkpage from '../components/Linkpage';

function Navscreen(props) {
	const sbtn = useColorModeValue('#F8F8F8', '#304FFF');
	const navclr = useColorModeValue('rgba(0, 16, 42, 0.9)', 'rgba(248, 248, 248, 0.9)');

	return (
		<Center zIndex={100} minH="100vh" position="fixed" w="100vw" bg={navclr}>
			<Box justify="center" mb="200px">
				<VStack>
					<Linkpage page={'/'} name={'Home'} color={sbtn} menu={props.menu} setMenu={props.setMenu}></Linkpage>
					<Linkpage
						page={'/lesson'}
						name={'Bible Study'}
						color={sbtn}
						menu={props.menu}
						setMenu={props.setMenu}
					></Linkpage>
					<Linkpage
						page={'/upcoming'}
						name={'Upcoming'}
						color={sbtn}
						menu={props.menu}
						setMenu={props.setMenu}
					></Linkpage>
					<Linkpage
						page={'/counselling'}
						name={'Counselling'}
						color={sbtn}
						menu={props.menu}
						setMenu={props.setMenu}
					></Linkpage>
					<Linkpage
						page={'/education'}
						name={'Education'}
						color={sbtn}
						menu={props.menu}
						setMenu={props.setMenu}
					></Linkpage>
					<Linkpage
						page={'/contact'}
						name={'Contact'}
						color={sbtn}
						menu={props.menu}
						setMenu={props.setMenu}
					></Linkpage>
				</VStack>
			</Box>
		</Center>
	);
}

export default Navscreen;

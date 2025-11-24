import { Box, Flex, Image, useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import Link from 'next/link';
import Hamburger from 'hamburger-react';
import Navscreen from '../components/Navscreen';
import { useEffect, useState } from 'react';

function Navbar() {
	const [menu, setMenu] = useState(false);
	const { colorMode, toggleColorMode } = useColorMode();
	const bg = useColorModeValue('#00102A', '#F8F8F8');
	const color = useColorModeValue('#F8F8F8', '#00102A');
	const logo = useColorModeValue('./assets/logo-white.png', './assets/logo.png');
	const btn = '#304FFF';

	function opennav() {
		setMenu(!menu);
	}

	return (
		<div
			style={{
				position: 'fixed',
				width: '100vw',
				zIndex: '100',
			}}
		>
			<Flex
				as="nav"
				align="center"
				justify="space-between"
				wrap="wrap"
				pr={2}
				pl={2}
				pb="2"
				pt={4}
				bg={bg}
				color={color}
			>
				<Flex align="center">
					<IconButton
						colorScheme="none"
						color={btn}
						outline="none"
						onClick={opennav}
						icon={<Hamburger toggled={menu} size={20}></Hamburger>}
					></IconButton>
				</Flex>

				<Link href="/">
					<Box boxSize="60px">
						<Image src={logo} alt="Flee Logo" cursor="pointer" />
					</Box>
				</Link>

				<Box display={{ sm: true ? 'block' : 'none', md: 'block' }}>
					<IconButton
						colorScheme="none"
						color={btn}
						size="lg"
						_focus={{ outline: 'none' }}
						fontSize="2xl"
						icon={colorMode === 'light' ? <IoMdSunny /> : <IoMdMoon />}
						onClick={toggleColorMode}
					></IconButton>
				</Box>
			</Flex>
			{menu && <Navscreen menu={menu} setMenu={setMenu}></Navscreen>}
		</div>
	);
}

export default Navbar;

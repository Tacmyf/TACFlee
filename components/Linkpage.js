import Link from 'next/link';
import { Text } from '@chakra-ui/react';

function Linkpage(props) {
	const { menu, setMenu } = props;

	const pgclck = () => {
		setMenu(!menu);
	};

	return (
		<Link href={props.page}>
			<Text
				onClick={pgclck}
				fontFamily="Poppins"
				fontWeight="black"
				cursor="pointer"
				_hover={{ fontSize: ['4rem', '4rem', '5rem', '5rem'] }}
				color={props.color}
				fontSize={['5xl', '5xl', '6xl', '6xl']}
			>
				{props.name}
			</Text>
		</Link>
	);
}

export default Linkpage;

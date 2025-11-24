import { Box, Image, Heading, Container } from '@chakra-ui/react';
import Authorinfo from '../components/Authorinfo';
import Langbtn from '../components/Langbtn';
import { useState } from 'react';
import showdown from 'showdown';
import Guide from '../components/Guide';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Head from 'next/head';

function Articleempty(props) {
	const [lang, setLang] = useState(true);
	const [ans, setAns] = useState(false);
	const btn = '#304FFF';

	function changeLang() {
		setLang(!lang);
	}

	const conv = (text) => {
		const regex = /\\n|\\r\\n|\\n\\r|\\r/g;
		const converter = new showdown.Converter();
		return converter.makeHtml(text.replace(regex, '<br>'));
	};

	const createMarkup = (text) => {
		return {
			__html: text,
		};
	};

	const showAns = () => {
		setAns(!ans);
	};

	return (
		<>
			<Head>
				<title>{props.article.maintitle[0]}</title>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-ET3VV11Y1F"></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-ET3VV11Y1F');`,
					}}
				/>
			</Head>
			<Box my={[5, 8, 12, 16]}>
				<Container maxW={['2xl', '2xl', '4xl', '5xl']}>
					<Heading my={4} fontFamily="heading">
						{lang ? props.article.maintitle[0] : props.article.maintitle[1]}
					</Heading>
					<Authorinfo
						name={lang ? props.article.author.name[0] : props.article.author.name[1]}
						lang={lang}
						img={props.article.author.image}
					></Authorinfo>
					<Image
						mt={4}
						h={['xs', 'sm', 'md', 'xl']}
						w="100%"
						borderRadius="10px"
						objectFit="cover"
						src={props.article.coverimg}
					></Image>
					<Box
						my={[6, 8, 10, 12]}
						dangerouslySetInnerHTML={
							lang ? createMarkup(conv(props.article.lessontext[0])) : createMarkup(conv(props.article.lessontext[1]))
						}
						style={
							lang
								? {
										textAlign: 'justify',
										fontFamily: 'Poppins',
										fontWeight: '500',
										fontSize: '18px',
										whiteSpace: 'pre-line',
										wordBreak: 'break-word',
								  }
								: {
										textAlign: 'justify',
										fontFamily: 'Poppins',
										fontWeight: '500',
										fontSize: '18px',
										whiteSpace: 'pre-line',
										wordBreak: 'break-word',
								  }
						}
					></Box>
					{props.article.descGuide ? (
						<Guide
							ans={ans}
							showAns={showAns}
							createMarkup={createMarkup}
							conv={conv}
							lang={lang}
							article={props.article}
						/>
					) : (
						<Content
							ans={ans}
							showAns={showAns}
							createMarkup={createMarkup}
							conv={conv}
							lang={lang}
							article={props.article}
						/>
					)}
				</Container>
				<Box
					position="fixed"
					bottom="0"
					right={'0'}
					mb={['2rem', '3rem', '3rem', '5rem']}
					mr={['2rem', '3rem', '4rem', '8rem']}
					onClick={changeLang}
				>
					<Langbtn colorval={btn} lang={lang}></Langbtn>
				</Box>
				<Footer></Footer>
			</Box>
		</>
	);
}

export default Articleempty;

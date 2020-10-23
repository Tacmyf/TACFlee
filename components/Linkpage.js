import Link from "next/link"
import {Text}  from "@chakra-ui/core"

function Linkpage(props) {
    return (
        <Link href={props.page}>
            <Text fontFamily="Poppins" fontWeight="black" cursor="pointer" _hover={{ fontSize: ["4rem", "4rem", "5rem", "5rem",] }} color={props.color} fontSize={["5xl", "5xl", "6xl", "6xl"]}>
                {props.name}
            </Text>
        </Link>
    )
}

export default Linkpage
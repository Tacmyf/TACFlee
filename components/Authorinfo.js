const { HStack, Image, Text } = require("@chakra-ui/core");

function Authorinfo(props) {
  return (
    <HStack spacing={2}>
      <Image borderRadius="full" boxSize="30px" src={props.img} alt="header" />
      <Text fontSize="sm" fontWeight="medium" fontFamily="heading">
        {props.name}
      </Text>
      <Text fontSize="sm" fontWeight="normal">
        28 Sep 2020
      </Text>
    </HStack>
  );
}

export default Authorinfo;

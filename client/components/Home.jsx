import { Text, Flex } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex h='100%' p={[2, 3]} direction="column" bg={"black"}>
      <Text fontSize="1.5rem">Welcome to the home page!</Text>
    </Flex>
  );
};

export default Home;

import React, { useContext } from "react";
import { Box, Flex, Text, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import { UserContext } from "../../context/user/userContext";

const User = () => {
  const { state } = useContext(UserContext);
  const { user, isLoading } = state;

  if (isLoading || !user) {
    console.log(isLoading);
    return (
      <Box
        position={"relative"}
        top={"100px"}
        w={"100px"}
        h={"100vh"}
        margin={"auto"}
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Box>
    );
  }

  console.log("I'm the state reducer :", user, isLoading);

  return (
    <Box as="section" py={"2rem"} px={{ base: "1rem", lg: "5rem" }}>
      <Flex>
        <Box>
          <Text>{user.email}</Text>
          <Image src={user.picture} alt="user-photo" height={35} width={35} />
        </Box>
      </Flex>
    </Box>
  );
};

export default User;

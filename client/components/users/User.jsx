import React, { useContext } from "react";
import { Box, Flex, Text, Heading, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import { UserContext } from "../../context/user/userContext";
import UpdateProfileForm from "./forms/UpdateProfileForm";
import UpdateFavoriteContentForm from "./forms/UpdateFavoriteContentForm";

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
      <Flex gap={"7rem"}>
        <Box width={"100%"}>
          <Flex alignItems={"center"}>
            <Image
              src={user.picture}
              alt="user-photo"
              height={300}
              width={300}
            />
            <Heading as={"h2"}>{user.name}</Heading>
            <Text>{user.username}</Text>
          </Flex>
          <UpdateProfileForm />
        </Box>
        <Box width={"100%"}>
          <UpdateFavoriteContentForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default User;

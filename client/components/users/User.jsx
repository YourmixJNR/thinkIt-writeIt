import React, { useContext, useEffect } from "react";
import { Box, Flex, Text, Heading, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import { UserContext } from "../../context/user/userContext";
import PersonalSettingsForm from "./forms/PersonalSettingsForm";
import EditProfileForm from "./forms/EditProfileForm";

const User = () => {
  const { state, getCurrentUser } = useContext(UserContext);
  const { user, isLoading } = state;

  useEffect(() => {
    if (!user) {
      getCurrentUser();
    }
  }, []);

  if (isLoading || !user) {
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

  return (
    <Box as="section" py={"2rem"} px={{ base: "1rem", lg: "5rem" }}>
      <Flex
        gap={{
          base: "0rem",
          lg: "7rem",
        }}
        flexDirection={{
          base: "column",
          lg: "row",
        }}
      >
        <Box width={"100%"}>
          <Flex
            flexDir={"column"}
            alignItems={{
              base: "center",
              lg: "flex-start",
            }}
          >
            <Image
              src={user.picture}
              alt="user-photo"
              height={300}
              width={300}
            />
            <Box
              padding={"1rem 0rem"}
              textAlign={{
                base: "center",
                lg: "left",
              }}
            >
              <Heading as={"h2"} fontWeight={"600"} fontSize={"2rem"}>
                {user.name}
              </Heading>
              <Text fontSize={"1.5rem"}>{user.username}</Text>
            </Box>
          </Flex>
          <PersonalSettingsForm />
        </Box>
        <Box width={"100%"}>
          <EditProfileForm />
        </Box>
      </Flex>
    </Box>
  );
};

export default User;

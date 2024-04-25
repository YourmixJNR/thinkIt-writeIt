import React from "react";
import { Box, Flex, Text, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import { CiFacebook, CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";

const Profile = ({ profile }) => {
  return (
    <Box as="section" py={"2rem"} px={{ base: "1rem", lg: "5rem" }}>
      <Flex
        gap={{
          base: "0rem",
          lg: "2rem",
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
              src={profile.picture}
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
                {profile.name}
              </Heading>
              <Text fontSize={"1.5rem"}>{profile.username}</Text>
            </Box>
          </Flex>
          <Box>
            <Box>
              {profile.socialMedia?.facebook && (
                <Flex alignItems={"center"} gap={"0.5rem"}>
                  <CiFacebook fontSize={"1.3rem"} />
                  <Link
                    fontSize={"1rem"}
                    as={NextLink}
                    href={`${profile.socialMedia.facebook}`}
                    maxWidth={"15rem"}
                    whiteSpace={"nowrap"}
                    textOverflow={"ellipsis"}
                    overflow={"hidden"}
                  >
                    {profile.socialMedia.facebook}
                  </Link>
                </Flex>
              )}
            </Box>
            <Box>
              {profile.socialMedia?.instagram && (
                <Flex alignItems={"center"} gap={"0.5rem"}>
                  <CiInstagram fontSize={"1.3rem"} />
                  <Link
                    fontSize={"1rem"}
                    as={NextLink}
                    href={`${profile.socialMedia.instagram}`}
                    maxWidth={"15rem"}
                    whiteSpace={"nowrap"}
                    textOverflow={"ellipsis"}
                    overflow={"hidden"}
                  >
                    {profile.socialMedia.instagram}
                  </Link>
                </Flex>
              )}
            </Box>
            <Box>
              {profile.socialMedia?.twitter && (
                <Flex alignItems={"center"} gap={"0.5rem"}>
                  <CiTwitter fontSize={"1.3rem"} />
                  <Link
                    fontSize={"1rem"}
                    as={NextLink}
                    href={`${profile.socialMedia.twitter}`}
                    maxWidth={"15rem"}
                    whiteSpace={"nowrap"}
                    textOverflow={"ellipsis"}
                    overflow={"hidden"}
                  >
                    {profile.socialMedia.twitter}
                  </Link>
                </Flex>
              )}
            </Box>
            <Box>
              {profile.socialMedia?.linkedIn && (
                <Flex alignItems={"center"} gap={"0.5rem"}>
                  <CiFlexedin fontSize={"1.3rem"} />
                  <Link
                    fontSize={"1rem"}
                    as={NextLink}
                    href={`${profile.socialMedia.linkedIn}`}
                    maxWidth={"15rem"}
                    whiteSpace={"nowrap"}
                    textOverflow={"ellipsis"}
                    overflow={"hidden"}
                  >
                    {profile.socialMedia.linkedIn}
                  </Link>
                </Flex>
              )}
            </Box>
          </Box>
        </Box>
        <Box width={"100%"}>
          <Box>
            {profile?.bio && (
              <Box>
                <Heading as={"h3"} py={"1.5rem"}>
                  About me
                </Heading>
                <Text>{profile.bio}</Text>
              </Box>
            )}
          </Box>
          <Box>
            {profile?.favoriteContent && (
              <Box>
                <Heading as={"h3"} py={"1.5rem"}>
                  My favorite content
                </Heading>
                <Text>{profile.favoriteContent}</Text>
              </Box>
            )}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;

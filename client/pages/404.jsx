import React from "react";
import SessionLayout from "../components/layout/SessionLayout";
import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thinkit-writeit.vercel.app/" />
        <meta name="keywords" content="Writers" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="thinkIt-writeIt: We Provide Solutions for Writers."
        />
        <meta property="og:title" content="thinkIt-writeIt for Writers" />
        <meta
          property="og:description"
          content="thinkIt-writeIt: We Provide Solutions for Writers."
        />
        <meta property="og:url" content="https://thinkit-writeit.vercel.app/" />
        <meta
          property="og:image"
          content="https://thinkit-writeit.vercel.app/favicon.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourmixjnr" />
        <meta name="twitter:creator" content="@yourmixjnr" />
        <meta name="twitter:title" content="thinkIt-writeIt for Writers" />
        <meta
          name="twitter:url"
          content="https://thinkit-writeit.vercel.app/"
        />
        <meta
          name="twitter:description"
          content="thinkIt-writeIt: We Provide Solutions for Writers."
        />
        <meta
          name="twitter:image"
          content="https://thinkit-writeit.vercel.app/favicon.png"
        />
        <title>404 | Page Not Found</title>
      </Head>
      <SessionLayout>
        <Flex
          as={"section"}
          flexDir={"column"}
          justify={"center"}
          align={"center"}
          mb={"2rem"}
          minH={"100vh"}
        >
          <Heading as={"h1"} fontSize={{ base: "10rem", md: "15rem" }}>
            404
          </Heading>
          <Text
            fontSize={"1.25rem"}
            textAlign={"center"}
            maxW={"508px"}
            mb={"2rem"}
          >
            The page you’re looking for can’t be found. It may have been
            deleted, moved, or never existed.
          </Text>
          <Link
            as={NextLink}
            href="/"
            bg={"customYellow"}
            p={2}
            textDecor={"none"}
            fontSize={"1rem"}
            fontWeight={"semibold"}
            textColor={"white"}
            borderRadius={"0.2rem"}
            colorScheme="none"
          >
            Go to home
          </Link>
        </Flex>
      </SessionLayout>
    </>
  );
};

export default Custom404;

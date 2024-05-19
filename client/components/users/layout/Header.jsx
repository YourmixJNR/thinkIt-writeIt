import React, { useContext } from "react";
import image from "../../constant/image";
import Image from "next/image";
import {
  Flex,
  Box,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import Switch from "../../switch/Switch";
import NextLink from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdOutlineInfo } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { AuthContext } from "../../../context/auth/authContext";
import { UserContext } from "@/context/user/userContext";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session } = useSession();
  const { state } = useContext(UserContext);
  const { user } = state;
  const { logoutUser } = useContext(AuthContext);

  const router = useRouter();

  const toSetting = () => {
    router.push("/user");
  };

  const username = user?.username ? `@${user?.username}` : "/";
  const toUsername = () => {
    router.push(username);
  };

  return (
    <Box as={"header"} borderBottom={"1px"} borderBottomColor={"gray.200"}>
      <Flex
        maxW={"1440px"}
        m={"auto"}
        alignItems={"center"}
        justify={"space-between"}
        px={{ base: "1rem", lg: "5rem" }}
        py={"1rem"}
      >
        <Link
          as={NextLink}
          href={"/user"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Image src={image.SiteLogo} alt="site logo" width={60} />
        </Link>
        <Switch />
        {session && (
          <Menu isLazy>
            <MenuButton
              as={Box}
              _hover={{
                cursor: "pointer",
              }}
            >
              <Flex align={"center"}>
                <Image
                  src={session.user.picture}
                  alt="user-photo"
                  height={35}
                  width={35}
                />
                <IoMdArrowDropdown
                  style={{
                    fontSize: "1rem",
                  }}
                />
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem
                icon={
                  <MdOutlineSettings
                    style={{
                      fontSize: "1rem",
                    }}
                  />
                }
                onClick={toSetting}
              >
                Settings
              </MenuItem>
              <MenuItem
                icon={
                  <MdOutlineAccountCircle
                    style={{
                      fontSize: "1rem",
                    }}
                  />
                }
                onClick={toUsername}
              >
                View Profile
              </MenuItem>
              <MenuItem
                icon={
                  <MdOutlineInfo
                    style={{
                      fontSize: "1rem",
                    }}
                  />
                }
                as={"a"}
                href="https://github.com/YourmixJNR"
                target="_blank"
              >
                Get Help
              </MenuItem>
              <MenuDivider />
              <MenuItem
                color={"red"}
                icon={
                  <MdLogout
                    style={{
                      fontSize: "1rem",
                    }}
                  />
                }
                onClick={logoutUser}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Box>
  );
};

export default Header;

import { TbLayoutGridAdd } from "react-icons/tb";
import { TbUsersPlus } from "react-icons/tb";
import { RiLoginBoxLine } from "react-icons/ri";
import { RiLogoutBoxLine } from "react-icons/ri";

const links = [
    { name: "App", icon: <TbLayoutGridAdd />, path: "/" },
    { name: "Sign Up", icon: <TbUsersPlus />, path: "/register" },
    { name: "Login", icon: <RiLoginBoxLine />, path: "/login" },
    { name: "Logout", icon: <RiLogoutBoxLine />, path: "/login" },
]

export default links
import { useState, useContext } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import CustomInput from "../../ui/inputs/CustomInput";
import CustomButton from "../../ui/CustomButton";
import { UserContext } from "../../../context/user/userContext";
import CustomTextarea from "../../ui/CustomTextarea";

const UpdateProfileForm = () => {
  const { state } = useContext(UserContext);
  const { user } = state;

  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [hireable, setHireable] = useState(user.hireable);
  const [facebook, setFacebook] = useState(user.facebook);
  const [instagram, setInstagram] = useState(user.instagram);
  const [twitter, setTwitter] = useState(user.twitter);
  const [linkedIn, setLinkedIn] = useState(user.linkedIn);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };
  const handleFacebookChange = (e) => {
    setFacebook(e.target.value);
  };
  const handleInstagramChange = (e) => {
    setInstagram(e.target.value);
  };
  const handleTwitterChange = (e) => {
    setTwitter(e.target.value);
  };
  const handleLinkedInChange = (e) => {
    setLinkedIn(e.target.value);
  };

  return (
    <Box as="section">
      <Box w={"100%"} maxW={"550px"} m={"auto"}>
        <Heading as={"h3"} py={"1.5rem"}>
          Update Profile
        </Heading>
        <Box borderRadius={"1rem"} p={"0.5rem"}>
          <form>
            <Flex flexDirection={"column"} gap={"1rem"}>
              <CustomInput
                label={"Name"}
                type="text"
                placeholder="Enter FullName"
                value={name}
                onChange={handleNameChange}
              />
              <CustomInput
                label={"Username"}
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={handleUsernameChange}
              />
              <CustomTextarea
                label={"About Me"}
                type="text"
                placeholder="Enter Short Bio"
                value={bio}
                onChange={handleBioChange}
                rows={"5"}
              />
              <Flex gap={"2rem"} alignItems={"center"}>
                <CustomInput
                  label={"Facebook"}
                  type="text"
                  placeholder="Facebook Link"
                  value={facebook}
                  onChange={handleFacebookChange}
                />
                <CustomInput
                  label={"Instagram"}
                  type="text"
                  placeholder="Instagram Link"
                  value={instagram}
                  onChange={handleInstagramChange}
                />
              </Flex>
              <Flex gap={"2rem"} alignItems={"center"}>
                <CustomInput
                  label={"Twitter"}
                  type="text"
                  placeholder="Twitter Link"
                  value={twitter}
                  onChange={handleTwitterChange}
                />
                <CustomInput
                  label={"LinkedIn"}
                  type="text"
                  placeholder="LinkedIn Link"
                  value={linkedIn}
                  onChange={handleLinkedInChange}
                />
              </Flex>
              <Box flexShrink={0}>
                <CustomButton
                  buttonText={"Submit"}
                  type={"submit"}
                  // isLoading={state.isLoading}
                />
              </Box>
            </Flex>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default UpdateProfileForm;

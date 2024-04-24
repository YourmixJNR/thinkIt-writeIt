import { useState, useContext } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import CustomInput from "../../ui/inputs/CustomInput";
import CustomButton from "../../ui/CustomButton";
import { UserContext } from "../../../context/user/userContext";
import { CiFacebook, CiInstagram, CiTwitter, CiLinkedin } from "react-icons/ci";

const PersonalSettingsForm = () => {
  const { state, updateSettings } = useContext(UserContext);
  const { user } = state;

  const [name, setName] = useState(user?.name || "");
  const [username, setUsername] = useState(user?.username || "");
  const [facebook, setFacebook] = useState(user.socialMedia?.facebook || "");
  const [instagram, setInstagram] = useState(user.socialMedia?.instagram || "");
  const [twitter, setTwitter] = useState(user.socialMedia?.twitter || "");
  const [linkedIn, setLinkedIn] = useState(user.socialMedia?.linkedIn || "");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = {
      name: name,
      username: username,
      socialMedia: {
        facebook: facebook,
        instagram: instagram,
        twitter: twitter,
        linkedIn: linkedIn,
      },
    };

    await updateSettings(updateData);
  };

  return (
    <Box as="section">
      <Box w={"100%"}>
        <Heading as={"h3"} py={"1.5rem"}>
          Personal settings
        </Heading>
        <Box borderRadius={"1rem"} p={"0.5rem"}>
          <form onSubmit={handleSubmit}>
            <Flex flexDirection={"column"} gap={"2rem"}>
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
              <Flex gap={"2rem"} alignItems={"center"}>
                <CustomInput
                  label={"Facebook"}
                  type="text"
                  placeholder="Facebook Link"
                  value={facebook}
                  onChange={handleFacebookChange}
                  icon={<CiFacebook />}
                />
                <CustomInput
                  label={"Instagram"}
                  type="text"
                  placeholder="Instagram Link"
                  value={instagram}
                  onChange={handleInstagramChange}
                  icon={<CiInstagram />}
                />
              </Flex>
              <Flex gap={"2rem"} alignItems={"center"}>
                <CustomInput
                  label={"Twitter"}
                  type="text"
                  placeholder="Twitter Link"
                  value={twitter}
                  onChange={handleTwitterChange}
                  icon={<CiTwitter />}
                />
                <CustomInput
                  label={"LinkedIn"}
                  type="text"
                  placeholder="LinkedIn Link"
                  value={linkedIn}
                  onChange={handleLinkedInChange}
                  icon={<CiLinkedin />}
                />
              </Flex>
              <Box flexShrink={0}>
                <CustomButton
                  buttonText={"Update"}
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

export default PersonalSettingsForm;

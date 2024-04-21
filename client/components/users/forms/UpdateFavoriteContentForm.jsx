import { useState, useContext } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import CustomButton from "../../ui/CustomButton";
import { UserContext } from "../../../context/user/userContext";
import CustomTextarea from "../../ui/CustomTextarea";

const UpdateFavoriteContentForm = () => {
  const { state } = useContext(UserContext);
  const { user } = state;

  const [content, setContent] = useState(user.name);
  const [bio, setBio] = useState(user.bio);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  return (
    <Box as="section">
      <Box w={"100%"}>
        <Heading as={"h3"} py={"1.5rem"}>Edit profile</Heading>
        <Box borderRadius={"1rem"} p={"0.5rem"}>
          <form>
            <Flex flexDirection={"column"} gap={"2rem"}>
              <CustomTextarea
              label={"About Me"}
                type="text"
                placeholder="Enter Short Bio"
                value={bio}
                onChange={handleBioChange}
                rows={"10"}
              />

              <CustomTextarea
                label={"Impressum"}
                type="text"
                placeholder="Markdown not supported"
                value={content}
                onChange={handleContentChange}
                rows={"7"}
              />

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

export default UpdateFavoriteContentForm;

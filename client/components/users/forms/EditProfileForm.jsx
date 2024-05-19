import { useState, useContext } from "react";
import { Box, Heading, Flex } from "@chakra-ui/react";
import CustomButton from "../../ui/CustomButton";
import { UserContext } from "../../../context/user/userContext";
import CustomTextarea from "../../ui/CustomTextarea";

const EditProfileForm = () => {
  const { state, updateSettings } = useContext(UserContext);
  const { user } = state;

  const [bio, setBio] = useState(user?.bio || "");
  const [content, setContent] = useState(user?.favoriteContent || "");

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updateData = {
      bio: bio,
      favoriteContent: content,
    };

    await updateSettings(updateData);
  };

  return (
    <Box as="section">
      <Box w={"100%"}>
        <Heading as={"h3"} py={"1.5rem"}>
          Edit profile
        </Heading>
        <Box borderRadius={"1rem"} p={"0.5rem"}>
          <form onSubmit={handleSubmit}>
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
                label={"Favorite Content"}
                type="text"
                placeholder="Enter shot favorite content"
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

export default EditProfileForm;

import { defineStyle } from "@chakra-ui/react";
import { Avatar } from "../ui/avatar";
import { useColorMode } from "../ui/color-mode";

// Define a custom CSS style for the square shape and dynamic color
const getAvatarStyle = (colorMode) =>
  defineStyle({
    outlineWidth: "2px",
    outlineStyle: "solid",
    outlineColor: "gray.500", // Gray outline
    outlineOffset: "2px",
    borderRadius: "md", // Makes it square (medium rounded edges)
    bg: colorMode === "light" ? "gray.300" : "gray.700", // Light gray for light mode, darker for dark mode
    color: colorMode === "light" ? "black" : "white", // Black text in light mode, white in dark mode
  });

export const Headshot = () => {
  const { colorMode } = useColorMode(); // Get the current color mode

  return (
    <Avatar
      size="2xl"
      name="Jesus Catalan"
      src="https://cdn.pixabay.com/photo/2024/05/15/20/57/developer-8764523_1280.jpg"
      css={getAvatarStyle(colorMode)}
    />
  );
};

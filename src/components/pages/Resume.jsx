import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import Skills from "../structures/Skills";
import { useColorMode } from "../ui/color-mode";
import { LuExternalLink } from "react-icons/lu";

function Resume() {
    const { colorMode } = useColorMode();

    return (
        <Box
        bg={colorMode === "light" ? "gray.200" : "gray.800"}  // Light mode gray and dark mode dark gray
        color={colorMode === "light" ? "black" : "white"}  // Text color based on color mode
        p={6}
        borderRadius="xl"
        boxShadow="md"
        w={{ base: "100%", md: "75%", lg: "60%" }}
        m="auto"
        >
        <Flex direction="column" mb={4} w="100%" pl={2} pr={2} gap={4}>
            <Heading as="h2" size="lg" mb={2} color={colorMode === "light" ? "gray.900" : "gray.100"}>
            Resume
            </Heading>
            <Link href="" target="_blank" w="fit-content" color={colorMode === "light" ? "blue.500" : "blue.300"}>My Resume <LuExternalLink /></Link>

            <Heading as="h3" size="md" mb={2} color={colorMode === "light" ? "gray.900" : "gray.100"}>
            Languages used in projects:
            </Heading>
            <Skills />
        </Flex>
        </Box>
    );
}

export default Resume;


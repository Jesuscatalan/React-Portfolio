import { NavLink } from "react-router-dom";

import {
    Heading,
    Flex,
    Spacer,
    HStack,
    Button,
    VStack,
    Box
} from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { Headshot } from "../structures/Headshot";

function Navbar() {
    
    const { colorMode, toggleColorMode } = useColorMode();

    const navLinkStyle = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
    });

    return (
        <VStack w="100%" align="stretch">
            <Flex as="header" mb={4} alignItems="center" w="100%" pl={4} pr={4}>
                <Headshot />
                <Heading as="h1" size="2xl" mb={4} color="black" pl={4}>
                    Jesus Catalan
                </Heading>
                <Spacer />
                <Button onClick={toggleColorMode} borderRadius="lg">
                    {colorMode === "light" ? "Dark" : "Light"}
                </Button>
            </Flex>
            <Flex as="nav" direction="column" alignItems="flex-start" p={4} gap={6}>
                <NavLink
                    to="/"
                    style={navLinkStyle}>
                    <Box
                        color="black"
                        fontSize="lg"
                        fontFamily="Arial, sans-serif"
                        padding="2px 6px" // Reduced padding to make the box thinner
                        border="2px solid"
                        borderColor={colorMode === "light" ? "gray.200" : "gray.600"} // Lighter shade
                        borderRadius="md"
                        _hover={{
                            backgroundColor: colorMode === "light" ? "gray.100" : "gray.700",
                            cursor: "pointer"
                        }}
                        _active={{
                            backgroundColor: colorMode === "light" ? "gray.200" : "gray.600",
                        }}
                    >
                        Home
                    </Box>
                </NavLink>
                <NavLink
                    to="/about"
                    style={navLinkStyle}>
                    <Box
                        color="black"
                        fontSize="lg"
                        fontFamily="Arial, sans-serif"
                        padding="2px 6px"
                        border="2px solid"
                        borderColor={colorMode === "light" ? "gray.200" : "gray.600"}
                        borderRadius="md"
                        _hover={{
                            backgroundColor: colorMode === "light" ? "gray.100" : "gray.700",
                            cursor: "pointer"
                        }}
                        _active={{
                            backgroundColor: colorMode === "light" ? "gray.200" : "gray.600",
                        }}
                    >
                        About
                    </Box>
                </NavLink>
                <NavLink
                    to="/projects"
                    style={navLinkStyle}>
                    <Box
                        color="black"
                        fontSize="lg"
                        fontFamily="Arial, sans-serif"
                        padding="2px 6px"
                        border="2px solid"
                        borderColor={colorMode === "light" ? "gray.200" : "gray.600"}
                        borderRadius="md"
                        _hover={{
                            backgroundColor: colorMode === "light" ? "gray.100" : "gray.700",
                            cursor: "pointer"
                        }}
                        _active={{
                            backgroundColor: colorMode === "light" ? "gray.200" : "gray.600",
                        }}
                    >
                        Portfolio
                    </Box>
                </NavLink>
                <NavLink
                    to="/contact"
                    style={navLinkStyle}>
                    <Box
                        color="black"
                        fontSize="lg"
                        fontFamily="Arial, sans-serif"
                        padding="2px 6px"
                        border="2px solid"
                        borderColor={colorMode === "light" ? "gray.200" : "gray.600"}
                        borderRadius="md"
                        _hover={{
                            backgroundColor: colorMode === "light" ? "gray.100" : "gray.700",
                            cursor: "pointer"
                        }}
                        _active={{
                            backgroundColor: colorMode === "light" ? "gray.200" : "gray.600",
                        }}
                    >
                        Contact Me
                    </Box>
                </NavLink>
                <NavLink
                    to="/resume"
                    style={navLinkStyle}>
                    <Box
                        color="black"
                        fontSize="lg"
                        fontFamily="Arial, sans-serif"
                        padding="2px 6px"
                        border="2px solid"
                        borderColor={colorMode === "light" ? "gray.200" : "gray.600"}
                        borderRadius="md"
                        _hover={{
                            backgroundColor: colorMode === "light" ? "gray.100" : "gray.700",
                            cursor: "pointer"
                        }}
                        _active={{
                            backgroundColor: colorMode === "light" ? "gray.200" : "gray.600",
                        }}
                    >
                        Resume
                    </Box>
                </NavLink>
            </Flex>
        </VStack>
    );
}

export default Navbar;


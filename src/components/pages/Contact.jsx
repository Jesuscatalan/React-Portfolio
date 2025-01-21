import { Link } from "react-router-dom";
import { Box, Heading, Flex } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { ContactForm } from "../structures/ContactForm";
import { ContactLogic } from "../data-logic/ContactLogic";

function Contact() {
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
        <Heading as="h2" size="lg" mb={4} pl={2} color={colorMode === "light" ? "gray.900" : "gray.100"}>
            Contact Me
        </Heading>
        <Flex direction="column" mb={6} pl={2} pr={2}>
            <p>You can reach me at: <Link href="Jesusecatalan101598@icloud.com" style={{ textDecoration: "underline" }}>Jesusecatalan101598@icloud.com</Link> or by filling out the form below.</p>
        </Flex>
        <ContactLogic>
            {({ formData, errors, handleChange, handleBlur, handleSubmit }) => (
            <ContactForm
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmit={handleSubmit}
            />
            )}
        </ContactLogic>
        </Box>
    );
}

export default Contact;

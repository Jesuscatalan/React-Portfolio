import { Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";

function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex
            as="main"
            bg={colorMode === "light" ? "gray.200" : "gray.800"}  // Light mode gray and dark mode dark gray
            color="black"  // Default text color is black for both modes
            p={6}
            borderRadius="xl"
            boxShadow="md"
            w={{ base: "100%", md: "75%", lg: "60%" }}
            m="auto"
            direction="column"
            mb={4}
            pl={8}
            pr={8}
            gap={4}>
                <Heading as="h2" size="lg" mb={4} color={colorMode === "light" ? "gray.900" : "gray.100"}>
                   Hello my name is Jesus Catalan.
                </Heading>
                <Text fontSize="md" lineHeight="1.7" color={colorMode === "light" ? "black" : "white"}>
                My name is Jesus, and I was born and raised in Charlotte, North Carolina. When I started this coding bootcamp,
                    I had little knowledge about programming, but as the course progresses, I am slowly but surely surprising myself with what I am learning.
                      It has been an exciting challenge, and I am eager to see where this new journey takes me.
                </Text>
                <Spacer />
                <Text fontSize="md" lineHeight="1.7" color={colorMode === "light" ? "black" : "white"}>
                Outside of work and coding, I have a deep passion for football. I am a huge fan of the Carolina Panthers and love watching and discussing the sport. 
                    I also enjoy trying new foods, traveling to new places, and spending quality time with my family. As I move forward in this bootcamp, 
                    I am excited about the opportunities ahead and cannot wait to see what the future holds for me in the world of tech.
                </Text>
            </Flex>
    );
}

export default Home;


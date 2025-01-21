import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { Timeline } from "../structures/Timeline";

function About() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box
        bg={colorMode === "light" ? "gray.200" : "gray.800"}  // Light mode gray and dark mode dark gray
        color="black"  // Default text color is black for both modes
        p={6}
        borderRadius="xl"
        boxShadow="md"
        w={{ base: "100%", md: "75%", lg: "60%" }}
        m="auto"
        >
            <Heading as="h2" size="lg" mb={4} fontWeight="semibold" color={colorMode === "light" ? "gray.900" : "gray.100"} pl={{ base: 2, md: 0 }}>
                About Me
            </Heading>
            <Flex direction="row" mb={4} gap={{base: 2, md: 4}}>
                <Timeline />
                <Flex direction="column" mb={4} w={{ base: "100%", md: "75%" }} gap={4}>
                    <Text fontSize="md" lineHeight="1.7" color={colorMode === "light" ? "black" : "white"}>
                    My name is Jesus, and I was born and raised in Charlotte, North Carolina. When I started this coding bootcamp,
                    I had little knowledge about programming, but as the course progresses, I am slowly but surely surprising myself with what I am learning.
                      It has been an exciting challenge, and I am eager to see where this new journey takes me.
                    </Text>
                    <Text fontSize="md" lineHeight="1.7" color={colorMode === "light" ? "black" : "white"}>
                    Before diving into coding, I built my career in retail and management. 
                    I started as an hourly associate at Dicks Sporting Goods in 2017 and worked there until 2020. That year, 
                    I decided to take a different path and joined the North Carolina Highway Patrol Academy as a cadet. 
                    However, I quickly realized that it was not the right fit for me, so I left the academy and returned to Dicks Sporting Goods, 
                    this time as a manager, where I stayed until 2023. Currently, I am working as a manager in a restaurant, 
                    but I wanted something different and more fulfilling for my future—leading me to pursue a career in coding.
                    </Text>
                    <Text fontSize="md" lineHeight="1.7" color={colorMode === "light" ? "black" : "white"}>
                    Outside of work and coding, I have a deep passion for football. I am a huge fan of the Carolina Panthers and love watching and discussing the sport. 
                    I also enjoy trying new foods, traveling to new places, and spending quality time with my family. As I move forward in this bootcamp, 
                    I am excited about the opportunities ahead and can not wait to see what the future holds for me in the world of tech.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
}

export default About;

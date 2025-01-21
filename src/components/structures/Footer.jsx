import { Flex, Center, Text } from '@chakra-ui/react';
import { FaGithub, FaFacebook, FaSlack } from "react-icons/fa";

function Footer() {
    // const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex
        as="footer"
        direction="column"
        color="black"
        pt="10rem">
            <Center pt={3} gap={3}>
                <a href="https://github.com/Jesuscatalan" target="_blank">
                    <FaGithub size="2em" />
                </a>
                <a href="https://slack.com/" target="_blank">
                    <FaSlack size="2em" />
                </a>
                <a href="https://www.facebook.com/jesus.catalan.507" target="_blank">
                    <FaFacebook size="2em" />
                </a>
            </Center>
        </Flex>
    );
}

export default Footer;


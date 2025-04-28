import { Box, Flex, Heading } from "@chakra-ui/react";

function NavBar() {
    return (
        <Box background='bg.muted'>
            <Flex justify='space-between' align='center' p={3}>
                <Heading>BugTracker Pro</Heading>
            </Flex>
        </Box>
    )
}

export default NavBar;
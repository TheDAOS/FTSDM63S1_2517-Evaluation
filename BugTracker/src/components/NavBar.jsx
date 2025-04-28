import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { NavLink } from "react-router";

function NavBar() {
    return (
        <Box background='bg.muted'>
            <Flex justify='space-between' align='center' p={3}>
                <Heading>BugTracker Pro</Heading>

                <Flex justify='space-between' align='center' gap={5}>
                    <Link
                        variant="underline"
                        colorPalette="teal"
                    >
                        <NavLink to="/">Home</NavLink>
                    </Link>
                    <Link
                        variant="underline"
                        colorPalette="teal"
                    >
                        <NavLink to="/upload">Upload</NavLink>
                    </Link>
                    <Link
                        variant="underline"
                        colorPalette="teal"
                    >
                        <NavLink to="/logs">Logs</NavLink>
                    </Link>
                </Flex>

                <Heading color='bg.muted'>BugTracker Pro</Heading>
            </Flex >
        </Box >
    )
}

export default NavBar;
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";

function NavBar() {
    let navigate = useNavigate();

    return (
        <Box background='bg.muted'>
            <Flex justify='space-between' align='center' p={3}>
                <Heading
                    cursor='pointer'
                    onClick={() => {
                        navigate('/')
                    }}
                >BugTracker Pro</Heading>

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

                <Heading
                    color='bg.muted'
                    cursor='default'
                >BugTracker Pro</Heading>
            </Flex >
        </Box >
    )
}

export default NavBar;
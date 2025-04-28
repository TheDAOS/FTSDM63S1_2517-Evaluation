import { Flex } from "@chakra-ui/react"

function ContentBox({ children }) {
    return (
        <Flex mt={4} p={2} direction='column' justify='center' align='center' gap={5}>
            {children}
        </Flex>
    )
}

export default ContentBox;
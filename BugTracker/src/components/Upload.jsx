import { Box, Button, Card, Flex, Textarea } from "@chakra-ui/react"

function Upload() {
    return (
        <Card.Root w='100%' background='bg.muted'>
            <Card.Header textAlign='center' fontWeight='bold' fontSize='xl'> Upload json Log Here</Card.Header>
            <Card.Body>
                <Textarea
                    size='lg'
                    background='bg'
                    placeholder="Add JSON text here"
                    autoresize
                />

                <Flex mt={3} me={1} justify='end' align='center'>
                    <Button
                        variant="outline"
                        colorPalette="teal"
                    >Upload</Button>
                </Flex>
            </Card.Body>
        </Card.Root>
    )
}

export default Upload;
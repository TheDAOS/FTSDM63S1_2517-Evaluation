import { Card, Heading } from "@chakra-ui/react";

function Home() {
    return (
        <Card.Root background='bg.muted' variant='outline' w='60%'>
            <Card.Header>
                <Heading>Welcome to BugTracker Pro</Heading>
            </Card.Header>
            <Card.Body> App Build for Uploading and tacking Bugs easier </Card.Body>
        </Card.Root>
    )
}

export default Home;
import { Card, Heading } from "@chakra-ui/react";

function ErrorPage() {
    return (
        <Card.Root background='bg.muted' variant='outline' w='60%'>
            <Card.Header>
                <Heading>Error: 404</Heading>
            </Card.Header>
            <Card.Body> Page Not Found! </Card.Body>
        </Card.Root>
    )
}

export default ErrorPage;
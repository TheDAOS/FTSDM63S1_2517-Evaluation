import { Box, Button, Card, Flex, Textarea, Field } from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadLog } from "../Redux/action";
import { useNavigate } from "react-router";


function Upload() {
    const [textArea, setTextArea] = useState('');
    const [error, setError] = useState({ error: false, message: '' })
    const dispatch = useDispatch();
    let navigate = useNavigate();

    function handleUpload() {
        try {
            let data = JSON.parse(textArea);
            // { "id": 1, "timestamp": 1710000034, "severity": "high", "message": "Unhandled promise", "devId": "DEV1001" }
            if (
                data.id &&
                data.timestamp &&
                data.severity &&
                data.message &&
                data.devId
            ) {
                console.log('jj');
                setError({ error: false, message: '' })
                dispatch(uploadLog(data))
                navigate("/logs");

            } else {
                setError({
                    error: true,
                    message: 'Data not complete!'
                })
                console.log('error');
            }
        } catch (error) {
            setError({
                error: true,
                message: 'Input Invalid!'
            })
            console.log("handleUpload error", error);
        }
    }

    return (
        <Card.Root w='100%' background='bg.muted' variant='outline'>
            <Card.Header textAlign='center' fontWeight='bold' fontSize='xl'> Upload JSON Log Here</Card.Header>
            <Card.Body>

                <Field.Root invalid={error.error}>
                    <Field.Label>
                        JSON <Field.RequiredIndicator />
                    </Field.Label>
                    <Textarea
                        size='lg'
                        background='bg'
                        placeholder="Add JSON text here"
                        autoresize
                        value={textArea}
                        onChange={(e) => setTextArea(e.target.value)}
                    />
                    <Field.ErrorText>{error.message}</Field.ErrorText>
                </Field.Root>

                <Flex mt={3} me={1} justify='end' align='center'>
                    <Button
                        variant="outline"
                        colorPalette="teal"
                        onClick={handleUpload}
                    >Upload</Button>
                </Flex>
            </Card.Body>
        </Card.Root>
    )
}

export default Upload;
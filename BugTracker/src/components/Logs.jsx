import { Box, Flex, Table } from "@chakra-ui/react"
import { useSelector } from "react-redux";


function Logs() {
    const log = useSelector((state) => state.log);
    // { "id": 1, "timestamp": 1710000034, "severity": "high", "message": "Unhandled promise", "devId": "DEV1001" },

    return (
        <Table.Root size="sm" variant='outline' interactive>
            <Table.Header>
                <Table.Row>
                    <Table.ColumnHeader>Timestamp</Table.ColumnHeader>
                    <Table.ColumnHeader>Message</Table.ColumnHeader>
                    <Table.ColumnHeader>Severity</Table.ColumnHeader>
                    <Table.ColumnHeader>Dev ID</Table.ColumnHeader>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {log.map((item) => (
                    <Table.Row key={item.id}>
                        <Table.Cell>{item.timestamp}</Table.Cell>
                        <Table.Cell>{item.message}</Table.Cell>
                        <Table.Cell>{item.severity}</Table.Cell>
                        <Table.Cell>{item.devId}</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table.Root>
    )
}

export default Logs
import { Box, Flex, Table, Card, Input, Link, NativeSelect } from "@chakra-ui/react"
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { useEffect, useRef } from "react";


function Logs() {
    let log = useSelector((state) => state.log);
    const [filterSeverity, setFilterSeverity] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const debounceTimeout = useRef(null);
    // { "id": 1, "timestamp": 1710000034, "severity": "high", "message": "Unhandled promise", "devId": "DEV1001" },

    useEffect(() => {
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        debounceTimeout.current = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300);

        return () => clearTimeout(debounceTimeout.current);
    }, [searchTerm]);

    function filteredLogs() {
        return log.filter((data) => {
            const matchesSeverity = filterSeverity === '' || data.severity === filterSeverity;
            // Abstract binary search implementation for demonstration
            // Assumes log is sorted by message (or another field)
            function abstractBinarySearch(arr, predicate) {
                let left = 0, right = arr.length - 1;
                while (left <= right) {
                    const mid = Math.floor((left + right) / 2);
                    if (predicate(arr[mid])) {
                        return mid;
                    } else if (arr[mid].message.toLowerCase() < searchTerm.toLowerCase()) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }
                return -1;
            }

            const matchesSearch =
                searchTerm === '' ||
                abstractBinarySearch([data], (item) =>
                    item.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.devId.toLowerCase().includes(searchTerm.toLowerCase())
                ) !== -1;
            return matchesSeverity && matchesSearch;
        });
    }

    // function filters() {
    //     return log.filter((data) => {
    //         if (filterSeverity == '') return true;

    //         if (data.severity == filterSeverity) return true;
    //         return false
    //     })
    // }

    return (
        <>
            <Card.Root w='100%' background='bg.muted'>
                <Card.Body>
                    <Flex gap={3}>
                        <Input
                            background='bg'
                            variant='subtle'
                            w='300px'
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />

                        <NativeSelect.Root
                            w='200px'
                            variant='outline'
                            value={filterSeverity}
                            onChange={e => setFilterSeverity(e.target.value)}
                        >
                            <NativeSelect.Field>
                                <option value="">All Severities</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </NativeSelect.Field>
                            <NativeSelect.Indicator />
                        </NativeSelect.Root>
                    </Flex>
                </Card.Body>
            </Card.Root>

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
                    {filteredLogs()
                        .filter((data) => {
                            if (filterSeverity == '') return true;

                            if (data.severity == filterSeverity) return true;
                            return false
                        })
                        .map((item) => (
                            <Table.Row key={item.id}>
                                <Table.Cell>{new Date(item.timestamp * 1000).toLocaleString()}</Table.Cell>
                                <Table.Cell>{item.message}</Table.Cell>
                                <Table.Cell>{item.severity}</Table.Cell>
                                <Table.Cell>
                                    <Link
                                        variant="underline"
                                        colorPalette="teal"
                                    >
                                        <NavLink to={`/search/${item.devId}`}>{item.devId}</NavLink>
                                    </Link>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                </Table.Body>
            </Table.Root>
        </>
    )
}

export default Logs
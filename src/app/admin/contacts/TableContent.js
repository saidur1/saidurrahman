"use client";
import {
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow,
} from "@nextui-org/react";

export default function App({ initialData }) {
    return (
        <div className="p-12">
            <Table removeWrapper aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>EMAIL</TableColumn>
                </TableHeader>
                <TableBody>
                    {initialData?.map(({ id, name, email }) => (
                        <TableRow key="1">
                            <TableCell>{id}</TableCell>
                            <TableCell>{name}</TableCell>
                            <TableCell>{email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const UserTable = ({ data }) => {
    return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Active</TableCell>
                    <TableCell>Date Created</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {data.map((row) => (
                <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                    <TableCell>{row.username}</TableCell>
                    <TableCell>{row.first_name + " " + row.last_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.is_active ? "Yes" : "No"}</TableCell>
                    <TableCell>{row.date_joined.substr(0, 10)}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
}

export default UserTable
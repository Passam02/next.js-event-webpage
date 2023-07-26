import { Paper, Typography, Divider, Table, TableBody, TableCell, TableRow, TableContainer, TableHead } from "@mui/material"
const HotelPricing = () => {
    return(
        <Paper sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 20,
            mb: 15,
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0px 0px 25px -7px rgba(66, 68, 90, 1)"
        }}>
            <Typography variant="h3" pt={2}>Standard Room</Typography>
            <Typography padding={2}>Standard Rooms contain 1-3 beds, tea and coffee making facilities, space for work with table and chairs, bathroom with shower and hair dryer </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Package</TableCell>
                        
                        <TableCell align="right">Price (5 days, 4 nights)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Single Room
                        </TableCell>
                        <TableCell align="right">200 $</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Double Room
                        </TableCell>
                        <TableCell align="right">350 $</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Tripple Room
                        </TableCell>
                        <TableCell align="right">450 $</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant="h3" pt={2}>Exclusive Room</Typography>
            <Typography padding={2}>Exclusive Rooms contain 1-4 beds, tea and coffee making facilities, space for work with table and chairs, bathroom with shower and hair dryer, balcony, TV, Snacks</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Package</TableCell>
                        
                        <TableCell align="right">Price (5 days, 4 nights)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Single Room
                        </TableCell>
                        <TableCell align="right">280 $</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Double Room
                        </TableCell>
                        <TableCell align="right">420 $</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Tripple Room
                        </TableCell>
                        <TableCell align="right">520 $</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Quad Room
                        </TableCell>
                        <TableCell align="right">600 $</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography variant="h3" pt={2}>Supreme Room</Typography>
            <Typography padding={2}>Supreme Rooms contain 1-4 beds, tea and coffee making facilities, space for work with table and chairs, bathroom with shower and hair dryer, balcony, TV, Snacks, Mini-Bar with soft drinks and alcohol, Overall big open space</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Package</TableCell>
                        
                        <TableCell align="right">Price (5 days, 4 nights)</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Single Room
                        </TableCell>
                        <TableCell align="right">340 $</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Double Room
                        </TableCell>
                        <TableCell align="right">510 $</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Tripple Room
                        </TableCell>
                        <TableCell align="right">650 $</TableCell>
                        </TableRow>
                        <TableRow
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            Quad Room
                        </TableCell>
                        <TableCell align="right">720 $</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
export default HotelPricing
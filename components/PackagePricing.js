import { Paper, Typography, Divider, Box, Grid } from "@mui/material"
import Image from "next/image"

//<Divider sx={{marginTop: "24px"}} orientation="vertical" variant="middle" flexItem/>

const PackagePricing = () => {
    return(
        <Paper sx={{
            mt: 20,
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0px 0px 25px -7px rgba(66, 68, 90, 1)"
        }}>
            <Typography textAlign={"center"} variant="h3" pb={1}>Attendee Packages</Typography>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
            }}>
                <Grid container spacing={3}>
                    <Grid item xs={4} sx={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "0px !important",
                        marginTop: "24px",
                        alignItems: "center"
                    }}>
                        <Box sx={{
                            width: "80%",
                            alignItems: "center",
                            textAlign: "center"
                        }}>
                            <Typography variant="h3" mt={1}>BASIC</Typography>
                            <Typography variant="h4" mb={2}>30 $</Typography>
                            <Typography>Access to convent</Typography>
                            <Divider/>
                            <Typography>Attendee Badge</Typography>
                            <Divider/>
                            <Typography>Soft Drinks</Typography>
                            <Divider/>
                            <Typography mb={2}>Free Breakfast's</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "0px !important",
                        marginTop: "24px",
                        borderLeft: "grey 1px solid",
                        borderRight: "grey 1px solid",
                        alignItems: "center"
                    }}>
                        <Box sx={{
                            width: "80%",
                            alignItems: "center",
                            textAlign: "center"
                        }}>
                            <Typography variant="h3" mt={1}>SPONSOR</Typography>
                            <Typography variant="h4" mb={2}>50 $</Typography>
                            <Typography>+ All Basic Perks</Typography>
                            <Divider/>
                            <Typography>+ Custom Attendee Badge</Typography>
                            <Divider/>
                            <Typography>+ Special Gift For Sponsors</Typography>
                            <Divider/>
                            <Typography mb={2}>+ Free Parking Spot</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "0px !important",
                        marginTop: "24px",
                        alignItems: "center"
                    }}>
                        <Box sx={{
                            width: "80%",
                            alignItems: "center",
                            textAlign: "center"
                        }}>
                            <Typography variant="h3" mt={1}>FOUNDER</Typography>
                            <Typography variant="h4" mb={2}>75 $</Typography>
                            <Typography>+ Basic And Sponsor Perks </Typography>
                            <Divider/>
                            <Typography>+ Limited Alcohol Drinks</Typography>
                            <Divider/>
                            <Typography mb={2}>+ Limited T-Shirt</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )
}
export default PackagePricing
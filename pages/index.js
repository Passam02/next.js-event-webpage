import { Box, Button, Grid, Card, CardContent, CardActions, Typography } from "@mui/material"
import Link from "next/link"
import Image from "next/image"
import pagebanner from "../images/pagebanner.png"

const Index = () => {
    return(
        <Box>
            <Image src={pagebanner} style={{width: "100%"}}
            />
            <Box sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                mt: 4,
                mb: 4
            }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "40%",
                    mb: 4
                }}>
                    <Link href={"/register"}>
                        <Button 
                            fullWidth
                            variant="contained"
                            sx={{ mb: 2, height: "45px" }}
                        >
                            Register
                        </Button>
                    </Link>
                    <Link href={"/login"}>
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mb: 2, height: "45px" }}
                        >
                            Log In
                        </Button>
                    </Link>
                </Box>
                <Box sx={{
                    width: "70%"
                }}>
                    <Grid container spacing={6}>
                        <Grid item xs={4}>
                            <Card variant="outlined" sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "240px"}}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        REGISTRATION OPENING
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Registration begins 12.08 and will be open till all slots are taken, you can claim your spot with your account, but keep in mind, first come first served
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}>
                                    <Link href={"/faq"}>
                                        <Button>
                                            Learn More
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card variant="outlined" sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "240px"}}>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                        COVID REGULATIONS
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Covid regulations keep changing, for now there's no restrictions regarding the event but keep in mind that this may change !
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{
                                    display: "flex",
                                    justifyContent: "center"
                                }}>
                                    <Link href={"/faq"}>
                                        <Button>
                                            Learn More
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={4}>
                            <Card variant="outlined" sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                height: "240px"
                            }}>
                                <CardContent >
                                <Typography gutterBottom variant="h5" component="div">
                                        EVENT ATRACTIONS
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        We are still looking for people to run event atractions, whether it's just ideas, running your own panel or DJ's
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    
                                }}>
                                    <Link href={"/contact"}>
                                        <Button>
                                            Contact Us
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
export default Index
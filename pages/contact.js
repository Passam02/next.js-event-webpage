import { Paper, Typography, Box, TextField, Button } from "@mui/material"
const contact = () => {
    return(
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5rem"
        }}>
            <Box sx={{
                width: "30%",
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center"
            }}>
                <Typography variant="h3" marginBottom={"2rem"}>Contact Form</Typography>
                <Paper sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Typography width={"80%"} paddingTop={"1rem"}>Got any questions that you can't find the answer for ? Feel free to message us ! We will try our best to get back to you as fast as possible</Typography>
                    <form style={{width: "80%", marginTop: "2rem", marginBottom: "2rem"}} onSubmit={e => e.preventDefault()}>
                        <TextField
                            type="email"
                            variant='outlined'
                            label="Email"
                            fullWidth
                            required
                            sx={{marginBottom: "1rem"}}
                        />
                        <TextField
                            type="text"
                            variant='outlined'
                            label="Your message...."
                            fullWidth
                            required
                            multiline
                            rows={7}
                            sx={{marginBottom: "1rem"}}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                        >
                            Send Message   
                        </Button>
                    </form>
                </Paper>
            </Box>
        </Box>
    )
}
export default contact
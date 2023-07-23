import axios from "axios"
import LoginForm from "../components/LoginForm"
import { Box } from "@mui/material"
import Image from "next/image"
import pagebanner from "../images/pagebanner.png"

//https://cdn.discordapp.com/attachments/526411860514308147/1132627572933529690/pagebanner.png

const Index = () => {
    /* const data = axios.get("http://localhost:8080/api/content").then((res) => {
        return res.data
    })
    console.log(data) */
    return(
        <Box>
            <Image src={pagebanner} width={"100%"}
            />
            <Box>
                sdasdsa
            </Box>
        </Box>
    )
}
export default Index
import { Typography, Toolbar, AppBar } from "@mui/material"
import NavBarMenu from "./NavBarMenu"
import NavBarLogin from "./NavBarLogin"
import Link from "next/link"

const NavBar = () => {
    return(
        <AppBar color='primary' position='static' style={{ height: "64px" }}>
            <Toolbar>
                <Typography color='inherit'>
                EVENT  
                </Typography>
                <NavBarMenu/>
                <NavBarLogin/>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar
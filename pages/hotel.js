import { Paper, Typography, Box } from "@mui/material"
import Image from "next/image"
import hoteljpg from "../images/hotel.jpg"
import hotelroom from "../images/hotelroom1.jpg"
import hotelroom1 from "../images/hotelroom2.jpg"
import hotelroom2 from "../images/hotelroom3.jpg"
import hotelroom3 from "../images/hotelroom4.jpg"
import hotelroom4 from "../images/hotelroom5.jpg"
import hotellobby from "../images/hotellobby.jpg"

const hotel = () => {
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
            <Typography p={4} variant="h2">Novotel Warszawa Centrum</Typography>
            <Image src={hoteljpg} style={{width: "70%", height: "auto", boxShadow: "0px 0px 25px -7px rgba(66, 68, 90, 1)"}}/>
            <Typography variant="h6" p={4}>Marszałkowska 94/98, Srodmiescie, 00-510 Warsaw, Poland</Typography>
            <Image/>
            <Typography p={4}>
                Offering panoramic views of Warsaw, the modern-looking Novotel Warszawa Centrum is located in central Warsaw, a 5-minute walk from the Central Railway Station. The hotel serves a varied breakfast. WiFi is offered throughout this 4-star hotel. All areas are nonsmoking.
                The air conditioned rooms at Novotel Warszawa Centrum come with a flat-screen TV, tea and coffee facilities, and a safe. There is a mini-bar at a surcharge.The rooms also have a work area and armchairs or a sofa. All feature a spacious bathroom with a bath or a shower and a hairdryer.
                Novotel’s air conditioned restaurant and bar, NOVO2, serves international dishes and a wide variety of drinks. Front desk staff is available 24 hours a day. The hotel also offers a Wellness Center with a sauna and a wide choice of fitness equipment. It is located on the top floor, where guest can enjoy a spectacular panoramic view of the Polish capital.
                Novotel Centrum is located opposite the Palace of Culture and Science. Guests can enjoy good transport connections, with the Centrum Metro Station and many bus and tram stops only steps away.
                This is our guests' favorite part of Warsaw, according to independent reviews.
            </Typography>
            <Typography variant="h6">Hotel's Facilities</Typography>
            <Typography p={4}>
                Parking, 
                Free WiFi, 
                Spa, 
                Airport shuttle, 
                Family rooms, 
                Fitness center, 
                Non-smoking rooms, 
                Restaurant, 
                Bar, 
                Very Good Breakfast
            </Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "space-evenly",
                mb: 5,
                mt: 2
            }}>                
                <Image src={hotellobby} style={{width: "45%", height: "45%", boxShadow: "0px 0px 25px -7px rgba(66, 68, 90, 1)"}}/>
                <Image src={hotelroom} style={{width: "45%", height: "45%", boxShadow: "0px 0px 25px -7px rgba(66, 68, 90, 1)"}}/>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "space-evenly",
                mb: 5
            }}>                
                <Image src={hotelroom1} style={{width: "45%", height: "45%", boxShadow: "0px 0px 25px -7px rgba(66, 68, 90, 1)"}}/>
                <Image src={hotelroom2} style={{width: "45%", height: "45%", boxShadow: "0px 0px 25px -7px rgba(66, 68, 90, 1)"}}/>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "space-evenly",
                mb: 5
            }}>                
                <Image src={hotelroom3} style={{width: "45%", height: "45%", boxShadow: "0px 0px 25px -7px rgba(66, 68, 90, 1)"}}/>
                <Image src={hotelroom4} style={{width: "45%", height: "45%", boxShadow: "0px 0px 25px -7px rgba(66, 68, 90, 1)"}}/>
            </Box>
        </Paper>
    )
}
export default hotel
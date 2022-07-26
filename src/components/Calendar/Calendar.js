import {Box} from "@mui/material";
import "./Calendar.scss"

const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec',
}

function Calendar() {
    let date = new Date(), day = date.getDate(), month = date.getMonth()
    return (
        <>
            <Box display="flex"
                 flexDirection="column"
                 border="3px solid #3D82EB"
                 width="70px"
                 textAlign="center"
                 borderRadius="15px">
                <Box bgcolor="#3D82EB"
                     textTransform="uppercase"
                     color="white"
                     borderRadius="10px 10px 0 0"
                     boxShadow="0 0 0 1px #3D82EB"
                     fontWeight="1000"
                     letterSpacing="2px"
                     paddingLeft="2px">
                    {months[month]}
                </Box>
                <Box color="#3D82EB"
                     alignSelf="center"
                     fontSize="26px"
                     fontWeight="bold">
                    {day}

                </Box>
            </Box>
        </>
    );
}

export default Calendar;

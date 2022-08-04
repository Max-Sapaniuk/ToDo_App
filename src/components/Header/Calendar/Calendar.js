import {Box} from "@mui/material";
import {useSelector} from "react-redux";

const monthsEn = {
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

const monthsUa = {
    0: 'Січ',
    1: 'Лют',
    2: 'Бер',
    3: 'Кві',
    4: 'Тра',
    5: 'Чер',
    6: 'Лип',
    7: 'Сер',
    8: 'Вер',
    9: 'Жов',
    10: 'Лис',
    11: 'Гру',
}

function Calendar() {
    let date = new Date(), day = date.getDate(), month = date.getMonth()
    let currLng = useSelector(state => state.main.languageManage.currentLanguage)
    return (
        <>
            <Box display="flex"
                 flexDirection="column"
                 bgcolor="white"
                 border="3px solid #3D82EB"
                 width="65px"
                 minWidth="65px"
                 textAlign="center"
                 borderRadius="15px">
                <Box bgcolor="#3D82EB"
                     textTransform="uppercase"
                     color="white"
                     borderRadius="10px 10px 0 0"
                     boxShadow="0 0 0 2px #3D82EB"
                     fontSize="16px"
                     fontWeight="1000"
                     letterSpacing="2px"
                     paddingLeft="2px">
                    {currLng === "EN" ? monthsEn[month] : monthsUa[month]}
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

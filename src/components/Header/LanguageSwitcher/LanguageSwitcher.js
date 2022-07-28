import {Box, Button, Divider, Menu, MenuItem} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {changeLanguage} from "../../../redux/mainSlice";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function LanguageSwitcher() {
    const dispatch = useDispatch()
    const languageManage = useSelector(state => state.main.languageManage);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Button onClick={(event) => handleClick(event)}
                    color="secondary"
                    sx={{transition: '0s'}}
                    endIcon={open ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}>
                {languageManage.currentLanguage}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
            >
                <Divider/>
                {languageManage.allLanguages.map((curr) => {
                    return (
                        <MenuItem onClick={(event) => {
                            dispatch(changeLanguage({newLanguage: event.currentTarget.dataset.myValue}))
                            handleClose()
                        }}
                                  key={curr}
                                  value={curr}
                                  divider={true}
                                  data-my-value={curr}
                                  selected={curr === languageManage.currentLanguage}
                        >
                            {curr}
                        </MenuItem>
                    );
                })}
            </Menu>
        </Box>
    )
}

export default LanguageSwitcher
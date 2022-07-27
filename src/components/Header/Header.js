import Calendar from "../Calendar/Calendar";
import {AppBar, Box, Button, Menu, MenuItem, styled, Switch, Toolbar, Typography} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useState} from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import {useDispatch, useSelector} from "react-redux";
import {changeLanguage, setAnchor} from "../../redux/mainSlice";


function Header() {
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
        <AppBar position="static" color="primary" elevation={0}>
            <Toolbar>
                <Calendar/>

                <Typography variant="h1" sx={{flexGrow: 1}}>
                    Today
                </Typography>

                <Box>
                    <Button onClick={(event) => handleClick(event)}>
                        {languageManage.currentLanguage}
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={() => handleClose()}
                    >
                        {
                            languageManage.allLanguages.map((curr) => {
                                return (
                                    <MenuItem onClick={(event) => {
                                        dispatch(changeLanguage({newLanguage: event.currentTarget.dataset.myValue}))
                                        handleClose()
                                    }}
                                    key={curr} value={curr} data-my-value={curr}>
                                        {curr}
                                    </MenuItem>
                                );
                            })
                        }
                        {/*<MenuItem onClick={handleClose}>Profile</MenuItem>*/}
                        {/*<MenuItem onClick={handleClose}>My account</MenuItem>*/}
                        {/*<MenuItem onClick={handleClose}>Logout</MenuItem>*/}
                    </Menu>
                </Box>

                <ThemeSwitcher/>
                <MoreHorizIcon color="info" sx={{fontSize: '56px'}}/>
            </Toolbar>
        </AppBar>);
}

export default Header;

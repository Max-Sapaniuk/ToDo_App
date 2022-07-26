import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Box, Button, Divider, Menu, MenuItem} from "@mui/material";
import {changeSelectedTasks} from "../../../redux/mainSlice";
import {useTranslation} from "react-i18next";

function AdditionalMenu() {
    const dispatch = useDispatch()
    const selectedTasks = useSelector(state => state.main.tasks.selectedTasks);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { t } = useTranslation();

    return (
        <Box>
            <Button onClick={(event) => handleClick(event)} color="secondary">
                <MoreHorizIcon color={open ? "secondary" : 'info'} sx={{fontSize: '48px', margin: '-10px'}}/>
            </Button>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={() => handleClose()}
            >
                <Divider/>
                <MenuItem onClick={(event) => {
                    dispatch(changeSelectedTasks({newSelectedTasks: 'All'}))
                    handleClose()
                }}
                          selected={selectedTasks === 'All'}
                          divider={true}
                          key={'All'}>
                    {t('All')}
                </MenuItem>
                <MenuItem onClick={(event) => {
                    dispatch(changeSelectedTasks({newSelectedTasks: 'Completed'}))
                    handleClose()
                }}
                          selected={selectedTasks === 'Completed'}
                          divider={true}
                          key={'Completed'}>
                    {t('Completed')}
                </MenuItem>
                <MenuItem onClick={(event) => {
                    dispatch(changeSelectedTasks({newSelectedTasks: 'In Progress'}))
                    handleClose()
                }}
                          selected={selectedTasks === 'In Progress'}
                          divider={true}
                          key={'In Progress'}>
                    {t('In Progress')}
                </MenuItem>
                <MenuItem onClick={(event) => {
                    dispatch(changeSelectedTasks({newSelectedTasks: 'Removed'}))
                    handleClose()
                }}
                          selected={selectedTasks === 'Removed'}
                          divider={true}
                          key={'Removed'}>
                    {t('Removed')}
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default AdditionalMenu
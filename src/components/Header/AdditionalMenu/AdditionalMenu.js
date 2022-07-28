import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {Box, Button, Divider, Menu, MenuItem} from "@mui/material";
import {changeSelectedTasks} from "../../../redux/mainSlice";

function AdditionalMenu() {
    const dispatch = useDispatch()
    const selectedTasks = useSelector(state => state.main.selectedTasks);

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
            >
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
                    dispatch(changeSelectedTasks({newSelectedTasks: 'all'}))
                    handleClose()
                }}
                          selected={selectedTasks === 'all'}
                          divider={true}
                          key={'all'}>
                    All
                </MenuItem>
                <MenuItem onClick={(event) => {
                    dispatch(changeSelectedTasks({newSelectedTasks: 'completed'}))
                    handleClose()
                }}
                          selected={selectedTasks === 'completed'}
                          divider={true}
                          key={'completed'}>
                    Completed
                </MenuItem>
                <MenuItem onClick={(event) => {
                    dispatch(changeSelectedTasks({newSelectedTasks: 'inProgress'}))
                    handleClose()
                }}
                          selected={selectedTasks === 'inProgress'}
                          divider={true}
                          key={'inProgress'}>
                    In Progress
                </MenuItem>
                <MenuItem onClick={(event) => {
                    dispatch(changeSelectedTasks({newSelectedTasks: 'removed'}))
                    handleClose()
                }}
                          selected={selectedTasks === 'removed'}
                          divider={true}
                          key={'removed'}>
                    Removed
                </MenuItem>
            </Menu>
        </Box>
    )
}

export default AdditionalMenu
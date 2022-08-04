import {Breadcrumbs, Link, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {changeSelectedTasks} from "../../../redux/mainSlice";
import {useTranslation} from "react-i18next";

function NavBreadcrumbs() {
    const selectedTasks = useSelector(state => state.main.tasks.selectedTasks)
    const dispatch = useDispatch()

    const { t } = useTranslation();

    if (selectedTasks === "All") {
        return (
            <Breadcrumbs>
                <Typography variant="subtitle1">{t(selectedTasks)}</Typography>
            </Breadcrumbs>
        )
    }
    return (
        <>
            <Breadcrumbs>
                <Link href="src/components/Main/NavBreadcrumbs/NavBreadcrumbs"
                      onClick={(event) => {
                    event.preventDefault()
                    dispatch(changeSelectedTasks({newSelectedTasks: 'All'}))
                }}>{t("All")}</Link>
                <Typography variant="subtitle1">{t(selectedTasks)}</Typography>
            </Breadcrumbs>
        </>
    )
}

export default NavBreadcrumbs
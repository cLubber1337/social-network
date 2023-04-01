import React from 'react';
import {Button, Menu, MenuItem} from "@mui/material";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsAuth} from "redux/auth-reducer";

export const News = () => {
    const isAuth = useSelector(getIsAuth)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    if (!isAuth) return <Redirect to={"/login"}/>
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Login
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
import React from 'react';
import s from "./ProfileStatus.module.css"
import {IconButton, TextField} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
    }

    setEditMode = () => {
        this.setState(
            {
                editMode: !this.state.editMode
            }
        )
    }

    render() {
        return (
            <div className={s.content}>

                {!this.state.editMode &&
                    <div>
                <span className={s.statusText}>
                    Status: I am happy!
                </span>
                        <IconButton
                            color={"primary"}
                            sx={{mb: "10px", ml: "5px"}}
                            onClick={this.setEditMode}
                        >
                            <EditIcon
                                fontSize={"small"}
                            />
                        </IconButton>
                    </div>
                }
                {this.state.editMode &&
                    <div className={s.input}>
                        <TextField
                            id="outlined-helperText"
                            defaultValue="Default Value"
                            size={"small"}
                            sx={{width: "300px"}}
                        />
                        <IconButton
                            size={"small"}
                            color={"default"}
                            sx={{mt: "3px"}}
                            onClick={this.setEditMode}
                        >
                            <DoneIcon
                                fontSize={"medium"}
                            />
                        </IconButton>
                    </div>}


            </div>
        );
    }
}

export default ProfileStatus;
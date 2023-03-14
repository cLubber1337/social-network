import React, {ChangeEvent} from 'react';
import s from "./ProfileStatus.module.css"
import {IconButton, TextField} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';


type ProfileStatusType = {
    userStatus: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {


    state = {
        editMode: false,
        userStatus: this.props.userStatus
    }

    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            })
    }
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            })
        this.props.updateStatus(this.state.userStatus)
    }
    onBlurMode = () => {
        this.setState(
            {
                editMode: false
            })
    }
    editStatusOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState(
            {
                userStatus: e.currentTarget.value
            })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.userStatus !== this.props.userStatus) {
            this.setState({
                userStatus: this.props.userStatus
            })
        }

    }

    render() {
        return (
            <div className={s.content}>
                {!this.state.editMode &&
                    <div>
                <span className={s.statusText}>
                    {this.props.userStatus}
                </span>
                        <IconButton
                            color={"primary"}
                            sx={{mb: "10px", ml: "5px"}}
                            onClick={this.activateEditMode}
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
                            autoFocus
                            // defaultValue={this.props.userStatus}
                            value={this.state.userStatus}
                            size={"small"}
                            sx={{width: "600px"}}
                            onChange={this.editStatusOnChange}
                        />
                        <IconButton
                            size={"small"}
                            color={"default"}
                            sx={{mt: "3px"}}
                            onClick={this.deactivateEditMode}
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
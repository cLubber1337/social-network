import React, {ComponentType, FC} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/store";

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.authorization.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent: FC<mapStateToPropsType> = ({isAuth, ...restProps}) => {
        if (!isAuth) return <Redirect to={"/login"}/>
        return <Component  {...restProps as T}/>
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return connect(mapStateToProps)(RedirectComponent)


};

export default withAuthRedirect;
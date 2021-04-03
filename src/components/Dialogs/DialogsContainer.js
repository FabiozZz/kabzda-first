import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        dialogsPage:state.dialogsPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange:(body)=>{
            dispatch(updateNewMessageBodyCreator(body));
        },
        onSendMessageClick:()=>{
            dispatch(sendMessageActionCreator());
        }
    }
};

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
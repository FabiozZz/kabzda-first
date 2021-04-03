const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
        dialogs:[
            {id:1, name:'Ульяна'},
            {id:2, name:'Владимир'},
            {id:3, name:'Владлен'},
            {id:4, name:'Василий'},
            {id:5, name:'Антоха'},
            {id:6, name:'Серж'},
            {id:7, name:'Пантелеймон'},
            {id:8, name:'Филл'},
        ],
        messages: [
            {id: 1, message: 'Haw rot'},
            {id: 2, message: 'dkf я пьян'},
            {id: 3, message: 'sook'},
            {id: 4, message: 'asdjjjj '},
            {id: 5, message: 'Some text'},
            {id: 6, message: 'Пишите по русски'},
            {id: 7, message: 'Пантелеймон ау'},
            {id: 8, message: 'слышишь, я здесь'},
        ],
        newMessageBody:''
    };

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            let newAddMessage = {id: Date.now(), message: body};
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, newAddMessage]
            }
        default:
            return state;
    }
};
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});

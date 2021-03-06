import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

export let store = {
    _state:{
        dialogsPage:{
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
        },
        profilePage: {
            posts: [
                {id:1, message:'Это пост', likesCount:10},
                {id:2, message:'Мой новый пост', likesCount:23},
                {id:3, message:'create react app', likesCount:0},
                {id:4, message:'Все верно ', likesCount:1},
                {id:5, message:'Верной дорогой идете товарищи', likesCount:233},
                {id:6, message:'Пишите по русски', likesCount:9},
                {id:7, message:'Что то не так работает', likesCount:15},
                {id:8, message:'Здесь был василий и пил водку с пивом', likesCount:26},
            ],
            newPostText: ''

        },
        sidebar:{},
    },
    subscribes(observer){
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispath(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    },

    _callSubscriber(){
        console.log('State changed');
    },
}





window.store = store;
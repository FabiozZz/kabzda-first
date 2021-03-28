import {rerenderEntiereThree} from "../render";

export let state = {
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
}
export let addPosts = ()=>{
    let newPost = {
        id: Date.now(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntiereThree(state);
};
export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntiereThree(state);
};
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState ={
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
    newPostText: '',
    profile: null

};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                "id": Date.now(),
                "message": state.newPostText,
                "likesCount": 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
};
export const addPostActionCreat = () => ({type: ADD_POST});

export const updateNewPostActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfile = (profile) =>
    ({type: SET_USER_PROFILE, profile});
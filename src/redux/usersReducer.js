const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT_USERS = 'SET_TOTAL_COUNT_USERS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true
};

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map(user =>user.id === action.userId ?
                    {...user, followed: false} : user
                )
            };
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(user =>user.id === action.userId ?
                    {...user, followed: true} : user
                )
            };
        case SET_USERS:
            return  {
                ...state,
                users: [...action.users],
            };
        case SET_CURRENT_PAGE:
            return  {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_COUNT_USERS:
            return  {
                ...state,
                totalUsersCount: action.totalCount,
            };
        case TOGGLE_IS_LOADING:
            return  {
                ...state,
                isLoading: action.isLoading,
            };
        default:
            return state;
    }
};

export const follow = (userId)=>{
    return {type:FOLLOW,userId}
}
export const unFollow = (userId)=>{
    return {type:UNFOLLOW,userId}
}
export const setUsers = (users)=>{
    return {type:SET_USERS,users}
}
export const setCurrentPage = (currentPage)=>{
    return {type:SET_CURRENT_PAGE,currentPage}
}
export const setTotalCountUsers = (totalCount)=>{
    return {type:SET_TOTAL_COUNT_USERS,totalCount}
}
export const setIsLoading = (isLoading)=>{
    return {type:TOGGLE_IS_LOADING,isLoading}
}
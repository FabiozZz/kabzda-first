import React from 'react';
import classes from "./users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/paginator/Paginator";
import axios from "axios";
import {setIsLoading} from "../../redux/usersReducer";

export const Users = (props) => {
    return(
        <div>
            <Paginator
                currentPage={props.currentPage}
                leftBorder={props.leftBorder}
                rightBorder={props.rightBorder}
                pagesCount={props.pagesCount}
                isLoading={props.isLoading}
                onFirstPageChange={props.onFirstPageChange}
                onPrevPageChange={props.onPrevPageChange}
                onPageChange={props.onPageChange}
                onNextPageChange={props.onNextPageChange}
                onLastPageChange={props.onLastPageChange}
            />
            {
                props.users.map((user,index) => {
                    return (
                        <div key={index }>
                <span>
                    <div>
                        <NavLink to={`/profile/${user.id}`}>
                        <img className={classes.userPhoto} src={user.photos.small != null?user.photos.small: userPhoto} alt=""/>
                            </NavLink>
                    </div>
                    <div>
                        {user.followed ?
                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + user.id,{},
                                    {
                                        withCredentials:true,
                                        headers:{
                                            "API-KEY":"4b03154c-8a16-4fe6-bc0f-c37dad66906e"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) props.follow(user.id);
                                    });
                            }}>Unfollowed</button> :
                            <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + user.id,
                                    {
                                        withCredentials:true,
                                        headers:{
                                            "API-KEY":"4b03154c-8a16-4fe6-bc0f-c37dad66906e"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) props.unFollow(user.id);
                                    });
                            }}>Followed</button>}
                        {/*<button>Some button</button>*/}
                    </div>
                </span>
                        <span>
                <span>
                        <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
            </span>
                    </div>)
                })
            }
        </div>
    )
};
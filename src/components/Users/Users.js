import React from 'react';
import classes from "./users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {NavLink} from "react-router-dom";
import {Paginator} from "../common/paginator/Paginator";

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
                            <button onClick={() => props.follow(user.id)}>Unfollowed</button> :
                            <button onClick={() => props.unFollow(user.id)}>Followed</button>}
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
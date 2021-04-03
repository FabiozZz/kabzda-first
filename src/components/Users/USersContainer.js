import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setIsLoading,
    setTotalCountUsers,
    setUsers,
    unFollow
} from "../../redux/usersReducer";
import classes from "./users.module.css";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";

class UsersContainerAPI extends React.Component{

    componentDidMount() {
        this.props.setIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items);
                this.props.setTotalCountUsers(response.data.totalCount);
            }).catch(error => console.log(error));
    }

    onPageChange = (pageNumber) => {
        this.props.setIsLoading(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items);
            });
    };
    onFirstPageChange = () => {
        this.props.setIsLoading(true)

        this.props.setCurrentPage(1);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${1}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items);
            });
    };
    onLastPageChange = () => {
        let lastPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        this.props.setIsLoading(true)
        this.props.setCurrentPage(lastPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${lastPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items);
            });
    };
    onNextPageChange = () => {
        let next = this.props.currentPage + 1;
        this.props.setIsLoading(true)
        this.props.setCurrentPage(next);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${next}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items);
            });
    };
    onPrevPageChange = () => {
        let prev = this.props.currentPage - 1;
        this.props.setIsLoading(true)
        this.props.setCurrentPage(prev);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${prev}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsLoading(false)
                this.props.setUsers(response.data.items);
            });
    };
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let currentPage = this.props.currentPage
        let leftBorder = currentPage > (pagesCount - 3) ?pagesCount-4:currentPage < 3 ? 1 : currentPage - 2,
            rightBorder = currentPage < 3 ? 5 :
                currentPage > (pagesCount - 3) ? pagesCount : currentPage + 2;
        return (
            <>
                {this.props.isLoading ? <Preloader/> :
                    <Users
                        isLoading={this.props.isLoading}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        pagesCount={pagesCount}
                        leftBorder={leftBorder}
                        rightBorder={rightBorder}
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        onFirstPageChange={this.onFirstPageChange}
                        onPrevPageChange={this.onPrevPageChange}
                        onPageChange={this.onPageChange}
                        onNextPageChange={this.onNextPageChange}
                        onLastPageChange={this.onLastPageChange}/>
                }
            </>
        );
    };
};

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    };
};

export const UsersContainer = connect(mapStateToProps,
    {unFollow, follow,setUsers,setTotalCountUsers,setCurrentPage,setIsLoading})
(UsersContainerAPI);
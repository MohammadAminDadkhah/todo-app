import React from "react";
import {Link, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function ShowTodo() {
    const userLogin = useSelector(state => state.login);

    return <div className="flex flex-row mx-auto justify-center gap-6">
        <div className="main-div w-fit">
            <h1 className="text-center">You log in as {userLogin.username.toUpperCase()}</h1>

            <span className="border-b-2 border-[#478CCF]"/>

            <div className="flex flex-roe gap-8">
                <div className="flex flex-col">
                    <Link to="/ShowTodo/UserTodo">Show Todo</Link>
                    <Link to="/ShowTodo/AddTodo">Add Todo</Link>
                </div>
                <div className="flex flex-col items-end">
                    <Link to="/ShowTodo/EditProfile">Edit Profile</Link>
                    <Link className="btn bg-[#D71313] border-[#D71313] text-[#EBF4F6] w-20 text-center"
                          type="submit" to="/">Back</Link>
                </div>
            </div>
        </div>
        <Outlet/>
    </div>
}
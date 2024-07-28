import React from "react";
import {Link, Outlet, useOutlet} from "react-router-dom";

export default function ShowTodo() {
    const user = JSON.parse(localStorage.getItem('loginUser'));
    const outlet = useOutlet();

    return (
        <div className="main-div w-fit">
            <h1 className="text-center">You log in as {user.username.toUpperCase()}</h1>
            <Link to="/ShowTodo/1" state={{name:'ali'}}>asdas</Link>

            <span className="border-b-2 border-[#478CCF]"/>

            <div className="flex flex-roe gap-8">
                <div className="flex flex-col">
                    <h1>Add Todo</h1>
                    <h1>Show Todo</h1>
                </div>
                <div className="flex flex-col items-end">
                    <h1>Change account details</h1>
                    <a href="/" className="btn bg-[#D71313] border-[#D71313] text-[#EBF4F6] w-20 text-center" type="submit">Back</a>
                </div>
            </div>

            {
                outlet &&
                <div className="bg-rose-400">
                    <Outlet/>
                </div>
            }
        </div>
    );
}
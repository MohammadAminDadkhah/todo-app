import React, { useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {LoginUser} from "./contextAPI/LoginUserContext";

const members = JSON.parse(localStorage.getItem('members'));

export default function Login() {
    const loginUser = useContext(LoginUser);
    const ShowTodo = useNavigate();
    const [login, setLogin] = useState({
        username: undefined,
        password: undefined,
        error: undefined
    })

    const [showError, setShowError] = useState(false);

    const getFormInput = (event) => {
        setLogin(x => ({
            ...x,
            [event.target.name]: event.target.value
        }))
    }

    const loginHandler = () => {
        let user = members.find((member) => member.username === login.username && member.password === login.password);

        if (!user) {
            setLogin(x => ({
                ...x,
                error: "wrong username or password"
            }))
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 2000);
        } else {
            loginUser.setUser(login);
            ShowTodo("/ShowTodo");
        }
    }

    return <>
        {members.length === 0 && <div className="main-div w-1/3 mx-auto items-center">
            <p>There is no user defined.</p>
            <Link className="btn bg-[#071952] border-[#071952] text-[#EBF4F6] w-fit" to="/CreateUser">Add User</Link>
        </div>}
        {members.length !== 0 && <div className="main-div w-1/3 mx-auto">
            <form className="flex flex-col">
                <p>Enter Username</p>
                <input name="username" className="rounded text-[#071952] px-2 p-1 mb-4 mt-1" onChange={getFormInput}
                       type="text"/>

                <p>Enter Password</p>
                <input name="password" className="rounded text-[#071952] px-2 p-1 mb-4 mt-1" onChange={getFormInput}
                       type="password"/>

                <div className="flex gap-2">
                    <button className="btn bg-[#071952] border-[#071952] text-[#EBF4F6] w-20" type="button"
                            onClick={loginHandler}>Login
                    </button>
                    <Link to="/" className="btn bg-[#D71313] border-[#D71313] text-[#EBF4F6] w-20 text-center"
                          type="submit">Back</Link>
                </div>
            </form>
            {showError && <div className="text-red-600">{login.error}</div>}
        </div>}
    </>
}

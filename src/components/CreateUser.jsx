import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

export default function CreateUser() {
    const [members, setMembers] = useState(JSON.parse(localStorage.getItem("members")) || []);

    useEffect(() => {
        localStorage.setItem("members", JSON.stringify(members));
    }, [members]);

    const newUserHandler = (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const age = event.target.age.value;
        const password = event.target.password.value;

        const usernameExists = members.some((member) => member.username === username);

        if (usernameExists) {
            alert("Username already exists!");
            event.target.username.value = "";
            event.target.age.value = "";
            event.target.password.value = ""
            return;
        }

        let newMember = {};

        if (username && age && password) {
            newMember = {
                username: username,
                age: age,
                password: password,
            };
            setMembers([...members, newMember]);
            console.log(members);
            window.location.href = "/"
        } else
            alert("Enter all parameter")
    }

    return <div className="main-div w-fit">
        <form onSubmit={(event) => {newUserHandler(event)}}
              className="flex flex-col">

            <p>Enter Age</p>
            <input name="username" className="rounded text-[#071952] px-2 p-1 mb-4 mt-1" type="text"/>

            <p>Enter Age</p>
            <input name="age" className="rounded text-[#071952] px-2 p-1 mb-4 mt-1" type="number"/>

            <p>Enter Password</p>
            <input name="password" className="rounded text-[#071952] px-2 p-1 mb-4 mt-1" type="password"/>

            <div className="flex gap-2">
                <button className="btn bg-[#071952] border-[#071952] text-[#EBF4F6] w-20" type="submit">Submit</button>
                <Link to="/" className="btn bg-[#D71313] border-[#D71313] text-[#EBF4F6] w-20 text-center" type="submit">Back</Link>
            </div>
        </form>
    </div>
}

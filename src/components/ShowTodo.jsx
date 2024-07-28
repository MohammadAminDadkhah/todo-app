import React, {useState} from "react";
import {Link, useOutlet} from "react-router-dom";

export default function ShowTodo() {
    const user = JSON.parse(localStorage.getItem('loginUser'));
    const outlet = useOutlet();
    const [todos, setTodos] = useState([]);

    return <div className="flex flex-row mx-auto justify-center gap-6">
        <div className="main-div w-fit">
            <h1 className="text-center">You log in as {user.username.toUpperCase()}</h1>

            <span className="border-b-2 border-[#478CCF]"/>

            <div className="flex flex-roe gap-8">
                <div className="flex flex-col">
                    <Link to="/ShowTodo/AddTodo">Add Todo</Link>
                    <h1>Show Todo</h1>
                </div>
                <div className="flex flex-col items-end">
                    <h1>Change account details</h1>
                    <a href="/" className="btn bg-[#D71313] border-[#D71313] text-[#EBF4F6] w-20 text-center"
                       type="submit">Back</a>
                </div>
            </div>
            {/*<Link to="/ShowTodo/1" state={{name:'ali'}}>asdas</Link>*/}
        </div>

        {}
        {
            outlet &&
            <div className="main-div w-fit">
                {
                    todos.length !== 0 &&
                        <ul>
                            <li>asd</li>
                        </ul>
                }
            {todos.length === 0 && <p>There is no todos.<br/>First you need to add some. </p>}
            </div>
        }
    </div>
        ;
}
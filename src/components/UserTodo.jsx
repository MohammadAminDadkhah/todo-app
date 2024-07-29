import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {LoginUser} from "./contextAPI/LoginUserContext";

export function UserTodo() {
    const username = useContext(LoginUser).user.username;
    const todos = JSON.parse(localStorage.getItem("todos"))[username];
    const navigate = useNavigate()

    const close = () => {
        navigate("..")
    }

    return (
        <div className="main-div">
            <button className="text-xl text-[#999]" onClick={close}>x</button>
            {todos.length === 0 ? <div>There is no task available.</div> : null}
            {todos.length !== 0 && <div>
                <thead>
                    <tr>
                    <th>Task</th>
                    <th>Date</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((item, index) =>
                            <tr>
                                <td>{item.todo}</td>
                                <td>{item.remainingDate}</td>
                                <td>{item.status ? 'Done' : 'Pending'}</td>
                            </tr>
                        )
                    }
                </tbody>
            </div>}
        </div>
    );

}
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
        <div className="main-div w-1/3 ">
            {todos.length === 0 ? <div>There is no task available.</div> : null}
            {todos.length !== 0 && <table className="table-fixed">
                <thead>
                <tr>
                    <th className="border-2 border-t-0 border-b-gray-900">Task</th>
                    <th className="border-2 border-t-0 border-b-gray-900">Date</th>
                    <th className="border-2 border-t-0 border-b-gray-900">Status</th>
                </tr>
                </thead>
                <tbody>
                {
                    todos.map((item, index) =>
                        <tr key={index}>
                            <td className="border-2 ext-center border-b-gray-900">{item.todo}</td>
                            <td className="border-2 text-center border-b-gray-900">{item.remainingDate}</td>
                            <td className="border-2 text-center border-b-gray-900">{item.status ? 'Done' : 'Pending'}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>}
            <button className="text-xl text-[#999] w-fit mx-auto" onClick={close}>Close</button>
        </div>
    );

}
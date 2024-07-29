import {useContext, useEffect, useRef, useState} from "react";
import {LoginUser} from "./contextAPI/LoginUserContext";
import {useNavigate} from "react-router-dom";
import moment from "moment";

export function AddTodo() {
    const isSubmiting = useRef(false);
    const [showError, setShowError] = useState(false);
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || {});

    const navigate = useNavigate();
    const currentUsername = useContext(LoginUser).user.username;

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));

        if(isSubmiting.current)
            navigate("..");
    }, [todos]);

    const addTodo = (e) => {
        e.preventDefault();
        const currentDate = new Date();
        const todo = e.target.todo.value;
        const date = new Date(e.target.date.value);

        if (!todo || date < currentDate || isNaN(date)) {
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 1500);
        } else {
            const newTodo = {
                todo: todo,
                remainingDate: moment(date).fromNow(),
                Date: date,
                status: false,
            }

            const userTodos = todos[currentUsername] || [];

            isSubmiting.current = true;

            setTodos({
                ...todos,
                [currentUsername]: [
                    ...userTodos,
                    newTodo
                ]
            });
        };
    }

    const close = () => {
        navigate("..")
    }

    return (
        <div className="main-div relative">
            <button className="text-xl text-end absolute right-9 top-2" onClick={close}>x</button>
            <form onSubmit={(e) => addTodo(e)}>
                <p className="mb-1">Enter Todo</p>
                <input name="todo" className="mb-4" type="text"/>
                <p className="mb-1">Todo Expiration</p>
                <input name="date" className="w-full text-center mb-2" type="date"/>
                <button className="btn w-20 flex justify-center bg-[#071952] border-[#071952] text-[#EBF4F6] mx-auto">Add</button>
                {showError && <p className="bg-red-600 text-center mt-1 rounded">Wrong input</p>}
            </form>
        </div>
    );
}
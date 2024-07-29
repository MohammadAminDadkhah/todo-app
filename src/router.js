import {createHashRouter,} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import ShowTodo from "./components/ShowTodo";
import Layout from "./Layout";
import {UserTodo} from "./components/UserTodo";
import {AddTodo} from "./components/AddTodo";
import {EditProfile} from "./components/EditProfile";

export const router = createHashRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/Login",
                element: <Login/>
            },
            {
                path: "/CreateUser",
                element: <CreateUser/>
            },
            {
                path: "/ShowTodo",
                element: <ShowTodo/>,
                children: [
                    {
                        path: "/ShowTodo/UserTodo",
                        element: <UserTodo />
                    },
                    {
                        path: "/ShowTodo/AddTodo",
                        element: <AddTodo />
                    },
                    {
                        path: "/ShowTodo/EditProfile",
                        element: <EditProfile />
                    }
                ]
            },
        ]
    }

]);

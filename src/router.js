import {createHashRouter,} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import CreateUser from "./components/CreateUser";
import ShowTodo from "./components/ShowTodo";
import Layout from "./Layout";
import Zizi from "./components/Zizi";

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
                        path: "/ShowTodo/:id",
                        element: <Zizi />
                    }
                ]
            },
        ]
    }

]);

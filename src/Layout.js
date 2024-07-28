import './App.css';
import {Link, Outlet} from "react-router-dom";

function Layout() {
    console.log(arguments)
    return <div>
        <h1>
            Header
            <Link to="/Login">asd</Link>
        </h1>
        <Outlet />
        <h1>
            footer
        </h1>
    </div>
}

export default Layout;
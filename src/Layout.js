import './App.css';
import {Outlet} from "react-router-dom";
import LoginUserContext from "./components/contextAPI/LoginUserContext";

function Layout() {
    return (
        <LoginUserContext>
            <Outlet/>
        </LoginUserContext>
    )

}

{/*<h1>*/
}
{/*    Header*/
}
{/*    <Link to="/Login">asd</Link>*/
}
{/*</h1>*/
}
{/*<Outlet />*/
}
{/*<h1>*/
}
{/*    footer*/
}
{/*</h1>*/
}
export default Layout;
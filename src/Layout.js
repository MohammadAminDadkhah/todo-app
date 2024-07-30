import './App.css';
import {Outlet} from "react-router-dom";
import LoginUserContext from "./components/contextAPI/LoginUserContext";
import {Provider} from "react-redux";
import store from "./components/store/store";

function Layout() {
    return (
        <Provider store={store}>
            <LoginUserContext>
                <Outlet/>
            </LoginUserContext>
        </Provider>
    )
}

export default Layout;

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

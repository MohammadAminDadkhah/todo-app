import {Link} from "react-router-dom";

export function EditProfile() {

    return (
        <div className="main-div">
            <Link to="/ShowTodo/EditProfile/UserEdit">Edit Username</Link>
            <Link to="/ShowTodo/EditProfile/UserEdit?id=password">Edit Password</Link>
            <Link to="/ShowTodo/EditProfile/UserEdit?id=age">Edit Age</Link>
        </div>
    );
}
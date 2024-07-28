import {redirect, useNavigate} from "react-router-dom";

export default function Zizi() {
    // console.log(useParams())
    // console.log(useLocation())
    const a = useNavigate();
    const click = () => {
        a("/Login");
    }
    return (<h1 onClick={click}>b</h1>);
}
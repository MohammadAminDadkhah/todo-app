import {Link} from "react-router-dom";

const Home = () => {
    return <>
        <div className="main-div w-1/2">
            <div>
                <Link className="flex justify-center mb-3 sm:text-4xl" to="/">React App</Link>
                <p className="text-xs sm:text-2xl">Mohap Todo App</p>
            </div>
            <span className="border-b-2 border-[#478CCF]"/>
            <div className="flex gap-3 text-xs sm:text-xl">
                <Link className="btn bg-[#071952] border-[#071952] text-[#EBF4F6] hover:text-[#071952]" to="/CreateUser">Create User</Link>
                <Link className="btn bg-[#088395] border-[#088395] text-[#EBF4F6] hover:text-[#088395]" to="/Login">Login</Link>
            </div>
        </div>
    </>
}
export default Home;
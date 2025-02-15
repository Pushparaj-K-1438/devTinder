import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"
import { removeUser } from "../utils/userSlice";
import { backendBaseUrl } from "../utils/constants";

const NavBar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector((state) => state.user);
    const handleLogout = async () => {
        try {
            await axios.post(`${backendBaseUrl}/api/auth/logout`, {}, { withCredentials: true });
            dispatch(removeUser());
            navigate('/login');
        } catch (error) {
            console.error(error);
        }

    }
    return (
        <div className="navbar bg-base-300">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Profile Image"
                                src={backendBaseUrl+'/'+data?.profilePhoto} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <Link to='/profile' className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={handleLogout}><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar
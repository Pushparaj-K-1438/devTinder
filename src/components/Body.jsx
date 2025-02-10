import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useDispatch, useSelector } from "react-redux"
import { backendBaseUrl } from "../utils/constants"
import axios from "axios"
import { addUser } from "../utils/userSlice"
import { useEffect } from "react"

const Body = () => {
  const isLoggedin = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    if (isLoggedin) return;
    try {
      const user = await axios.get(`${backendBaseUrl}/api/auth/profile`, { withCredentials: true });
      dispatch(addUser(user.data));
    } catch (error) {
      const currentPath = location.pathname;
      if (error.status === 401 && currentPath !== '/register') {
        navigate('/login');
      }
      console.error(error);
    }
  }
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      {isLoggedin && <NavBar />}
      <Outlet />
      {isLoggedin && <Footer />}
    </>
  )
}

export default Body
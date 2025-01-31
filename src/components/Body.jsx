import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { useSelector } from "react-redux"

const Body = () => {
  const isLoggedin = useSelector((state) => state.user);
  return (
    <>
      {isLoggedin && <NavBar />}
      <Outlet />
      {isLoggedin && <Footer />}
    </>
  )
}

export default Body
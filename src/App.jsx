import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import Profile from "./components/Profile"
import Login from "./components/Login"
import { Provider } from "react-redux"
import appStore from "./utils/appstore"
import Feed from "./components/Feed"
import Register from "./components/Register"

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App

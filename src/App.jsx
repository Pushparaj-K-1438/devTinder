import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"
import Profile from "./Profile"
import Login from "./Login"
import { Provider } from "react-redux"
import appStore from "./utils/appstore"

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App

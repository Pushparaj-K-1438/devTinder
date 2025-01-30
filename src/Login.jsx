import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const Login = () => {
  const [email, setEmail] = useState("michael.scott@example.com");
  const [password, setPassword] = useState("dundermifflin123");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const loginRes = await axios.post("http://localhost:5000/api/auth/login", {
        email, password,
      }, { withCredentials: true, });
      console.log(loginRes.data);
      dispatch(addUser(loginRes.data));
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className="flex items-center justify-center h-full">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body gap-8">
          <h2 className="card-title flex justify-center">Login</h2>
          <div className="flex flex-col gap-2">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">User Name</span>
              </div>
              <div className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input type="email" className="grow" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <div className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
                </svg>
                <input type="password" className="grow" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </label>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
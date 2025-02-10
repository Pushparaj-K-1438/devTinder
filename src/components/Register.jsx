import axios from "axios";
import { useState } from "react"
import { backendBaseUrl } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [skills, setSkills] = useState("");
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [about, setAbout] = useState("");

    const dispatch = useDispatch();


    const registerUser = async () => {
        const splitedSkills = JSON.stringify(skills.split(","));
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("age", age);
            formData.append("gender", gender);
            formData.append("skills", splitedSkills);
            formData.append("about", about);
            if (profilePhoto) {
                formData.append("profilePhoto", profilePhoto);
            }
            const res = await axios.post(`${backendBaseUrl}/api/auth/register`,
                formData, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } }
            );
            dispatch(addUser(res.data));
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="flex items-center justify-center h-full">
            <div className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body gap-8">
                    <h2 className="card-title flex justify-center">Register</h2>
                    <div className="flex flex-col gap-2">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
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
                                <input type="name" className="grow" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                            </div>
                            <div className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="email" className="grow" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
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
                        <div className="flex gap-4 w-full">
                            <label className="form-control flex-1">
                                <div className="label"></div>
                                <div className="input input-bordered flex items-center gap-2">
                                    <input type="number" className="w-full" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} />
                                </div>
                            </label>
                            <label className="form-control flex-1">
                                <div className="label"></div>
                                <select className="select select-bordered w-full max-w-xs" value={gender} onChange={(e) => setGender(e.target.value)}>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </label>
                        </div>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                            </div>
                            <div className="input input-bordered flex items-center gap-2">
                                <input type="text" className="grow" placeholder="Enter Skills with comma seperated" value={skills} onChange={(e) => setSkills(e.target.value)} />
                            </div>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                            </div>
                            <input type="file" className="file-input file-input-bordered file-input-md w-full max-w-xs" onChange={(e) => setProfilePhoto(e.target.files[0])} accept="image/*" />
                        </label>
                        <label className="form-control">
                            <div className="label"></div>
                            <textarea className="textarea textarea-bordered h-24" placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                        </label>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={registerUser}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
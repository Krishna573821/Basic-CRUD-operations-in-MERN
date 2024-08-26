import "./Login.scss"
import axios from "axios";
import { useState } from "react";



const Login = () => {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDetails((prevDetails) => ({
          ...prevDetails,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userDetails);
    
        axios
          .post("/api/createUser", userDetails)
          .then((response) => {
            console.log("User Created Successfully: ", response);
            window.location.href = "/successful";
          })
          .catch((error) => {
            console.error("ERROR!!!!", error);
          });
      };
    
      return (
        <form
          className="container"
          action="/successful"
          method="POST"
          onSubmit={handleSubmit}
        >
          <h2>Register</h2>
    
          <div className="name">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name..."
              value={userDetails.name}
              onChange={handleChange}
            />
          </div>
    
          <div className="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email..."
              value={userDetails.email}
              onChange={handleChange}
            />
          </div>
    
          <div className="pass">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password..."
              value={userDetails.password}
              onChange={handleChange}
            />
          </div>
    
          <button type="submit">Register</button>
        </form>
      );
}

export default Login
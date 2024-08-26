import { useState } from "react";
import "./DeleteUser.scss";
import axios from "axios";

const DeleteUser = () => {
  let [userName, setUserName] = useState("");

  
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .delete("/api/deleteUser", {
        data: { name: userName },
      })
      .then(() => {
        console.log("User deleted successfully");
        window.location.href = "/successful";
      })
      .catch((error) => {
        console.error("Error Occured while deleting the data: ", error.message);
      });
  }

  return (
    <form className="container" onSubmit={handleSubmit} method="DELETE">
      <h2>Delete User</h2>
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name..."
          value={userName}
          onChange={(e)=>{setUserName(e.target.value)}}
        />
      </div>

      <button type="submit">Delete</button>
    </form>
  );
};

export default DeleteUser;

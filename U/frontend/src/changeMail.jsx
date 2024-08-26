import { useState } from "react";
import "./changeMail.scss";
import axios from "axios"

const ChangeMail = () => {
  let [changes, setChanges] = useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    setChanges((prev) => {
      return { ...prev, [name]: value };
    });

  }

  function handleSubmit(e){
    e.preventDefault();

    axios.patch("/api/updateUser",changes).then(()=>{
      console.log("Changes made successfully");
      window.location.href = "/successful";
    }).catch((error)=>{
      console.error("Error Occured while changing the data: ",error.message);
    })
  }

  return (
    <form className="container" onSubmit={handleSubmit} method="PATCH">
      <h2>Change Mail</h2>
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name..."
          value={changes.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter New Mail..."
          value={changes.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ChangeMail;

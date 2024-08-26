import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";

function App() {

  const [users, setUsers] = useState([]); 

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/getUsers");
        setUsers(response.data); 
      } catch (error) {
        console.error("Error: ", error.message);
      }
    };

    fetchUsers(); 

  }, []); 

  console.log(users);

  return (
    <>
      {users.map((user, index) => (
        <div key={index}>
          <h2>{user.userName}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import axios from "axios";

export default function PostComposer(props) {
  const [name, setName] = useState("");
  const [student, setStudent] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let data = await axios.get("http://localhost:8080/users");
    setUsers(data.data.users);
  };

  const addUser = async () => {
    const response = await axios.post("http://localhost:8080/users", {
      name: name,
      student: student,
    });
    console.log(response);
    setUsers(response.data.data);

    // axios
    //   .post("http://localhost:8080/users", {
    //     name: name,
    //     student: student,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     setUsers(response.data.data);
    //   });
  };

  return (
    <div>
      <div className="formInput">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          placeholder="Add name here"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="formInput">
        <label>Student:</label>
        <input
          type="text"
          name="student"
          value={student}
          placeholder="Add student type here"
          onChange={(e) => setStudent(e.target.value)}
        />
      </div>
      <button onClick={addUser}>Send</button>

      {users && users.length > 0 ? (
        users.map((user) => {
          return (
            <div>
              {user.name} - {user.student}
            </div>
          );
        })
      ) : (
        <p>no users</p>
      )}
    </div>
  );
}

import { useState, useEffect } from "react";
import axios from "axios";

export default function PostComposer(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [age, setAge] = useState(18);
  const [currentCourse, setCurrentCourse] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let data = await axios.get("http://localhost:8080/users");
    setUsers(data.data.users);
  };

  // alter add user to access and change db
  const addUser = async () => {
    const response = await axios.post("http://localhost:8080/users", {
      first_name: firstName,
      last_name: lastName,
      age: age,
      current_course: currentCourse,
    });
    console.log(response);
    setUsers(response.data.users);

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

  const deleteUser = async (id) => {
    const response = await axios.delete(`http://localhost:8080/users/${id}`);
    setUsers(response.data.users);
  };

  return (
    <div>
      <div className="formInput">
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          placeholder="Add First name here"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="formInput">
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          placeholder="Add Last name here"
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="formInput">
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="formInput">
        <label>Current Course:</label>
        <input
          type="text"
          value={currentCourse}
          placeholder="Add course type here"
          onChange={(e) => setCurrentCourse(e.target.value)}
        />
      </div>
      <button onClick={addUser}>Send</button>

      {users && users.length > 0 ? (
        users.map((user) => {
          return (
            <div key={user.id}>
              <p>
                {user.first_name} - {user.last_name}
              </p>
              <p>
                {user.age} - {user.current_course}
              </p>
              <button onClick={() => deleteUser(user.id)}>Delete ME</button>
            </div>
          );
        })
      ) : (
        <p>no users</p>
      )}
    </div>
  );
}

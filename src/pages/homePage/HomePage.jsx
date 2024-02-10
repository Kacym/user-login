import axios from "axios";
import { useState } from "react";
import { URL } from "../../utils/requestUrl";
import { useEffect } from "react";

export const HomePage = () => {
  const [users, setUsers] = useState([]);

  const getData = async () => {
    const response = await axios.get(URL);
    const data = await response.data;
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteUserBtn = async (id) => {
    const response = await axios.delete(`${URL}/${id}`);
    setUsers(response.data);
  };

  return (
    <div>
      {users.map((user, idx) => (
        <li key={idx}>
          <h1>{user.login}</h1>
          <p>{user.password}</p>
          <button onClick={() => deleteUserBtn(user._id)}>delete</button>
        </li>
      ))}
    </div>
  );
};

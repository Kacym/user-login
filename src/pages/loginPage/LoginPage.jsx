import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import axios from "axios";
import { URL } from "../../utils/requestUrl";

export const LoginPage = () => {
  const [users, setUsers] = useState([]);
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();

  const getUserData = async () => {
    const response = await axios.get(URL);
    const data = await response.data;
    setUsers(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    users.forEach((user) => {
      if (loginValue === user.login && passwordValue === user.password) {
        navigate("/");
      }
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => setLoginValue(e.target.value)}
          placeholder="Login"
          value={loginValue}
          type="text"
        />
        <Input
          onChange={(e) => setPasswordValue(e.target.value)}
          placeholder="Password"
          value={passwordValue}
          type="password"
        />

        <Button type="submit">sign in</Button>
      </form>
    </div>
  );
};

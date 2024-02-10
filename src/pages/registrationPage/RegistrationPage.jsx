import { useState } from "react";
import { Input } from "../../components/UI/Input";
import { Button } from "../../components/UI/Button";
import axios from "axios";
import { URL } from "../../utils/requestUrl";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
  const [loginValue, setLoginValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loginValue && passwordValue) {
      const newUserData = {
        login: loginValue,
        password: passwordValue,
      };
      try {
        const response = await axios.post(URL, newUserData);
        const data = await response.data;
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("write your password and name");
    }
  };

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

        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
};

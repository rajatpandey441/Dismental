import React, { createContext, useState } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (localStorage.getItem("jwt")) {
      let jwt = JSON.parse(localStorage.getItem("jwt"));
      let user = {
        userName: jwt_decode(jwt.accessToken).sub,
        userRole: jwt.userRole,
      };
      return user;
    }
    return null;
  });
  const navigate = useNavigate();
  //TOD authorization headerO: get
  const login = async (payload) => {
    const apiResponse = await axios.post("/auth/login", payload);

    localStorage.setItem(
      "jwt",
      JSON.stringify({
        accessToken: apiResponse.headers.get("authorization"),
        userRole: apiResponse.data.role[0].authority,
      })
    );
    console.log(jwt_decode(apiResponse.headers.get("authorization")));
    const decodedUser = jwt_decode(apiResponse.headers.get("authorization"));
    const user = {
      userName: decodedUser.sub,
      userRole: apiResponse.data.role[0].authority,
    };
    setUser(user);
    window.location.reload();
  };
  const logout = () => {
    if (localStorage.getItem("jwt")) {
      localStorage.removeItem("jwt");
    }
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

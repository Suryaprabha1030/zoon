import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from "./components/Login";
import Table from "./components/Table";
// import { useState } from "react";


function App() {
  // const [accessToken, setAccessToken] = useState(null);
  // const handleLogin = (access_token) => {
    // setAccessToken(access_token);
  // };
  return (
    <div>
    <BrowserRouter>
    
    <Routes>
      <Route index element={<Login/>} />
      <Route path="table" element={<Table/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

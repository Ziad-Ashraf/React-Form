import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './components/Navbar'
import Form from "./components/Form"
import { useState } from "react";
import UserData from "./components/UserData";

function App() {
  const company = "A2Z";
  const aboutTxt = "About Us";
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    address: "",
    password: "",
    fullname: "",
});
  return (
    <>
    <Navbar companyName= {company} aboutTxt={aboutTxt} isLoggedIn={isLoggedIn} setLoginState={setisLoggedIn}/>
    {isLoggedIn ? <UserData user={userData}/> : <Form  isLoggedIn={isLoggedIn} setLoginState={setisLoggedIn} userData={userData} setUserData={setuserData}/>}
    </>
  )
}

export default App

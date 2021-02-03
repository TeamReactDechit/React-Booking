import React from "react";
import Login from "../components/Login";
import Registration from "../components/Registration"
import "../css/LoginPage.css";


const LoginPage = () => {
    return (
    <div className="container mt-4">
        <div className="col-lg-6 col-12 float-start">
            <Login/>
        </div>
        <div className="col-lg-6 col-12 float-end">
            <Registration/>
        </div>
    </div>
    );
}
export default LoginPage;
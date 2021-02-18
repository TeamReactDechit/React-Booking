import React from "react";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
        <div className="container-fluid not-found">
            <img alt="sad-icon" className = "sad-icon" src="https://img.icons8.com/ios/452/sad.png"></img>
            <h1>Pagina non trovata.</h1>
            <Link to="/" className="link-btn">
                Home page
            </Link>
        </div>
        </>
    );
}

export default PageNotFound;

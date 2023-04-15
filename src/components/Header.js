import React from "react";
import "../assets/css/header.css";

function Header() {
    return (
        <header className="d-md-flex justify-content-between text-center">
            <div className="py-3">
                <h1>michael bloom</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-between justify-content-md-center pt-1 py-md-5">
                <a className="item text-decoration-none">Contact</a>
                <a className="item text-decoration-none">Personal Projects</a>
                <a className="item text-decoration-none">Photos</a>
            </div>
        </header>
    );
}

export default Header;

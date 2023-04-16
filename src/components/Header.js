import React from "react";
import "../assets/css/header.css";

function Header() {
    return (
        <header className="d-md-flex justify-content-between text-center">
            <div className="py-3">
                <a href="/" className="text-decoration-none text-white"><h1>michael bloom</h1></a>
            </div>
            <div className="d-flex flex-wrap justify-content-between justify-content-md-center py-2  py-md-5">
                <a href="/contact" className="item text-decoration-none">Contact</a>
                <a href="/projects" className="item text-decoration-none">Personal Projects</a>
                <a href="/photos"  className="item text-decoration-none">Photos</a>
            </div>
        </header>
    );
}

export default Header;
